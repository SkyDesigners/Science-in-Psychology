'use client'

import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight, MessageCircle, Send, Sparkles, X } from 'lucide-react'

type Message = { role: 'user' | 'assistant'; text: string; pages?: number[]; mode?: string }
const welcome: Message = { role: 'assistant', text: 'ආයුබෝවන්! 👋 I’m your SITC Guide. Ask me about course fees, entry requirements, subjects, lecturers or anything in the programme brochure. සිංහල, English හෝ Singlish වලින් අහන්න.' }
const suggestions = ['What are the course fees?', 'Am I eligible?', 'What subjects will I study?', 'When are classes?']

export function QuickGuide() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([welcome])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [typing, setTyping] = useState('')
  const [notice, setNotice] = useState(false)
  const [mutedNotice, setMutedNotice] = useState(false)
  const log = useRef<HTMLDivElement>(null)
  const field = useRef<HTMLInputElement>(null)
  const toggle = useRef<HTMLButtonElement>(null)
  const sending = useRef(false)
  const request = useRef<AbortController | null>(null)
  const animation = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => () => {
    request.current?.abort()
    if (animation.current) clearInterval(animation.current)
  }, [])
  useEffect(() => {
    if (open || mutedNotice) { setNotice(false); return }
    const first = window.setTimeout(() => setNotice(true), 10000)
    const repeat = window.setInterval(() => { if (!document.hidden) setNotice(true) }, 75000)
    return () => { clearTimeout(first); clearInterval(repeat) }
  }, [open, mutedNotice])
  useEffect(() => {
    if (!notice) return
    const timer = window.setTimeout(() => setNotice(false), 9000)
    return () => clearTimeout(timer)
  }, [notice])
  useEffect(() => { if (open) field.current?.focus() }, [open])
  useEffect(() => { if (open && log.current) log.current.scrollTop = log.current.scrollHeight }, [messages, typing, busy, open])

  function close() { setOpen(false); toggle.current?.focus() }

  async function ask(question: string) {
    const text = question.trim()
    if (!text || sending.current) return
    sending.current = true
    setBusy(true)
    setInput('')
    const history = [...messages, { role: 'user' as const, text }]
    setMessages(history)
    request.current = new AbortController()
    try {
      const response = await fetch('/api/sitc-guide', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history.slice(-8).map(({ role, text }) => ({ role, text })) }),
        signal: request.current.signal,
      })
      const data = await response.json()
      if (!response.ok || typeof data.answer !== 'string') throw new Error('Unable to answer')
      const answer: Message = { role: 'assistant', text: data.answer, pages: data.pages, mode: data.mode }
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setMessages((current) => [...current, answer]); setBusy(false); sending.current = false
      } else {
        let cursor = 0
        animation.current = setInterval(() => {
          cursor += 10
          setTyping(answer.text.slice(0, cursor))
          if (cursor >= answer.text.length) {
            if (animation.current) clearInterval(animation.current)
            animation.current = null
            setMessages((current) => [...current, answer]); setTyping(''); setBusy(false); sending.current = false
          }
        }, 16)
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') return
      setMessages((current) => [...current, { role: 'assistant', text: 'I couldn’t load an answer just now. Please try again, or use Ask admissions below for help.' }])
      setBusy(false); sending.current = false
    }
  }
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); void ask(input) }

  return (
    <aside className="quick-guide" aria-label="SITC programme chatbot">
      {notice && !open ? (
        <div className="guide-nudge">
          <button className="guide-nudge__close" type="button" aria-label="Dismiss guide reminders" onClick={() => { setNotice(false); setMutedNotice(true) }}><X size={14} /></button>
          <button className="guide-nudge__message" type="button" onClick={() => setOpen(true)}>
            <Sparkles size={18} aria-hidden="true" />
            <span><strong>Need a little guidance?</strong><span lang="si">වැඩි විස්තර සඳහා මෙතැන click කරන්න.</span><small>Ask me about the SITC programme →</small></span>
          </button>
        </div>
      ) : null}
      {open ? (
        <section className="quick-guide__panel guide-chat" id="quick-guide-panel" aria-labelledby="quick-guide-title" onKeyDown={(event) => { if (event.key === 'Escape') close() }}>
          <header className="guide-chat__header">
            <div className="guide-chat__avatar"><MessageCircle size={24} aria-hidden="true" /><span /></div>
            <div><h2 id="quick-guide-title">SITC Guide</h2><p>Your programme companion</p></div>
            <button type="button" className="guide-chat__close" aria-label="Close chat" onClick={close}><X size={20} /></button>
          </header>
          <div className="guide-chat__source"><Sparkles size={13} aria-hidden="true" /> Answers from your 28-page programme brochure</div>
          <div ref={log} className="guide-chat__messages" role="log" aria-label="Chat messages" aria-live="polite" aria-relevant="additions">
            {messages.map((message, index) => (
              <div className={`guide-message guide-message--${message.role}`} key={index}>
                <span className="guide-message__author">{message.role === 'user' ? 'You' : 'SITC Guide'}</span>
                <p>{message.text}</p>
                {message.pages?.length ? <small>Brochure · {message.pages.length === 1 ? 'page' : 'pages'} {message.pages.join(', ')}</small> : null}
                {message.mode === 'brochure' ? <small className="guide-message__mode">Brochure search answer</small> : null}
              </div>
            ))}
            {busy ? <div className="guide-message guide-message--assistant" aria-live="off"><span className="guide-message__author">SITC Guide</span>{typing ? <p className="guide-typewriter">{typing}</p> : <div className="guide-typing"><span /><span /><span /><small>Looking through the brochure</small></div>}</div> : null}
          </div>
          <div className="sr-only" role="status">{busy ? 'SITC Guide is typing' : ''}</div>
          {messages.length === 1 ? <div className="guide-chat__suggestions">{suggestions.map((question) => <button key={question} type="button" disabled={busy} onClick={() => void ask(question)}>{question}</button>)}</div> : null}
          <form className="guide-chat__form" onSubmit={submit}>
            <label className="sr-only" htmlFor="guide-question">Ask a programme question</label>
            <input ref={field} id="guide-question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Type your question…" maxLength={1000} autoComplete="off" />
            <button type="submit" disabled={busy || !input.trim()} aria-label="Send message"><Send size={18} /></button>
          </form>
          <footer className="guide-chat__footer"><span>Brochure-based guidance</span><a href="https://wa.link/bsc-psychology" target="_blank" rel="noreferrer noopener">Ask admissions <ArrowUpRight size={13} aria-hidden="true" /></a></footer>
        </section>
      ) : null}
      <button ref={toggle} className="quick-guide__toggle guide-launcher" type="button" aria-expanded={open} aria-controls={open ? 'quick-guide-panel' : undefined} onClick={() => open ? close() : setOpen(true)}>
        {open ? <X aria-hidden="true" size={20} /> : <MessageCircle aria-hidden="true" size={21} />}
        <span>{open ? 'Close chat' : 'Ask SITC Guide'}</span>
        {!open ? <span className="guide-launcher__status" aria-hidden="true" /> : null}
      </button>
    </aside>
  )
}
