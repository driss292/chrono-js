let chrono = document.querySelector("#chrono");
let resetBtn = document.querySelector("#reset");
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");

let heures = 0;
let minutes = 0;
let secondes = 0;
let timeout;
let estArrete = true;

const demarrer = () => {
  if (estArrete) {
    estArrete = false;
    defilerTemps();
  }
};

const arreter = () => {
  if (!estArrete) {
    estArrete = true;
    clearTimeout(timeout);
  }
};

const defilerTemps = () => {
  if (estArrete) return;

  secondes = parseInt(secondes);
  minutes = parseInt(minutes);
  heures = parseInt(heures);

  secondes++;

  if (secondes === 60) {
    secondes = 0;
    minutes++;
  }
  if (minutes === 60) {
    heures++;
    minutes = 0;
  }

  // Affichage

  if (secondes < 10) {
    secondes = "0" + secondes;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (heures < 10) {
    heures = "0" + heures;
  }
  chrono.textContent = `${heures}:${minutes}:${secondes}`;
  timeout = setTimeout(defilerTemps, 1000);
};

const reset = () => {
  chrono.textContent = "00:00:00";
  estArrete = true;
  heures = 0;
  minutes = 0;
  secondes = 0;
  clearTimeout(timeout);
};

startBtn.addEventListener("click", demarrer);
resetBtn.addEventListener("click", reset);
stopBtn.addEventListener("click", arreter);
