//import "./styles.css"
import multiPlay from "./utils.js"

function calc(exp) {
    return +(exp.toFixed(2));
}
window.onload = () => {
    let displayEl = document.querySelector(".display");
    let buttonEls = Array.from(document.querySelectorAll(".button"));

    buttonEls.forEach((buttonEl) => {
        buttonEl.addEventListener("click", (e) => {
            const btnText = e.target.innerText;
            const dispText = displayEl.innerText;
            switch (btnText) {
                case "AC":
                    displayEl.innerText = "0";
                    break;
                case "=":
                    displayEl.innerText = calc(eval(dispText));
                    break;
                case "0":
                    if (dispText === "0") {} else {
                        displayEl.innerText = dispText + '0';
                    }
                    break;
                default:
                    if (+dispText === 0) {
                        displayEl.innerText = btnText;
                    } else {
                        displayEl.innerText += btnText;
                    }

            }
        });
    })
}
console.log(multiPlay());