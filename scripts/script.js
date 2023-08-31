const ventyl = document.querySelector(".ventyl");
const reverseBtn = document.querySelector(".reverse-btn");
const stopBtn = document.querySelector(".stop-btn");
const runBtn = document.querySelector(".run-btn");
const speed1 = document.querySelector(".speed1");
const speed2 = document.querySelector(".speed2");
const speed3 = document.querySelector(".speed3");

let stopVal = true;

reverseBtn.addEventListener('click', () => {
    ventyl.classList.add("reverse");
    ventyl.classList.remove("run");
});

stopBtn.addEventListener("click", () => {
    ventyl.classList.toggle("pause");

    if (stopVal === true) {
        stopBtn.innerHTML = "STARTED";
        stopBtn.style.backgroundColor = "#00FF00";
        stopVal = false;
    }
    else if (stopVal === false) {
        stopBtn.innerHTML = "STOPED";
        stopBtn.style.backgroundColor = "red";
        stopVal = true;
    };
});

runBtn.addEventListener('click', () => {
    ventyl.classList.add("run");
    ventyl.classList.remove("reverse");
});

speed1.addEventListener('click', () => {
    ventyl.classList.add("rotatinglvl1");
    ventyl.classList.remove("rotatinglvl2");
    ventyl.classList.remove("rotatinglvl3");
});

speed2.addEventListener('click', () => {
    ventyl.classList.remove("rotatinglvl1");
    ventyl.classList.add("rotatinglvl2");
    ventyl.classList.remove("rotatinglvl3");
});

speed3.addEventListener('click', () => {
    ventyl.classList.remove("rotatinglvl1");
    ventyl.classList.remove("rotatinglvl2");
    ventyl.classList.add("rotatinglvl3");
});
