import assert from 'node:assert/strict'

// Run against a local Next server with OPENAI_API_KEY unset; no paid API calls.
const origin = process.env.GUIDE_TEST_ORIGIN || 'http://127.0.0.1:3105'
async function ask(text) {
  const response = await fetch(`${origin}/api/sitc-guide`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: [{ role: 'user', text }] }),
  })
  assert.equal(response.status, 200)
  const body = await response.json()
  assert.equal(body.mode, 'brochure')
  return body
}

const page = await fetch(origin)
assert.equal(page.status, 200)
assert.match(await page.text(), /Ask SITC Guide/)

for (const [question, expected, pageNumber] of [
  ['What are the course fees?', /14,500.*24.*348,000/s, 15],
  ['Am I eligible?', /30 credits/i, 13],
  ['When are classes?', /Saturdays and Sundays.*7 pm/s, 17],
  ['What subjects will I study?', /PC3608.*Final Research Dissertation/s, 10],
  ['ගාස්තු කීයද?', /14,500/, 15],
  ['Who are the dissertation supervisors?', /Kumesh Prabhashini/, 8],
]) {
  const answer = await ask(question)
  assert.match(answer.answer, expected)
  assert.ok(answer.pages.includes(pageNumber), `${question}: missing page ${pageNumber}`)
}
assert.match((await ask('What is the weather in Tokyo?')).answer, /couldn’t find a reliable answer/)
assert.match((await ask('hello')).answer, /Hello/)

const invalid = await fetch(`${origin}/api/sitc-guide`, { method: 'POST', body: '{broken' })
assert.equal(invalid.status, 400)
const empty = await fetch(`${origin}/api/sitc-guide`, { method: 'POST', body: JSON.stringify({ messages: [{ role: 'user', text: '' }] }) })
assert.equal(empty.status, 400)
const crossOrigin = await fetch(`${origin}/api/sitc-guide`, { method: 'POST', headers: { Origin: 'https://unrelated.invalid' }, body: '{}' })
assert.equal(crossOrigin.status, 403)
const privatePdf = await fetch(`${origin}/sitc/programme-brochure.pdf`)
assert.equal(privatePdf.status, 404)

console.log('Passed: homepage, six brochure topics including Sinhala and supervisors, unknown question, greeting, invalid requests, origin rejection, and private PDF.')
