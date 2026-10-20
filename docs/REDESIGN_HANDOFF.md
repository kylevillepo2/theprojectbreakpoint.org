# Landing page redesign handoff

Implemented in the existing React 19 / Create React App project, retaining React Router, Tailwind, existing green and tennis-yellow branding, Vercel Analytics and Speed Insights, Venmo, and the MongoDB-backed contact and subscription endpoints. No framework migration or application dependency installation. The existing uncommitted chapter, event, routing, and API work was preserved and extended.

## Design and content

- Photo-led hero explains free youth tennis, equipment, mentorship, and university chapters before the first action.
- UC Irvine is active; UC San Diego is launching soon. No UCSD clinic schedule is claimed.
- Added program experience, upcoming-dates empty state, chapter panels, authentic program collage, support section, concise team introductions, and closing actions.
- Original substantive biographies remain in keyboard-accessible disclosures; removed class-year wording and standardized university names. Arjun's surname remains unknown.
- Kept the existing 200+ children and 100% free claims, found in MissionSection, About, and Donate. These are repository-supported claims, not an independent audit of participation records.
- Removed the scholarship promise, donation dollar-equivalency claims, and donation-page testimonials attributed only to Maria and David without supporting provenance.
- Kept general equipment/program support language; did not add legal registration, tax deductibility, donation calculations, partners, or new statistics.
- Reused images already displayed by the original site, with optimized copies. Original assets remain intact. The repository contains no consent documentation; the team should confirm continued publication approval.
- Shared navigation now has an accessible mobile disclosure, visible focus, skip link, and Escape handling. Existing form dialogs now contain keyboard focus and restore focus when closed. Subscription input has a visible label and live status.
- Contact storage failure now returns 503 instead of claiming a successful email was sent. The email function is only a logging stub. Subscription success no longer promises an unimplemented confirmation email.
- Search/social metadata, Organization schema, brand manifest, dynamic footer year, and route scroll restoration added. The organization URL is based on this repository's theprojectbreakpoint.org name. No canonical existed previously, so no canonical was introduced.

## Changed files

- `src/pages/Home.jsx`
- `src/components/MissionSection.jsx`, `FounderCard.jsx`, `AccessibleDialog.jsx`, `RouteBehavior.jsx`
- `src/components/layout/Navbar.jsx`, `Footer.jsx`
- `src/components/shared/SubscribeSection.jsx`
- `src/styles/Landing.css`
- `src/data/founders.js`
- `src/App.js`
- `src/pages/About.jsx`, `Chapters.jsx`, `Contact.jsx`, `Donate.jsx`, `Events.jsx` (targeted integration, accessibility, and content corrections; Chapters already existed as an untracked user file)
- `api/contact.js`
- `public/index.html`, `public/manifest.json`, `public/images/*` (10 optimized copies, approximately 944 KB total)
- `src/App.test.js`, `src/setupTests.js`, `package.json` (repair stale CRA test and Jest resolution of React Router 7; no dependency changes)
- This handoff document.

## Verification

- `CI=true npm run build`: passed, including CRA's ESLint checks. Production JS approximately 94.5 KB gzip and CSS 9.2 KB gzip.
- `CI=true npm test -- --watchAll=false --runInBand`: three tests passed: headings/chapter status/section targets, menu Escape/focus, and subscription request/error handling with mocked API.
- `git diff --check`: passed.
- New core components, stylesheet, test, and HTML formatted with Prettier.
- Chrome visual review and document-overflow checks at 375×812, 430×932, 768×1024, 1366×900, and 1920×1080: no homepage horizontal overflow. Reviewed hero, desktop page composition, and loaded team portraits.
- Browser verified mobile menu open/close, Escape restoring focus, biography expansion using Enter, chapter navigation, UCSD preselection, dialog Shift+Tab wrapping, and Escape restoring the launch button.
- Fixed a black-image conversion caught in the first browser review. Portrait files subsequently optimized; their final optimized versions were build-verified, but the browser disconnected before a final portrait recheck.
- Browser connection subsequently timed out twice. Donation-route browser review and final viewport reset could not be completed. The temporary viewport override may remain in the browser extension.
- No real contact, subscription, or donation was submitted. Live MongoDB availability, email delivery, and external payment completion are unverified. Email notifications remain a stub; database storage is required.
- Existing toolchain warnings remain: stale Browserslist data, CRA Babel undeclared dependency warning, and Jest's delayed-exit warning (test process ultimately exited successfully). No separate typechecker or formatter scripts existed.

## Team content checklist

Please provide or confirm:

- Upcoming clinic dates, registration information, eligibility, locations, and equipment instructions.
- Chapter-specific contacts and current leadership roles; Arjun's full name.
- Participation records supporting 200+ children and any proposed additional metrics. The older About page's 5+ schools claim was not expanded and still needs organizational confirmation.
- Continued consent for current program photos and more approved clinic photographs.
- Verified parent/participant testimonials and permission to publish them. Removed Maria/David quotations remain recoverable in Git history.
- Documented donation-use figures. Older donation-page references to transportation and professional coaching still require confirmation before reuse elsewhere.
- Legal nonprofit registration/tax information and authorized partner/sponsor logos.
- Official organization social accounts; none were found, so the footer does not invent them.

## Hosting

No deployment or commit was performed. This existing application uses Vercel serverless API files and the MongoDB driver. A static Sites deployment would omit those APIs; adapting them to Cloudflare would exceed the requested redesign and risk breaking existing forms. Keep the existing Vercel deployment flow and validate its MongoDB configuration before launch. Social crawlers that do not execute JavaScript will receive the homepage HTML metadata on secondary SPA routes; route-specific server-rendered previews would require a separate rendering change.
