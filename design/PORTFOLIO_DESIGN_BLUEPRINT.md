# R. S. Shashank Urs — Portfolio Design Blueprint

**A cinematic, editorial portfolio concept for a filmmaker and content development professional.**
Prepared as a creative-director-level design document — no code, no HTML. This is the brief you hand to a designer, or feed into Framer/Webflow/Notion/Adobe Portfolio to build the real thing.

Reference coordinates: **Apple × A24 × Netflix Press × Criterion Collection × Notion × Porsche × Behance Featured.**
Explicitly not: startup SaaS, gradients, glassmorphism, neon, résumé templates, corporate HR decks.

---

## 1. Creative Concept

**One sentence:** *A production leader's dossier, designed like a Criterion Collection insert booklet — sparse, confident, typographically driven, and quietly obsessed with craft.*

The core tension in Shashank's story — **story instinct vs. operational rigor** — becomes the entire design language. Every section pairs a *creative* artifact (a still, a script excerpt, a directing choice) with an *operational* fact (a budget, a schedule, a number). The layout never lets you forget he is both.

**Governing metaphor:** the portfolio reads like a **film dossier / production binder** — the kind an executive producer hands a studio before greenlight. Section dividers behave like slate cards ("SCENE 02 — PRODUCTION EXPERIENCE"). This is used sparingly and elegantly, never as gimmick.

---

## 2. Visual Identity

### 2.1 Mood
Dark, matte, unhurried. Think of a screening room going from black to a single frame of light. Confidence expressed through restraint — large negative space, one idea per screen, no decoration that isn't load-bearing.

### 2.2 Color Palette

| Role | Color | Hex (reference) | Usage |
|---|---|---|---|
| Primary background | Matte Black | `#0B0B0C` | Base canvas, hero, footer |
| Secondary background | Dark Charcoal | `#17161A` | Section alternation, cards |
| Primary text | Warm Ivory | `#F3EEE6` | Headlines, body on dark |
| Secondary text | Muted Ivory / Stone | `#B9B2A6` | Captions, metadata, dates |
| Accent | Antique Gold | `#B08D57` | Rules, active states, awards, one word per headline |
| Accent (hover/deep) | Bronze | `#8C6F42` | Hover states, pressed links |
| Hairline / dividers | Hairline Grey | `#2A2A2E` @ 40% | Section rules, table lines |
| Success/available signal | Ivory outline only | — | No green/red status colors — keep monochrome + gold |

**Rules:**
- No gradients. Ever. A wash of black-to-charcoal (2–3% shift) is permitted for depth on hero only.
- Gold is a **spice, not a wallpaper** — used for: the tagline, section numerals, award marks, active nav state, a single rule under the name. Never as a background fill or button color.
- Optional light mode (for print/PDF resume export only): Warm Ivory `#FAF7F0` background, Matte Black text, same gold accent — used for the downloadable one-pager, not the live site.

### 2.3 Typography System

| Role | Typeface | Notes |
|---|---|---|
| Display / Hero headlines | **Canela** (or Instrument Serif as free alternative) | Editorial serif, used at large sizes (72–140px desktop), tight tracking, sentence case not title case |
| Section titles | **Instrument Serif**, italic for emphasis words | Used for section openers — "Production Experience," "Original Works" |
| Body / UI text | **Neue Haas Grotesk** (or Manrope as accessible substitute) | Clean grotesk for readability, 16–18px body |
| Data / metadata / labels | **IBM Plex Sans**, all-caps, letter-spaced | Used for dates, tags, roles, budget figures, location chips — gives the "production document" feel |
| Kannada tagline | System-appropriate Kannada serif pairing with Canela's weight (e.g., Noto Serif Kannada) | Must sit visually as an equal, not a footnote |

**Type scale (desktop):**
- Hero H1: 120–140px, Canela, leading 0.95
- Section H2: 56–64px, Instrument Serif
- Card title: 24–28px, Neue Haas Grotesk Medium
- Body: 17–18px, Neue Haas Grotesk Regular, leading 1.6
- Labels/eyebrow: 12–13px, IBM Plex Sans, uppercase, 0.12em tracking, gold or stone color

