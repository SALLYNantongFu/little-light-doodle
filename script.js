// These three variables store the appliance's state.
let isOn = false;
let brightness = 60;
let temperature = 'warm';

const powerButton = document.querySelector('#power');
const brightnessInput = document.querySelector('#brightness');
const temperatureSelect = document.querySelector('#tone');
const lamp = document.querySelector('#lamp');

// One render function keeps the picture, controls, and state display in sync.
function render() {
  let actualOutput;
  let message;

  // Control flow determines what the lamp does in each state.
  if (!isOn) {
    actualOutput = 0;
    message = 'Lamp off. Adjust brightness to turn it on, or press Turn on.';
  } else if (brightness <= 30) {
    actualOutput = brightness;
    message = 'Soft light for a quiet moment.';
  } else if (brightness <= 70) {
    actualOutput = brightness;
    message = 'Comfortable light for everyday use.';
  } else {
    actualOutput = brightness;
    message = 'Bright light for focused work.';
  }

  let color;
  if (temperature === 'warm') {
    color = '255,211,132';
  } else if (temperature === 'neutral') {
    color = '255,244,218';
  } else {
    color = '195,224,255';
  }

  lamp.style.setProperty('--light', color);
  lamp.style.setProperty('--strength', actualOutput / 100);
  lamp.setAttribute('aria-label', isOn ? `Desk lamp on, ${brightness}% brightness, ${temperature} light` : 'Desk lamp, switched off');
  powerButton.textContent = isOn ? 'Turn off' : 'Turn on';
  powerButton.setAttribute('aria-pressed', String(isOn));
  brightnessInput.value = brightness;
  temperatureSelect.value = temperature;
  document.querySelector('#brightness-value').textContent = `${brightness}%`;
  document.querySelector('#status').textContent = message;
  document.querySelector('#scene-status').textContent = isOn ? 'POWER ON' : 'POWER OFF';
  document.querySelector('#indicator').classList.toggle('on', isOn);
  document.querySelector('#state-power').textContent = String(isOn);
  document.querySelector('#state-brightness').textContent = brightness;
  document.querySelector('#state-tone').textContent = `"${temperature}"`;
  document.querySelector('#state-output').textContent = `${actualOutput}%`;
}

// An event listener runs its function when a user interacts with a control.
powerButton.addEventListener('click', function () {
  isOn = !isOn;
  render();
});

brightnessInput.addEventListener('input', function () {
  brightness = Number(brightnessInput.value);
  // Adjusting brightness also switches the lamp on.
  isOn = true;
  render();
});

temperatureSelect.addEventListener('change', function () {
  temperature = temperatureSelect.value;
  render();
});

document.querySelector('#reset').addEventListener('click', function () {
  isOn = false;
  brightness = 60;
  temperature = 'warm';
  render();
});

render();
