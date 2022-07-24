/// Variables declaration.
const fonts = {
  tiny: "7px",
  xxl: "32px",
  small: "10px",
  large: "16px",
  medium: "12px",
  extraLarge: "24px",
}

let i = 0;
let frames;
let curSpeed = 250;
let timeInterval = null;

function onAnimationSelected() {
  let animation = document.getElementById("animation").value;
  document.getElementById("text-area").value = ANIMATIONS[animation];
}

function fontSizeHandler() {
  let size = document.getElementById("fontsize").value;
  document.getElementById("text-area").style.fontSize = fonts[size];
}

function start() {
  let animation = document.getElementById("text-area").value;
  frames = animation.split("=====\n");
  timeInterval = setInterval(animationHandler, curSpeed);
  document.getElementById("stop").disabled = false;
  toggleAnimation(true);
}

function toggleAnimation(show) {
  if (show) {
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;
  } else {
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
  }
}

function animationHandler() {
  if (i < frames.length) {
    document.getElementById("text-area").value = frames[i++];
  } else {
    i = 0;
  }
}

function speedChangeHandler() {
  let turboCheckbox = document.getElementById("turbo-checkbox");
  if (frames !== undefined) {
    if (turboCheckbox.checked) {
      curSpeed = 50;
      clearInterval(timeInterval);
      timeInterval = setInterval(animationHandler, curSpeed);
    } else {
      curSpeed = 250;
      clearInterval(timeInterval);
      timeInterval = setInterval(animationHandler, curSpeed);
    }
  }
}

function stop() {
  onAnimationSelected();
  toggleAnimation(false);
  clearInterval(timeInterval);
}
