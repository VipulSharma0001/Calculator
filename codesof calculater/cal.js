let string = "";
let buttons = document.querySelectorAll('.buttons');
let inputField = document.querySelector('input');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                let result = evaluateExpression(string);
                inputField.value = result;
                string = result.toString();
            } catch (error) {
                inputField.value = 'Error';
            }
        } else if (e.target.innerHTML == 'AC') {
            string = '';
            inputField.value = string;
        } else if (e.target.innerHTML == '+/-') {
            if (string !== '') {
                string = (parseFloat(string) * -1).toString();
                inputField.value = string;
            }
        } else if (e.target.innerHTML == '(' || e.target.innerHTML == ')') {
            string += e.target.innerHTML;
            inputField.value = string;
        } else if (e.target.innerHTML == 'C') {
            string = string.slice(0, -1);
            inputField.value = string;
        } else {
            string += e.target.innerHTML;
            inputField.value = string;
        }
    });
});

function evaluateExpression(expression) {
    expression = expression.replace(/\)\(/g, ')*(');
    let result = eval(expression);
    return result;
}
