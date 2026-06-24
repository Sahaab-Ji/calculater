let displayNumber = document.querySelector(".display")

let count = ""

function addNumber(number) {
    count += number
    displayNumber.textContent = count
}

function One() {
    addNumber("1")
}

function Two() {
    addNumber("2")
}

function Three() {
    addNumber("3")
}

function Four() {
    addNumber("4")
}

function Five() {
    addNumber("5")
}

function Six() {
    addNumber("6")
}

function Seven() {
    addNumber("7")
}

function Eight() {
    addNumber("8")
}

function Nine() {
    addNumber("9")
}

function Zero() {
    addNumber("0")
}

function Back() {
       count = count.slice(0, -1)
    displayNumber.textContent = count
}

function Add() {
    count += " + "
    displayNumber.textContent = count
}

function Addition() {
    // Ensure we don't try to convert the whole expression to a number
    // and avoid ending up with multiple operators which can cause NaN.
    count = count.trim()
    if (count === "") return
    // If the expression already ends with an operator, remove it before adding +
    if (/[+\-x÷]$/.test(count)) {
        count = count.replace(/[+\-x÷]+$/g, "").trim()
    }
    count += " + "
    displayNumber.textContent = count
}

function Subtract() {
    count += " - "
    displayNumber.textContent = count
}

function Divide() {
    count += " ÷ "
    displayNumber.textContent = count
}

function Multiply() {
    count += " x "
    displayNumber.textContent = count
}

function Equal() {
    try {
        let expression = count.replace(/x/g, "*").replace(/÷/g, "/");
        expression = expression.replace(/\s+/g, "");
        let result = eval(expression);
        count = String(result);
        displayNumber.textContent = count;
    } catch (error) {
        displayNumber.textContent = "Error";
        count = "";
    }
}

function clearDisplay() {
    // reset state and reload the page
    count = ""
    displayNumber.textContent = count
    // reload to ensure full reset (useful if button is expected to reload)
    location.reload();
}