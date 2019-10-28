
/* function addition() {
    let x = Number(document.getElementById("firstNumber").value);
    let y = Number(document.getElementById("secondNumber").value);
    let result;
    result = x + y;
    document.getElementById("result").innerText = result;
}
function sub() {
    let x = Number(document.getElementById("firstNumber").value);
    let y = Number(document.getElementById("secondNumber").value);
    let result;
    result = x - y;
    document.getElementById("result").innerText = result;
}
function mul() {
    let x = Number(document.getElementById("firstNumber").value);
    let y = Number(document.getElementById("secondNumber").value);
    let result;
    result = x * y;
    document.getElementById("result").innerText = result;
}
function div() {
    let x = Number(document.getElementById("firstNumber").value);
    let y = Number(document.getElementById("secondNumber").value);
    let result;
    result = x / y;
    document.getElementById("result").innerText = result;
}
*/
function cal(element) {
    let number1 = Number(document.getElementById("firstNumber").value);
    let number2 = Number(document.getElementById("secondNumber").value);
    let result;
    let cal = element.getAttribute("value");
    switch (cal) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
    }
    document.getElementById("result").innerText = result
}