# Tempus-Reagit

Tempus-Reagit is a lightweight, browser based implementation of a **Simple Reaction Time (SRT) task**, inspired by classical **Psychomotor Vigilance Task (PVT)** paradigms used in human performance, alertness, and fatigue research.

The tool measures the latency between the presentation of a visual stimulus and a manual response, providing basic metrics commonly used in vigilance and psychomotor performance assessment.

The implementation is intentionally minimal and runs entirely client side, making it suitable for demonstration, teaching, and informal self assessment.

---

## Task model

Participants are instructed to remain idle until a visual stimulus appears. Any response made prior to stimulus onset is recorded as a false start.

Each valid response is timed in milliseconds from stimulus onset to manual input.

Inter stimulus intervals are randomised, with occasional extended delays introduced to reduce anticipation effects. This follows established design principles used in PVT style vigilance tasks.

---

## Metrics recorded

For each session, the following metrics are recorded:

- Individual reaction times per trial
- Average reaction time across valid trials
- Fastest recorded reaction time (persisted locally)
- Number of false starts
- Mean reaction time
- Median reaction time
- Lapse count based on configurable threshold


All timing measurements are performed client side using system timestamps.

---

## Session structure

- Fixed number of trials per session
- Variable inter stimulus delay before each trial
- Occasional long delays to mimic vigilance task behaviour
- Automatic termination after the final trial

This structure mirrors simplified laboratory SRT and PVT tasks while remaining short enough for casual or educational use.

---

## Mobile compatibility and interface design

The interface is designed to function reliably on mobile browsers as well as desktop environments.

Design considerations include:
- Large tap targets to reduce motor precision bias
- Prevention of accidental zoom or text selection
- Minimal visual distraction during stimulus presentation
- High contrast stimulus presentation for clarity

The visual design is intentionally restrained to avoid introducing additional cognitive load or attentional cues beyond the stimulus itself.

---

## Data export

Session results can be exported as a CSV file containing:

- Trial number
- Reaction time per trial (milliseconds)
- Total number of false starts

This allows results to be inspected offline or imported into spreadsheet or statistical analysis tools.

Each trial record includes:
- Trial number
- Reaction time
- Absolute timestamp (ISO 8601)
- Lapse flag
- False start flag

Session parameters such as lapse threshold are included in the export.


---

## Technical implementation

- Implemented using HTML, CSS, and JavaScript only
- No external libraries or frameworks
- Runs entirely client side
- Compatible with static hosting platforms such as GitHub Pages

Local storage is used only to persist the fastest recorded reaction time across sessions.

---

## Limitations

This implementation is **not a clinically validated instrument**.

Measured reaction times are influenced by:
- Browser event scheduling
- Device performance characteristics
- Input hardware latency
- Display refresh rates

Results should be interpreted as indicative and comparative rather than diagnostic.

---
## Lapse definition

A lapse is defined as any reaction time exceeding a configurable threshold (default: 500 ms).

This follows common PVT conventions where lapses are used as indicators of reduced vigilance or fatigue rather than average performance alone.

---

## Version history

### v1.0
- Initial single stimulus reaction task
- Basic reaction time measurement
- Local persistence of fastest response

### v1.1
- Added fixed trial count per session
- Introduced average reaction time metric
- Implemented false start detection

### v1.2
- Added variable inter stimulus intervals
- Introduced occasional extended delays to mimic PVT behaviour
- Added CSV export of session results
- Improved task status feedback

### v1.3
- Mobile browser compatibility improvements
- Touch friendly interface adjustments
- Visual refinement to reduce cognitive distraction
- Improved layout stability across screen sizes

### v1.4
- Added lapse threshold definition and reporting
- Added mean vs median comparison
- Added per trial timestamp logging
- Introduced user configurable session parameters
- Visual redesign for mobile and touch first use

---

## Intended audience

- Students studying human factors, cognitive psychology, or HCI
- Demonstrations of SRT and PVT style task design
- Lightweight self checks of alertness or response latency
- Teaching examples for browser based experimental tasks
