# Landing Page Build Prompt for [PRODUCT]

Use this prompt with a web development agent to build a marketing landing page.

---

## Prompt

Build a modern, visually striking landing page for **[PRODUCT]** -- an AI-powered video editing application for macOS that automatically transforms raw footage into polished, professional edits. The app takes a folder of video clips and music, and uses cloud AI (Gemini 2.5 Pro) to make every editorial decision a professional editor would: clip selection, sequencing, pacing, sound design, music sync, and narrative structure. The user gets a finished timeline they can preview, tweak, and export to Final Cut Pro.

The landing page should be a single-page site with smooth scroll, dark theme (cinematic feel), and sections as described below.

---

## Brand & Tone

- **Voice**: Confident, professional, but approachable. Speak to creators who are skilled but time-poor.
- **Tagline suggestions** (pick or riff on one):
  - "Your footage. Your music. One click. Done."
  - "AI that edits like a filmmaker."
  - "From raw clips to rough cut in minutes."
- **Color palette**: Deep blacks and dark grays as base. Accent with a vibrant gradient (electric blue to violet, or warm amber to coral). White text for readability.
- **Typography**: Clean sans-serif (Inter, DM Sans, or similar). Large bold headings, lighter body text.
- **Imagery direction**: Abstract cinematic waveforms, timeline visualizations, dark UI mockup placeholders. No stock photos of people -- this is a tool for creators, let the product speak.

---

## Page Sections

### 1. Hero

Full-viewport hero with a short animated background (subtle waveform or timeline animation, CSS/SVG only).

- **Headline**: "[PRODUCT]" (large, bold)
- **Subheadline**: The chosen tagline
- **One-liner**: "Drop in your footage and music. AI handles the edit. Export to Final Cut Pro."
- **CTA button**: "Join the Waitlist" (links to `#waitlist`)
- **Platform badge**: "macOS only" with a small Apple logo

### 2. The Problem

Short, punchy section addressing the pain point.

- **Heading**: "Editing takes forever. It doesn't have to."
- **Body**: Address that the hardest part of video creation isn't shooting -- it's the hours spent in the edit bay selecting clips, syncing to music, cutting around filler words, and mixing audio levels. [PRODUCT] compresses that process from hours to minutes.
- Use 3 short bullet points or stat-style callouts:
  - "The average 5-minute video takes 2-4 hours to edit"
  - "80% of footage never makes the final cut"
  - "Sound design alone can take longer than the picture edit"

### 3. How It Works

Visual step-by-step (horizontal cards or vertical timeline graphic):

1. **Import** -- "Drop your video clips and music into [PRODUCT]. Assign A-Roll (talking heads, interviews) and B-Roll (cutaway footage) with a single keypress."
2. **Configure** -- "Choose a mood, pick a style preset, set your target duration. Or just hit go -- the defaults are smart."
3. **AI Edits** -- "Cloud AI analyzes every clip: transcribes dialogue, detects scenes, measures loudness, maps beats, identifies the story. Then it builds a complete timeline with cuts, transitions, music sync, and sound effects."
4. **Preview & Refine** -- "Watch the edit in the built-in timeline editor. Tweak anything. Then export to Final Cut Pro for finishing, or render directly."

### 4. Features (The Core of the Page)

This is the largest section. Use a mix of feature cards, split-layout sections (text + visual placeholder), and icon grids. Group features into subsections:

#### 4a. Intelligent Editing Engine

- **Single-pass AI editorial**: One AI inference makes every decision a human editor would -- clip selection, sequencing, pacing, trim points, transitions, audio placement, and narrative structure. No robotic "alternate A-Roll and B-Roll" patterns. The AI understands story tension, cross-element counterpoint, and when to hold a shot.
- **Narrative intelligence**: Detects story arcs across your footage. Identifies hooks, introductions, rising action, climax, and resolution. Maps setup/payoff relationships so the edit tells a coherent story, not just a highlight reel.
- **Professional cutting patterns**: Organic, varied sequencing. B-Roll montages of 3-5 clips. Strategic long holds for emotional weight. Tension-release cycles with mandatory cooldowns. The edit feels human because the AI was trained on professional editing principles.
- **5 style presets**: Music Video (fast cuts, beat-locked), Documentary (long holds, dialogue-driven), Family Memory (face-focused, warm), Action (frenetic, motion-heavy), Contemplative (slow, atmospheric). Or build your own configuration.

#### 4b. Documentary Mode

