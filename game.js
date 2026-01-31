const box = document.getElementById("box");
const result = document.getElementById("result");
const averageText = document.getElementById("average");
const bestText = document.getElementById("best");
const statusText = document.getElementById("status");
const exportBtn = document.getElementById("exportBtn");

const TOTAL_TRIALS = 10;

let trial = 0;
let startTime = null;
let timeoutId = null;

let results = [];
let falseStarts = 0;

let best = localStorage.getItem("bestReaction");
if (best) {
  bestText.textContent = "Fastest recorded: " + best + " ms";
}

box.addEventListener("click", () => {
  if (!box.classList.contains("ready")) {
    falseStarts++;
    result.textContent = "False start";
    clearTimeout(timeoutId);
    scheduleNext();
    return;
  }

  const reactionTime = Date.now() - startTime;
  results.push(reactionTime);

  result.textContent = "Reaction time: " + reactionTime + " ms";

  if (!best || reactionTime < best) {
    best = reactionTime;
    localStorage.setItem("bestReaction", best);
    bestText.textContent = "Fastest recorded: " + best + " ms";
  }

  box.classList.remove("ready");
  trial++;

  updateStats();

  if (trial < TOTAL_TRIALS) {
    scheduleNext();
  } else {
    statusText.textContent = "Task complete";
  }
});

function scheduleNext() {
  box.classList.remove("ready");
  result.textContent = "";

  statusText.textContent = "Trial " + (trial + 1) + " of " + TOTAL_TRIALS;

  let delay;

  // PVT style occasional long waits
  if (Math.random() < 0.2) {
    delay = Math.random() * 4000 + 6000; // 6–10 seconds
  } else {
    delay = Math.random() * 2000 + 1000; // 1–3 seconds
  }

  timeoutId = setTimeout(() => {
    box.classList.add("ready");
    startTime = Date.now();
  }, delay);
}

function updateStats() {
  if (results.length === 0) return;

  const sum = results.reduce((a, b) => a + b, 0);
  const avg = Math.round(sum / results.length);

  averageText.textContent = "Average reaction time: " + avg + " ms";
}

exportBtn.addEventListener("click", () => {
  if (results.length === 0) return;

  let csv = "trial,reaction_time_ms\n";

  results.forEach((time, index) => {
    csv += (index + 1) + "," + time + "\n";
  });

  csv += "\nfalse_starts," + falseStarts + "\n";

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "tempus-reagit-results.csv";
  a.click();

  URL.revokeObjectURL(url);
});

scheduleNext();
