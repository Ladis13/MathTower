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

function newCalc() {
    let calc = randCalc();

    document.getElementById("calc").innerText = calcToStr(calc);
    document.getElementById("stage-num").innerText = stage.toString();
    log_disp();

    document.getElementById("submit").addEventListener("click", function listener (event) {
        event.preventDefault();
        console.log("click");


        if (document.getElementById("result").value != "") {
            let response = document.getElementById("result").value;
            let result = calc.res;

            log_push(calc, response);

            if (response == result)
                stage++;
            else
                stage = (stage > 0) ? --stage : 0;

            document.getElementById("result").value =  null;
            document.getElementById("submit").removeEventListener("click", listener);
            newCalc();
        }
    });
}

newCalc();