- **A-Roll / B-Roll workflow**: Assign interview and cutaway footage. The AI transcribes all dialogue, detects filler words and repeated takes, then builds the edit around the strongest spoken content.
- **Word-level transcription**: Cloud AI transcribes speech with per-word timestamps and confidence scores. Detects 17 filler words (um, uh, like, you know, basically...) with contextual awareness -- it knows when "like" is filler vs. legitimate.
- **Best take selection**: When you've recorded multiple takes of the same content, AI identifies duplicates and picks the best one. Or it suggests and lets you choose.
- **Semantic B-Roll matching**: AI understands what's being discussed and automatically places relevant B-Roll. Five matching priorities: activity match, semantic category, keyword, emotional resonance, thematic relevance.
- **Smart B-Roll placement**: Four modes -- concurrent (shows what's being discussed), anticipatory (shows before it's mentioned), reactive (shows after), or bridging (connects segments).
- **Silence and filler removal**: Three sensitivity levels. Removes dead air and verbal tics while preserving meaningful pauses.

#### 4c. Music & Beat Sync

- **AI music analysis**: Upload your song and the AI maps the entire structure -- BPM, beat grid, song sections (intro, verse, chorus, bridge, drop, outro), vocal sections, energy curves, and key moments.
- **Instrument-aware beat cutting**: Not all beats are equal. Kick drums trigger major transitions. Snare hits drive mid-scene cuts. Cymbal crashes mark section changes. Hi-hat patterns pace rapid montages.
- **Music-story alignment**: Verses map to ordinary-world footage. Choruses and drops sync to emotional peaks. Bridges match reflective moments. Outros wrap the conclusion.
- **Anticipatory cuts**: Cuts land slightly before the beat, matching how professional editors create the perception of sync without mechanical precision.
- **Strategic silence**: The AI knows when to pull the music out entirely -- for dialogue emphasis, dramatic punctuation, or chapter transitions. 1-3 music gaps per 5 minutes.
- **Multi-song support**: Up to 3 songs per edit, with song changes at genuine narrative chapter breaks.

#### 4d. Professional Sound Design

- **Built-in SFX library**: 11 categories of production-ready sounds -- whooshes, impacts, stingers, risers, downlifters, foley (footsteps, cloth, props, body), ambience (interior, exterior, special), and transitions. UCS naming convention compliant.
- **AI-selected sound effects**: The AI reviews your SFX library, understands what's happening in each scene, and places specific sounds at precise moments. Not random -- intentional.
- **Frame-accurate SFX placement**: On-device DSP analysis finds the exact perceptual "hit point" in every sound file. The cloud uses a pre-roll formula so impacts land on the frame, risers peak at the moment, and ambient beds fade in naturally.
- **Tension sequencing**: Sub-bass drones 4-8 seconds before a hit, risers sweeping up over 6-16 seconds, a brief silence before impact, then the stinger. Cinematic sound design, automated.
- **Broadcast-standard mixing**: Dialogue at -12dB, music at -14dB solo / -28dB under dialogue, SFX layered at category-appropriate levels. ITU-R BS.1770-4 loudness measurement on every clip with 0.5-second temporal resolution.
- **Volume automation**: 5 curve types (linear, S-curve, parabolic, step, logarithmic). Music ducks for speech automatically. Every clip's actual loudness profile informs the mix.

#### 4e. Technical Power

- **ITU-R BS.1770-4 loudness analysis**: Broadcast-standard loudness measurement with K-weighting. Integrated LUFS, true peak, loudness range, and temporal contours. Every clip's loudness profile is sent to the cloud so the AI can make source-level-aware mixing decisions.
- **LUT support**: Apply .cube LUTs for color grading during preview and export. Auto-mapping for Sony camera profiles (S-Log3, S-Gamut3.Cine). LUT is even applied during B-Roll compression for cloud analysis so the AI sees your intended look.
- **Sony camera metadata**: Automatically parses XML sidecar files for gamma, color space, camera model, lens, timecode, and capture FPS.
- **Final Cut Pro export**: Full FCPXML export with storylines, connected clips, and magnetic timeline features. The edit round-trips to FCP for professional finishing.
- **Native macOS**: Built with SwiftUI and AVFoundation. Metal GPU acceleration for preview. No FFmpeg, no Electron, no compromises. Designed for Apple Silicon.
- **Intelligent caching**: Previously analyzed clips are cached. Re-edit the same project with different settings without re-uploading or re-analyzing.

#### 4f. Adaptive Learning

