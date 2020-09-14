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
    let items = log_line.children;

    items[0].innerText = "Étage " + log_var[2];
    items[1].innerText = calcToStr(log_var[0]);
    items[2].innerText = log_var[1];

    let correct = log_var[0].res == log_var[1];

    if (correct)
        items[2].style.backgroundColor  = "#9df589";
    else
        items[2].style.backgroundColor = "#ec5f55";
}

function log_disp() {
    let log_table = document.querySelector("tbody");

    if (log_table == null) {
        document.querySelector("#log").appendChild(document.createElement("tbody"));
        return;
    }

    if (log_table.children.length < 10) {
        let child = document.createElement("tr");
        child.appendChild(document.createElement("td"));
        child.appendChild(document.createElement("td"));
        child.appendChild(document.createElement("td"));

        log_table.appendChild(child);
    }

    let lines = log_table.children;

    for (let i = 0; i < log.length; i++) {
        log_line_disp(lines[i], log[i]);
    }
}
