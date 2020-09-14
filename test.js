function init() {
    let seconds = 5;
    document.querySelector("#countdown").innerText = seconds;

    document.querySelector("#start-button").addEventListener("click", function start() {
        document.querySelector("#start-button").style.display = "none";
        let countdown = document.querySelector("#countdown");

        let interval = setInterval(function () {
            seconds--;
            countdown.innerText = seconds;

            if (seconds == 0) {
                clearInterval(interval);
                document.querySelector("#start-button").removeEventListener("click", start);
                newCalc();
                document.querySelector("#start").style.display = "none";
                document.querySelector("form").style.display = "block";
                document.querySelector("footer").style.display = "block";
                document.querySelector("#result").focus();
            }

        }, 1000);
    });
}


function randInt(min= 0, max = 10) {
    return Math.round(Math.random() * (max - min) + min);
}

function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }
function times(a, b) { return a * b; }
function modulo(a, b) { return a % b; }

function randOP() {
    let op = randInt(0, 3);

    let ret;

    switch (op) {
        case 0:
            ret = { func: plus, str:" + " };
            break;
        case 1:
            ret = { func:minus, str:" - "};
            break;
        case 2:
            ret = { func:times, str:" * "};
            break;
        case 3:
            ret = { func:modulo, str:" % "};
            break;
    }

    return ret;
}

function randCalc() {
    let num1 = randInt();
    let op = randOP();
    let num2 = randInt(2, 10);

    let res = op.func(num1, num2);

    let calc = {
        nums: [num1, num2],
        op:op,
        res:res
    };

    return calc;
}

function calcToStr(calc) {
    return "" + calc.nums[0] + calc.op.str + calc.nums[1];
}


let stage = 0;
let stop;

function fstop() {
    stop = 1;
    init();

    document.querySelector("#result").value = -0.1;
    document.querySelector("#submit").click();
}

function newCalc() {
    let calc = randCalc();
    stop = 0;

    document.getElementById("calc").innerText = calcToStr(calc);
    document.getElementById("stage-num").innerText = stage.toString();
    log_disp();

    document.querySelector("#stop").addEventListener("click", fstop);

    let stimer = 5;
    document.querySelector("#timer-countdown").innerText = stimer;
    let timer = setInterval(function () {
        stimer--;
        document.querySelector("#timer-countdown").innerText = stimer;
        console.log(stimer);

        if (stimer == 0) {
            clearInterval(timer);

            stage = (stage > 0) ? --stage : 0;

            document.querySelector("#result").value = -0.1;
            document.querySelector("#submit").click();
        }
    }, 1000);

    document.getElementById("submit").addEventListener("click", function listener (event) {
        event.preventDefault();
        console.log("click");

        let response = document.getElementById("result").value;

        if (stop == 1) {
            clearInterval(timer);
            document.getElementById("result").value =  null;
            document.getElementById("submit").removeEventListener("click", listener);

            document.querySelector("#start-button").style.display = "inline";
            document.querySelector("#start").style.display = "block";
            document.querySelector("form").style.display = "none";
            document.querySelector("footer").style.display = "none";
        }
        else if (response == -0.1) {
            log_push(calc, "time");
            document.getElementById("result").value =  null;
            document.getElementById("submit").removeEventListener("click", listener);
            newCalc();
        } else if (response != "") {
            let result = calc.res;

            log_push(calc, response);

            if (response == result)
                stage++;
            else
                stage = (stage > 0) ? --stage : 0;

            clearInterval(timer);
            document.getElementById("result").value =  null;
            document.getElementById("submit").removeEventListener("click", listener);
            document.querySelector("#stop").removeEventListener("click", fstop);
            newCalc();
        }
    });
}

init();