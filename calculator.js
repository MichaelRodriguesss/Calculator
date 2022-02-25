"use strict";

let display = document.querySelector(".calculator--display");

let buttons = Array.from(document.getElementsByClassName("calculator--button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "c":
        display.innerText = document.querySelector(
          ".calculator--display"
        ).textContent = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
    console.log(buttons);
  });
});

let displayVal = "0";

let updateDisplayval = (clickObj) => {
  let btnText = clickObj.target.innerText;

  if (displayVal === "0") {
    displayVal = "";
    displayVal += btnText;
    display.innerText = displayVal;
  }
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", updateDisplayval, false);
}
