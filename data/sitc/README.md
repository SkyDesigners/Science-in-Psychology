# SITC Guide

The user has authorised public brochure downloads. The supplied 28-page programme brochure is available at `public/sitc/psychology-counselling-programme.pdf` through the FAQ download button. A separate server copy at `data/sitc/programme-brochure.pdf` is used for AI mode and excluded from Git. Extracted text from all pages is in `lib/sitc/brochure-pages.json`; reviewed topic summaries are in `guide-knowledge.ts`.

Without credentials the chat works in brochure search mode and labels these answers. To enable AI mode, copy `.env.example` to `.env.local`, configure `OPENAI_API_KEY` securely, and provision the supplied original PDF as `data/sitc/programme-brochure.pdf` on the server. Restart Next.js. Never commit keys or use NEXT_PUBLIC_ variables. `OPENAI_MODEL` defaults to `gpt-6-luna`.

AI mode sends the original PDF, including its page images, and the last eight messages to the OpenAI Responses API per question (`store: false`). It incurs API usage and requires model access. The PDF is not publicly downloadable. Some extracted Sinhala uses legacy fonts; search mode cannot interpret all image-based content or arbitrary natural-language questions.

Answers cite brochure pages. Recognition claims and dates are attributed to the brochure. Current fees, eligibility, intake and payment details require admissions confirmation. Pages 26 and 27 list different Gampola street numbers; the guide flags that discrepancy. Unknown questions refer visitors to admissions; AI failures explicitly fall back to brochure search.

Notifications appear after 10 seconds and then every 75 seconds while the chat is closed and the tab visible. They disappear after nine seconds. Dismissing stops reminders during the mounted visit. Chat history stays in memory only.

The endpoint validates inputs and limits requests to 12 per IP per minute in memory. Production multi-instance hosting needs shared rate limiting and trusted forwarding headers. Credentials and raw provider errors stay server-side.

Validation: TypeScript and CSS compilation passed for the final hero design. Earlier chatbot endpoint checks covered fees, eligibility, timetable, subjects, Sinhala keywords, supervisors, unknown questions, validation, origin rejection and, before public downloads were requested, the absence of a public PDF. Live AI requires a configured key and has not been verified. Run `node scripts/test-sitc-guide.mjs` against an AI-disabled local server on port 3105.

Official API references:
- https://developers.openai.com/api/docs/guides/file-inputs
- https://developers.openai.com/api/docs/guides/text
