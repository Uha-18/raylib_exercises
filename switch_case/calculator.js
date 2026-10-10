const a = 10;
const b = 5;
const operation = "/";
switch (operation) {
    case "+":
        result = a + b;
        console.log(result);
        break;
    case "-":
        result = a - b;
        console.log(result);
        break;
    case "*":
        result = a * b;
        console.log(result);
        break;
    case "/":
        result = a / b;
        console.log(result);
        break;
    default:
        console.log("Unknown operation");
        break;
}