### 2.4 Grid & Spacing
- 12-column grid, 1440px max content width, generous 80–120px outer margins on desktop (this is the single biggest lever for "premium" — most portfolios fail by cramming).
- Vertical rhythm: 160–240px between major sections. Let it breathe like a film's pacing.
- Mobile: single column, 24px margins, sections compress to 96–120px vertical rhythm, hero headline drops to 44–56px.

### 2.5 Iconography
- No icon packs, no line-icon clichés (no clapperboards, no film reels, no generic "camera" glyphs — too on-the-nose).
- Where a mark is needed (award, location, language), use a **thin single-weight custom glyph** or simply typographic solutions: a small gold asterisk, a bracket, a roman numeral, an underline rule. Let typography do the work icons usually do.
- Timeline uses a single vertical hairline with gold nodes — not icons.

### 2.6 Image Style
- Black-and-white or heavily desaturated stills only, with one or two intentional full-color "hero" frames (e.g., a still from *The Long Take*) reserved for maximum impact moments.
- Film-still aspect ratios throughout: 2.39:1 (anamorphic widescreen) for project heroes, 4:5 for portrait/behind-the-scenes.
- Grain/texture overlay at very low opacity (3–5%) to suggest film stock, never a heavy Instagram-filter look.
- No stock photography. If real production stills aren't available yet, use typographic "title card" placeholders styled like film slates/title cards rather than generic photo placeholders — this keeps the design premium even before assets exist.
- Portrait of Shashank: single formal but unposed frame, shot in low-key lighting, matte black background, no smiling-headshot energy — think director portrait, not LinkedIn photo.

### 2.7 Motion Recommendations
Motion should feel like **editing**, not "animation." Borrow from film grammar:
- **Cuts, not bounces.** Page/section transitions use hard or cross-dissolve cuts (200–400ms opacity/position ease), never spring/bounce easing.
- **Match cuts** between sections: an element (a gold rule, a number, a word) persists across a scroll transition as an anchor, à la a match cut in editing.
- Text reveals: subtle upward reveal (12–16px translate + fade), staggered by word/line, 400–600ms, ease-out — restrained, never a "typewriter" or bouncy stagger.
- Hover states: no scale-pop. Use underline draw-ins, gold rule expansion, or a slow (600ms) desaturate-to-color image transition on project cards.
- Scroll-linked: a persistent thin progress rule at the very top or side (like a film timeline scrubber) — quiet, functional, cinematic.
- Cursor: optional custom cursor on desktop that behaves like a viewfinder bracket when hovering project cards. Use sparingly, kill on mobile.
- **Avoid:** parallax overload, particle effects, gradient blobs, confetti/award-pop animations, anything glassmorphic.

---

## 3. Portfolio Structure (Information Architecture)

A single-scroll cinematic homepage (like a Netflix Press one-pager or A24 talent page) with anchor-linked chapters, rather than many separate pages. Optional deep-dive sub-pages for each major project.

```
00  Hero
01  Professional Introduction ("The Two Instincts")
02  Career Timeline
03  Featured Film Projects
04  Production Experience
05  Original IPs & Development Slate
06  Skills & Expertise
07  Awards & Recognition
08  Research & Publications
09  Recognition / Endorsement
10  Contact & Call to Action
```

Each section is labeled like a chapter/slate: `SCENE 01`, `SCENE 02`, etc. in the eyebrow label — reinforcing the "production dossier" concept without being cute about it.

---

## 4. Homepage Wireframe (Section-by-Section)

### 00 — Hero
```
┌─────────────────────────────────────────────────────────────┐
│  [eyebrow, gold, caps]  CONTENT DEVELOPMENT · PRODUCTION      │
│                                                                │
│        R. S. SHASHANK URS                                    │
│        (Canela, 130px, ivory)                                │
│                                                                │
│        "I know the story. I also know the maths."            │
│        ಕಥೆ ಗೊತ್ತು, ಲೆಕ್ಕವೂ ಗೊತ್ತು.                              │
│        (italic serif, stone color, Kannada rendered           │
│         at equal visual weight, not smaller)                  │
│                                                                │
│        [thin gold rule]                                       │
│                                                                │
│        Filmmaker. Producer. Strategist.                       │
│        Bengaluru · Hyderabad · Mumbai                          │
│                                                                │
│        ↓ scroll cue (single thin animated line, not arrow)    │
└─────────────────────────────────────────────────────────────┘
   Background: full-bleed desaturated still or matte black,
   optional slow (30s) Ken-Burns drift on a single production
   photo at 15% opacity behind the type.
```

