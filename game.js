const box = document.getElementById("box");
const result = document.getElementById("result");
const statusText = document.getElementById("status");
const avgText = document.getElementById("average");
const medianText = document.getElementById("median");
const lapseText = document.getElementById("lapses");
const exportBtn = document.getElementById("exportBtn");

const trialInput = document.getElementById("trialInput");
const lapseInput = document.getElementById("lapseInput");

let startTime = null;
let timeoutId = null;
let trial = 0;

let results = [];
let falseStarts = 0;

let TOTAL_TRIALS = Number(trialInput.value);
let LAPSE_THRESHOLD = Number(lapseInput.value);

trialInput.onchange = () => TOTAL_TRIALS = Number(trialInput.value);
lapseInput.onchange = () => LAPSE_THRESHOLD = Number(lapseInput.value);

box.addEventListener("click", () => {
  if (!box.classList.contains("ready")) {
    falseStarts++;
    result.textContent = "False start";
    clearTimeout(timeoutId);
    scheduleNext();
    return;
  }

  const rt = Date.now() - startTime;
  const timestamp = new Date().toISOString();
  const isLapse = rt > LAPSE_THRESHOLD;

  results.push({
    trial: trial + 1,
    reaction_time: rt,
    timestamp,
    lapse: isLapse,
    false_start: false
  });

  result.textContent = "Reaction time: " + rt + " ms";
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

  let delay = Math.random() < 0.2
    ? Math.random() * 4000 + 6000
    : Math.random() * 2000 + 1000;

  timeoutId = setTimeout(() => {
    box.classList.add("ready");
    startTime = Date.now();
  }, delay);
}

function updateStats() {
  const rts = results.map(r => r.reaction_time);
  const mean = Math.round(rts.reduce((a, b) => a + b, 0) / rts.length);

  const sorted = [...rts].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const median = sorted.length % 2 !== 0
    ? sorted[mid]
    : Math.round((sorted[mid - 1] + sorted[mid]) / 2);

  const lapseCount = results.filter(r => r.lapse).length;

  avgText.textContent = "Mean reaction time: " + mean + " ms";
  medianText.textContent = "Median reaction time: " + median + " ms";
  lapseText.textContent = "Lapses: " + lapseCount + " / " + results.length;
}

exportBtn.addEventListener("click", () => {
  let csv = "trial,reaction_time_ms,timestamp,lapse,false_start\n";

  results.forEach(r => {
    csv += `${r.trial},${r.reaction_time},${r.timestamp},${r.lapse},${r.false_start}\n`;
  });

  csv += `\nfalse_starts,${falseStarts}\n`;
  csv += `lapse_threshold_ms,${LAPSE_THRESHOLD}\n`;

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "tempus-reagit-session.csv";
  a.click();

  URL.revokeObjectURL(url);
});

scheduleNext();
