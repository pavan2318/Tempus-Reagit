# Tempus-Reagit

Tempus-Reagit is a lightweight, browser based implementation of a **Simple Reaction Time (SRT) task**, inspired by classical **Psychomotor Vigilance Task (PVT)** paradigms used in human performance and fatigue research.

The tool measures the latency between the presentation of a visual stimulus and a manual response, providing basic metrics commonly used in alertness and vigilance assessment.

---

## Task model

The participant is instructed to remain idle until a visual stimulus appears. Responses are classified as either:

- Valid response: reaction time recorded in milliseconds
- False start: response made before stimulus onset

Inter stimulus intervals are randomised, with occasional extended delays to reduce anticipation effects, following PVT design principles.

---

## Metrics recorded

- Individual reaction times per trial
- Average reaction time across valid trials
- Fastest recorded reaction time (local best)
- Number of false starts per session

All timing is performed client side using system timestamps.

---

## Session structure

- Fixed number of trials per session
- Variable delay before each stimulus
- Session terminates automatically after final trial

This structure mirrors simplified laboratory SRT and PVT tasks, while remaining suitable for casual or educational use.

---

## Data export

Results can be exported as a CSV file containing:
- Trial number
- Reaction time per trial
- Total false starts

This allows offline analysis or import into statistical tools.

---

## Technical implementation

- Pure HTML, CSS, and JavaScript
- No external libraries
- Runs entirely client side
- Compatible with static hosting platforms such as GitHub Pages

Local storage is used only to persist the fastest recorded reaction time across sessions.

---

## Limitations

This implementation is not a clinically validated instrument.

Measured reaction times are affected by:
- Browser scheduling
- Device performance
- Input hardware latency
- Display refresh rates

Results should be interpreted as indicative rather than diagnostic.

---

## Version history

### v1.0
- Initial single stimulus reaction task
- Basic reaction time measurement
- Local best score persistence

### v1.1
- Added fixed trial count per session
- Introduced average reaction time metric
- Implemented false start detection

### v1.2
- Added variable inter stimulus intervals
- Introduced occasional long waits to mimic PVT behaviour
- Added CSV export of session results
- Improved task status feedback

---

## Intended audience

- Students studying human factors or cognitive psychology
- Demonstrations of SRT and PVT concepts
- Lightweight self assessment of alertne