### 01 — Professional Introduction
Two-column editorial layout (60/40 split). Left: a tight 3-paragraph narrative in serif body copy telling the PVR → Cult.fit → Annapurna arc as a single throughline. Right: a pull-quote in large italic type — *"Every story must work creatively and financially — I've spent a career proving both can be true."* Small marginal timeline ticks (PVR / Cult.fit / Annapurna) as typographic markers, not logos.

### 02 — Career Timeline
Horizontal or vertical single-hairline timeline (gold nodes), four to five stops:
`PVR Cinemas → Cult.fit → Annapurna College of Film & Media → Executive Producer / Director credits → Present`
Each node expands on hover/tap to a short caption + duration, in the IBM Plex Sans label style. Treat this like a film's opening-credits sequence — sparse, sequential, unhurried.

### 03 — Featured Film Projects
Full-width, one project per viewport ("scene" per scroll) — not a grid of small cards. Each project gets:
- Full-bleed still (2.39:1) with 40% black gradient bottom-up for text legibility (the one permitted "gradient," purely functional for contrast, not decorative)
- Title in Canela, large
- Role tag (Director / Executive Producer / Assistant Cinematographer) in gold, IBM Plex Sans caps
- One-line logline in italic serif
- A small "production facts" strip below: budget, locations, shoot days, award — styled like a spec sheet (Porsche-brochure influence)
- CTA: "View Production Notes →" (expands or links to case-study page)

Order: *The Long Take* (strongest craft story) → *Thethri Khurmi* (strongest production-scale story) → *Two Hats* (versatility) → *First Light* (origin).

### 04 — Production Experience
Reverts to a denser, two-column "document" layout — this is where the operations credibility lives (PVR, Cult.fit). Styled like a spec/ops report: role, duration, responsibilities as a clean bulleted list in Plex Sans, one standout metric pulled large per role (e.g., *"Highest sales performance — 8–10 consecutive months"* set in large serif as a pull-stat, echoing how the film section pulls loglines).

### 05 — Original IPs & Development Slate
This is the "studio pitch deck" section — highest-stakes for a content-development role. Card layout, 2-up grid, dark charcoal cards with hairline borders (no shadows, no rounded-corner-heavy skeuomorphism — sharp or minimally rounded 4px corners only):
- **Nalku** — Original Series — status tag "Pitch Ready" (gold outline pill, text only, no color fill)
- **Kaadu** — Original Series — status tag "Pitch Ready"
- Script Coverage samples (Feature Film Analysis, Commercial Evaluation) as a secondary row, styled like document thumbnails (title-card aesthetic) with "Request Sample" CTA — respecting that these are often NDA'd.
- **Kannada OTT Slate Audit** — treated as a mini case-study callout — this is a genuinely differentiating asset (market analysis, not just craft) and deserves its own featured block, not a buried bullet.

### 06 — Skills & Expertise
Resist the urge to use a skill-bar/progress-bar UI (too corporate/gamified). Instead: a large typographic wall — skills set as a flowing, wrapped list of words in varying weights (heavier weight = more central to identity), grouped under three quiet category labels: **Story** / **Production** / **Business**. This visually reinforces the "two instincts" thesis one more time.

### 07 — Awards & Recognition
Minimal trophy-shelf avoidance: no badge icons, no ribbon graphics. Each award as a single editorial line-item with a gold numeral marker (I, II, III):
```
I.   1st Runner-Up — Best Film, Thethri Khurmi
II.  1st Place — 48-Hour Filmmaking Competition
III. Recognized for Long-Take Direction — by the editor of Laapataa Ladies
IV.  1st Place — Event Management, Christ University
```
The Laapataa Ladies editor recognition is the single strongest social-proof line in the entire portfolio — give it its own larger pull-quote treatment directly beneath the list, set in large italic serif, e.g.:
*"Recognized for its long-take execution by the editor of Laapataa Ladies."*

