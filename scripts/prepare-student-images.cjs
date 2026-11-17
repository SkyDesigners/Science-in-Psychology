const fs = require('node:fs')
const path = require('node:path')
const sharp = require('sharp')

async function prepare() {
  for (const name of ['graduate-family', 'graduate-certificate', 'graduate-regalia']) {
    const input = path.join('public', 'sitc', `${name}-enhanced.b64`)
    if (!fs.existsSync(input)) continue
    const output = path.join('public', 'sitc', `${name}-upscaled.jpg`)
    const buffer = Buffer.from(fs.readFileSync(input, 'utf8').trim(), 'base64')
    const info = await sharp(buffer)
      .resize({ width: 3072, height: 3072, fit: 'inside', kernel: 'lanczos3' })
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(output)
    fs.unlinkSync(input)
    console.log(JSON.stringify({ output, width: info.width, height: info.height, bytes: info.size }))
  }
}

prepare().catch(error => { console.error(error); process.exitCode = 1 })
