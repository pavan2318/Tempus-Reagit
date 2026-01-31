const box = document.getElementById("box");
const result = document.getElementById("result");
const bestText = document.getElementById("best");

let startTime = null;
let timeoutId = null;

let best = localStorage.getItem("bestReaction");
if (best) {
  bestText.textContent = "Best: " + best + " ms";
}

box.addEventListener("click", () => {
  if (!box.classList.contains("ready")) {
    result.textContent = "Too early";
    clearTimeout(timeoutId);
    start();
    return;
  }

  const time = Date.now() - startTime;
  result.textContent = "Your time: " + time + " ms";

  if (!best || time < best) {
    best = time;
    localStorage.setItem("bestReaction", best);
    bestText.textContent = "Best: " + best + " ms";
  }

  box.classList.remove("ready");
  start();
});

function start() {
  result.textContent = "";
  box.classList.remove("ready");

  const delay = Math.random() * 3000 + 1000;

  timeoutId = setTimeout(() => {
    box.classList.add("ready");
    startTime = Date.now();
  }, delay);
}

start();