### 08 — Research & Publications
Academic credibility section, styled like a "further reading" library shelf — minimal, text-forward, three entries:
- 11-chapter thesis on Girish Kasaravalli
- Research paper on Arvind S. Kashyap
- Kannada OTT Slate Audit (cross-referenced back to section 05)
Treat titles like book spines — serif, understated, with a thin download/PDF-icon-free "Read" text link.

### 09 — Recognition / Endorsement
If testimonials/quotes exist (from Annapurna faculty, collaborators, the Laapataa Ladies editor mention, festival programmers), give this its own breathing-room section: one large quote at a time, auto-rotating or click-through, centered, no avatar-carousel gimmicks — just attributed serif italic text on black.

### 10 — Contact & Call to Action
Return to hero-level scale. Large Canela headline: *"Let's build the next story."* Below: email, LinkedIn, a location line ("Open to Bengaluru · Hyderabad · Mumbai"), and a single clear CTA button styled as understated text-with-rule rather than a filled colorful button (e.g., `Get in touch →` underlined in gold on hover). Footer repeats the Kannada tagline once more as a closing signature.

---

## 5. Content Hierarchy Principles

1. **Craft before credentials.** Film work (Section 03) appears before corporate ops experience (Section 04) — the portfolio leads with story instinct, then proves it's backed by operational rigor. This ordering is the single most important storytelling decision in the whole document.
2. **One hero fact per section.** Every section should have exactly one number, quote, or line that a recruiter could screenshot and forward internally (₹5,000 budget, "recognized by the editor of Laapataa Ladies," "8–10 consecutive months of highest sales").
3. **Bilingual identity is a feature, not a footnote.** The Kannada tagline appears at full visual parity in the hero and again in the footer — never shrunk to a caption.
4. **Numbers are typographically large.** Budgets, durations, locations, rankings — set these in the same serif display type as headlines, not small print. This is what makes it read "producer," not just "director."

---

## 6. Copywriting System

**Voice:** economical, declarative, slightly wry — the tagline itself is the model ("I know the story. I also know the maths."). Avoid resume verbs ("responsible for," "helped with"). Prefer direct, active, specific claims.

**Section eyebrows (all caps, IBM Plex Sans, gold):**
`INTRODUCTION` / `TIMELINE` / `FILM WORK` / `PRODUCTION` / `DEVELOPMENT SLATE` / `CAPABILITIES` / `RECOGNITION` / `RESEARCH` / `CONTACT`

**Sample section headlines (Canela/Instrument Serif):**
- Hero subhead: *"Filmmaker. Producer. Strategist. Someone who reads a script and a P&L with the same instinct."*
- Section 01: *"Two educations. One instinct."*
- Section 03: *"Work that had to earn every rupee it spent."*
- Section 04: *"Before the sets, the spreadsheets."*
- Section 05: *"What's next isn't hypothetical."*
- Section 10: *"The next production starts with a conversation."*

**Sample project logline copy:**
- *The Long Take* — "A film shot for the price of a dinner, and recognized by the editor of *Laapataa Ladies* for how it dared to hold a single shot."
- *Thethri Khurmi* — "Five days. Six locations. One budget that had to hold."
- *Two Hats* — "Camera in one hand, ledger in the other."

---

## 7. Card & Component Library (Descriptions Only)

| Component | Description |
|---|---|
| **Project Hero Card** | Full-bleed still, bottom gradient scrim, title + role tag + logline overlay, "production facts" strip beneath in monospace-adjacent Plex Sans |
| **Slate Card** (Original IPs) | Charcoal fill, 1px hairline border (`#2A2A2E`), gold outline status pill, serif title, 2-line synopsis, thin bottom rule as CTA |
| **Timeline Node** | 8px gold dot on 1px hairline vertical/horizontal line; expands to caption card on hover/tap |
| **Award Line-Item** | Roman numeral (gold) + serif title + Plex Sans metadata line; no icon, no badge graphic |
| **Quote Block** | Centered italic serif, 32–40px, max-width 700px, thin gold rule above, attribution in small caps below |
| **Skill Word-Cloud Block** | Flowing inline text list, weight-varied by relevance, grouped under 3 category labels, no bars/meters/percentages |
| **Nav** | Fixed, minimal, just wordmark (initials "RSU" or full name in small caps) left, 4–5 section links right, all Plex Sans, underline-on-hover only, transparent-to-solid on scroll |
| **CTA Link** | Text + gold underline draw-in on hover, arrow glyph (→) as the only permitted "icon," never a filled button |
| **Footer** | Matte black, Kannada tagline repeated, contact line, minimal social links as text list not icon row |

