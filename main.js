class Calculator {
    constructor() {
        this.screen = document.getElementById('screen');
        this.currentValue = '';
        this.operator = '';
        this.previousValue = '';
    }

    clearScreen() {
        this.screen.textContent = '';
        this.currentValue = '';
        this.operator = '';
        this.previousValue = '';
    }

    appendToScreen(value) {
        this.screen.textContent += value;
        this.currentValue += value;
    }

    setOperator(operator) {
        this.operator = operator;
        this.previousValue = this.currentValue;
        this.currentValue = '';
    }

    calculate() {
        const previous = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);

        let result;
        switch (this.operator) {
            case '+':
                result = previous + current;
                break;
            case '-':
                result = previous - current;
                break;
            case '*':
                result = previous * current;
                break;
            case '/':
                result = previous / current;
                break;
            default:
                return;
        }

        this.screen.textContent = result;
        this.currentValue = result.toString();
        this.operator = '';
        this.previousValue = '';
    }

    handleButtonClick(event) {
        const button = event.target;
        const buttonValue = button.textContent;

        if (button.id === 'clear') {
            this.clearScreen();
        } else if (button.id === 'equal') {
            this.calculate();
        } else {
            this.appendToScreen(buttonValue);
        }
    }
}

const calculator = new Calculator();
const buttonsContainer = document.querySelector('.buttons');

buttonsContainer.addEventListener('click', function (event) {
    calculator.handleButtonClick(event);
});
