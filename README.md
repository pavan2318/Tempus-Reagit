# Tempus-Reagit

Tempus-Reagit is a browser based implementation of a **Simple Reaction Time (SRT) task**, a common paradigm used in human performance research and psychomotor testing.

The task measures the time between the presentation of a visual stimulus and a manual response. It is commonly used as a baseline assessment of alertness, motor response latency, and fatigue.

## Task description

Participants are instructed to remain idle until a visual stimulus appears. A response made before the stimulus is recorded as a false start. Valid responses are timed in milliseconds.

This implementation follows the core structure of classical SRT and Psychomotor Vigilance Task (PVT) style tests, using variable inter stimulus intervals to reduce anticipation effects.

## Intended use

This tool is suitable for:
- Demonstrating basic SRT and PVT concepts
- Self checking alertness or response latency
- Teaching human factors or cognitive testing basics
- Lightweight experimentation without specialised software

## Technical notes

- Implemented using HTML, CSS, and JavaScript only
- Runs entirely client side
- Reaction times are measured using system timestamps
- Fastest recorded response is stored locally in the browser

## Limitations

This is not a clinically validated instrument. Timing accuracy is subject to browser scheduling, device performance, and input latency. Results should be interpreted as indicative only.

## Hosting

The project is compatible with static hosting platforms such as GitHub Pages.