---

## 8. UX Flow

```
Land on Hero (identity + tagline imprinted in 3 seconds)
   ↓ scroll
Introduction (the "why" — two instincts thesis)
   ↓ scroll
Timeline (the "how" — credibility built in sequence)
   ↓ scroll
Featured Films (the "proof" — craft, one scene at a time)
   ↓ scroll
Production Experience (the "rigor" — ops credibility)
   ↓ scroll
Original Slate (the "future" — what he'd bring to a studio's pipeline)
   ↓ scroll
Skills (the "range" — quick-scan confirmation)
   ↓ scroll
Awards + Research (the "validation" — third-party proof)
   ↓ scroll
Contact (the "action")
```
Persistent minimal top nav allows recruiters to jump directly to "Film Work" or "Production" depending on which lens they're evaluating from (creative vs. operations) — this dual-entry navigation is important given the dual-audience nature of studio hiring (creative execs vs. production/ops leads).

Secondary flow: each Featured Film card can deep-link to an optional **case-study sub-page** (single project, long-form: stills gallery, behind-the-scenes note, budget breakdown, festival history) for reviewers who want more than the one-pager — mirroring how Netflix Press or A24 talent pages link out to full press kits.

---

## 9. Suggested Imagery Shot List

- Director-style portrait (matte black background, low-key single-source light)
- 2–3 production-still frames from *The Long Take*, *Thethri Khurmi*, *Two Hats* (desaturated grade)
- Behind-the-scenes candid: Shashank with monitor/script in hand (not posed) for Section 01
- A single "artifact" photo — a marked-up script page or budget spreadsheet printout, shot as a still-life — visually reinforces "story + maths" without needing text to explain it
- Title-card graphics (styled like film slates) for any project without available stills yet, so the deck never looks unfinished

---

## 10. Platform Implementation Recommendations

| Platform | Fit | Notes |
|---|---|---|
| **Framer** | ★★★★★ Best fit | Full control over the cut-style scroll transitions, custom type (Canela/Instrument Serif via Adobe Fonts or Google Fonts), CMS collection for Projects/Awards, real code overrides available if needed later. Recommended primary build target. |
| **Webflow** | ★★★★☆ Strong alternative | Better for teams wanting fine-grained interaction timelines (native interactions panel handles the scroll-reveal and match-cut behavior well); CMS collections for projects/press. |
| **Notion (+ Super/Potion for custom domain skin)** | ★★★☆☆ Good for a fast MVP | Can approximate the editorial serif/dark-mode feel quickly, weakest on the cinematic full-bleed hero and motion; best used as an interim "send this today" version while Framer build is in progress. |
| **Adobe Portfolio** | ★★★☆☆ Decent, limited | Clean typographic templates exist that match this direction, but customization ceiling is lower — motion/scroll-cut language will be hard to achieve. |
| **Behance (Featured Project)** | Use as a **companion**, not the primary site | Publish the Featured Film Projects and Original Slate sections as a Behance case study for discoverability inside the creative-industry Behance/Adobe ecosystem, linking back to the main Framer site. |

**Build priority if resources are limited:** (1) Framer site with Sections 00–04 and 10 fully built and polished over (2) partial coverage of every section — a shorter, beautifully executed portfolio beats a long, uneven one. Sections 05–09 can launch as a v1.1 update.

---

## 11. What This Portfolio Must Never Look Like

- A Canva resume template with a photo circle and colored skill bars
- A SaaS landing page with a hero gradient blob and a "Get Started" pill button
- A film-reel/clapperboard icon set
- A crowded single-page CV with every credential the same visual weight
- Glassmorphic cards, neon rim-light, or dark-mode-with-purple-gradient (a very common but wrong "cinematic" cliché)

If in doubt at any design decision point, default to the question: *"Would this appear in a Criterion Collection booklet or an A24 press kit?"* If not, cut it.
