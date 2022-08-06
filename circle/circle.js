let resizeInterval = setInterval(changeCircleSize, 250);

let curSize = 0;
let growthAmnt = 10;
function changeCircleSize() {
  const circles = document.getElementsByClassName("circle");
  curSize = curSize + growthAmnt;
  for (let crl of circles) {
    crl.style.width = `${curSize}px`;
    crl.style.height = `${curSize}px`;
  }
}

function stopResizing() {
  clearInterval(resizeInterval);
  const circles = document.getElementsByClassName("circle");
  for (let circle of circles) {
    circle.style.display = "none";
  }
  curSize = 0;
}

function onStartBtnClicked() {
  const noOfcircles = document.getElementById("noOfcircles").value;
  let circleWidth = document.getElementById("circleWidth").value;
  const growthAmount = document.getElementById("growthAmt").value;
  const growthRate = document.getElementById("growthRate").value;
  growthAmnt = parseInt(growthAmount);
  
  const msgDisplay = document.getElementById("msgDisplay");
  if (!circleWidth || !growthRate || !growthAmount || !noOfcircles) {
    const spanMsg = document.createElement("span");
    spanMsg.textContent = "Please fill in all the fields.";
    msgDisplay.style.display = "block";
    msgDisplay.style.color = "red";
    msgDisplay.append(spanMsg);
    return;
  }
  msgDisplay.style.display = "none";
  circleWidth = parseInt(circleWidth);
  
  const circles = [];
  for (let i = 0; i < parseInt(noOfcircles); i++) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.display = "block";
    circle.style.width = `${circleWidth}px`;
    circle.style.height = `${circleWidth}px`;
    circle.onclick = stopResizing;
    circles.push(circle);
  }
  const circleContainer = document.getElementById("circleContainer");

  for (let crl of circles) {
    circleContainer.append(crl);
  }
  resizeInterval = setInterval(changeCircleSize, parseInt(growthRate));
}
