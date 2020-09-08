let log = [];
const log_length = 10;

function calcToStr(calc) {
    return "" + calc.nums[0] + calc.op.str + calc.nums[1];
}

function log_push(calc, res) {
    if (log.length == log_length)
        log.shift();
    log.push([calc, res, stage]);
}

function log_line_disp(log_line, log_var) {
    let labels = log_line.children;

    labels[0].innerText = "Étage " + log_var[2];
    labels[1].innerText = calcToStr(log_var[0]);
    labels[2].innerText = log_var[1];

    let correct = log_var[0].res == log_var[1];
    labels[3].innerText = correct;

    if (correct)
        labels[3].style.backgroundColor  = "#9df589";
    else
        labels[3].style.backgroundColor = "#ff6257";
}

function log_disp() {
    let log_lines = document.getElementsByClassName("log-line");

    for (let i = 0; i < log.length; i++) {
        log_line_disp(log_lines[i], log[i]);
    }
}
