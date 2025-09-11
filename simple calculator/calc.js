const display = document.getElementById('display');
        const buttons = document.querySelectorAll('.btn');
        let currentInput = '';
        let lastInput = '';
        let resultDisplayed = false;

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.textContent;

                if (button.classList.contains('ac')) {
                    currentInput = '';
                    display.value = '0';
                    resultDisplayed = false;
                    return;
                }

                if (button.classList.contains('equal')) {
                    try {
                        currentInput = eval(currentInput.replace(/÷/g, '/').replace(/×/g, '*')).toString();
                        display.value = currentInput;
                        resultDisplayed = true;
                    } catch {
                        display.value = 'Error';
                        currentInput = '';
                    }
                    return;
                }

                if (button.classList.contains('operator')) {
                    if (resultDisplayed) {
                        resultDisplayed = false;
                    }
                    if (currentInput === '' || /[+\-*/]$/.test(currentInput)) {
                        return; // Prevent multiple operators in a row
                    }
                } else {
                    if (resultDisplayed) {
                        currentInput = '';
                        resultDisplayed = false;
                    }
                }

                currentInput += value;
                display.value = currentInput;
            });
        });     
        // The following duplicate event listeners are removed to prevent errors and duplicate input handling.