- **Per-skill feedback system**: Rate each AI skill's output (transcription, scene analysis, narrative structure, etc.) on a 0-100 scale with notes. The system triggers AI-powered refinement of its own processing instructions.
- **User rating priority**: Star-rate your favorite clips before the edit. 4-5 star clips get a 3x selection score multiplier. 5-star clips receive special SFX treatment.
- **15 modular AI skills**: The processing pipeline is built from 15 independent skills (transcription, B-Roll selection, narrative assembly, mood analysis, SFX suggestions, timeline generation, and more) organized in a dependency graph. Each can be refined independently.

### 5. Who It's For

Grid of 4-6 audience cards, each with an icon, title, and 2-3 sentence description:

- **Family Videographers**: "You shoot hours of footage at birthdays, holidays, and milestones. [PRODUCT] picks the best moments, cuts around the shaky bits, syncs to your chosen song, and delivers a video your family will actually watch. No editing skills required."

- **Documentary Filmmakers**: "Spend your time on story, not assembly. [PRODUCT] transcribes all your interviews, removes filler words and bad takes, semantically matches B-Roll to what's being discussed, and builds a rough cut that respects narrative structure. Export to Final Cut Pro and refine from there."

- **Corporate Video Teams**: "Turn conference recordings, product demos, and internal comms into polished videos. AI handles the tedious work -- trimming silences, cutting between speakers and slides, adding professional transitions and background music. Broadcast-standard audio levels included."

- **Music Video Creators**: "Beat-synced editing that actually understands music structure. Cuts land on kicks, transitions hit on cymbal crashes, and the visual energy follows the song's arc from verse to drop. Upload your track and let the AI cut your footage to the beat."

- **Wedding & Event Videographers**: "You shot 6 hours of footage. The client wants a 5-minute highlight reel by next week. [PRODUCT] analyzes all your clips, identifies the key moments, and assembles an emotionally structured edit with music, sound design, and smooth pacing."

- **Content Creators & YouTubers**: "Get from shoot to publish faster. [PRODUCT] handles the rough cut -- removing dead air, selecting the best takes, adding B-Roll where you'd want it, and syncing transitions to your intro music. You handle the creative polish."

### 6. Technical Specs / At a Glance

Clean grid or table:

| | |
|---|---|
| **Platform** | macOS (Apple Silicon optimized) |
| **AI Engine** | Google Gemini 2.5 Pro (cloud) |
| **Audio Analysis** | ITU-R BS.1770-4 compliant |
| **Export Formats** | FCPXML (Final Cut Pro), direct video render |
| **Video Support** | All formats supported by AVFoundation |
| **LUT Support** | .cube files (1D and 3D) |
| **Camera Support** | Sony XML metadata, auto LUT mapping |
| **Sound Design** | 11 SFX categories, UCS naming |
| **Music Analysis** | BPM, beat grid, structure, energy curves |
| **Processing** | Cloud AI + on-device Metal GPU |

### 7. Waitlist / CTA

Centered section with:

- **Heading**: "Be first in line."
- **Subtext**: "[PRODUCT] is in active development. Join the waitlist for early access."
- **Email input field + submit button**
- **Anchor id**: `waitlist`
- **Small note**: "macOS only. No spam. Unsubscribe anytime."

### 8. Footer

Minimal footer with:

- Copyright [PRODUCT] 2026
- Links: Privacy Policy, Terms (can be placeholder `#` links)
- "Built in New Zealand" or similar origin note (optional, ask the client)

---

## Technical Requirements

- **Framework**: Use whatever modern stack you're comfortable with (Next.js, Astro, plain HTML/CSS/JS -- whatever ships fastest).
- **Responsive**: Must look good on desktop and mobile, but desktop is the priority (it's a macOS app).
- **Performance**: Fast load times. No heavy frameworks if not needed. Optimize images.
- **Animations**: Subtle scroll-triggered fade-ins. Nothing flashy. The content sells itself.
- **Accessibility**: Proper heading hierarchy, alt text on images, sufficient color contrast.
- **No real backend needed**: The waitlist form can be a placeholder or integrate with a simple service (Formspree, ConvertKit, etc.).

---

## Content Notes for the Agent

- Replace `[PRODUCT]` throughout with the final product name when decided.
- All technical claims in the features section are accurate and implemented. Do not exaggerate.
- The app is macOS-only. Do not imply cross-platform availability.
- The app uses cloud AI (Google Gemini). On-device processing is limited to loudness measurement, SFX analysis, and timeline preview. Do not claim "on-device AI" or "offline" editing.
- The FCPXML export is a real, working feature -- not a future promise.
- Sound design is built-in with a real SFX library, not a conceptual feature.
- The "learning" / feedback system is functional but should be presented as a refinement tool, not as the app becoming sentient.

---

## Summary of All Features (Reference List)

### Editing Intelligence
- Single-pass AI editorial (Gemini 2.5 Pro)
- Narrative arc detection (hook, intro, development, climax, resolution)
- Setup/payoff relationship mapping
- Emotional bookending (circular narrative structures)
- Cross-element counterpoint (music, visuals, SFX offset for natural feel)
- Tension-release cycle management
- Professional cutting patterns (no mechanical alternation)
- Organic B-Roll montages (3-5 clip groupings)
- Strategic long holds for emotional weight
- 5 style presets (Music Video, Documentary, Family Memory, Action, Contemplative)
- 6 mood options (happy, nostalgic, exciting, calm, dramatic, balanced)
- Configurable pacing (slow, balanced, energetic, frenetic)
- Configurable B-Roll density (sparse, normal, dense, very dense)
- Shot type distribution control (wide-heavy, balanced, close-up-heavy, varied)
- J-cut and L-cut support with configurable timing
- Speed manipulation (slow motion, speed ramping)
- End-of-recording detection (shaky footage, camera swing-down)

### Documentary & Dialogue
- A-Roll / B-Roll assignment (keyboard shortcuts)
- Word-level transcription with timestamps and confidence
- 17 filler words detected with contextual awareness
- Filler removal (3 sensitivity levels)
- Silence removal (aggressive, natural, preserve)
- Duplicate take detection
- Best take selection (automatic, suggest, manual)
- Semantic B-Roll matching (5 priority levels)
- B-Roll placement modes (concurrent, anticipatory, reactive, bridging)
- Narrative ordering (chronological, thematic, AI-optimized)
- Sentence boundary enforcement (never cuts mid-sentence)
- Breath detection for natural J-cut entry points

### Music & Beat Sync
- AI music analysis (BPM, key, time signature)
- Beat grid with per-beat instrument identification
- Song structure segmentation (intro, verse, chorus, bridge, drop, etc.)
- Vocal section identification
- Energy curves and spectral centroid
- Instrument-aware cutting hierarchy
- Music-story structural alignment
- Anticipatory cuts (before the beat)
- Strategic music gaps for drama
- Multi-song support (up to 3)
- Progressive compression for large music files

### Sound Design
- 11 SFX categories (whooshes, impacts, stingers, risers, downlifters, foley, ambience, transitions)
- AI-selected SFX placement from your library
- Frame-accurate sync via DSP anchor point analysis
- Per-category alignment modes
- Tension sequencing (drone, riser, silence, stinger)
- Broadcast-standard volume levels
- 5 volume automation curve types
- Vocal collision avoidance
- Density control per genre
- UCS naming convention compliance

### Audio & Mixing
- ITU-R BS.1770-4 loudness measurement
- K-weighted loudness with temporal contours (0.5s resolution)
- Integrated LUFS, true peak, loudness range
- Source-level-aware gain computation
- Automatic music ducking for dialogue
- Category-appropriate SFX levels

### Color & Camera
- .cube LUT support (1D and 3D)
- Real-time LUT preview
- LUT baking on export
- Sony XML sidecar metadata parsing
- Auto LUT mapping for camera profiles (S-Log3, S-Gamut3.Cine, etc.)
- Camera model, lens, timecode, FPS extraction

### Timeline & Export
- Built-in visual timeline editor
- Video preview with playhead and auto-scroll
- Zoom and scroll controls
- FCPXML export (Final Cut Pro compatible)
- Storyline and connected clip support
- Magnetic timeline features
- Direct video render
- Resolution presets (720p, 1080p, 4K)
- Frame rate presets
- Timeline save/load

### Platform & Performance
- Native macOS (SwiftUI + AVFoundation)
- Metal GPU acceleration
- Apple Silicon optimized
- Intelligent per-clip caching
- Cloud processing with progress tracking
- Cost and token usage tracking
- Network resilience (retry, continue offline, cancel)
- Security-scoped bookmarks (sandboxed)
- App Store compliant (no FFmpeg, no GPL dependencies)

### Adaptive & Learning
- 15 modular AI processing skills
- DAG-based skill dependency resolution
- Per-skill feedback (0-100 rating + notes)
- AI-powered skill refinement from feedback
- User clip ratings influence selection priority
- Analysis browser for full transparency into AI decisions
