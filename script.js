document.addEventListener('DOMContentLoaded', function () {
    // Set darkMode to true by default
    let darkMode = true;

    function handleButtonClick(value) {
        if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (value === 'C') {
            // Clear the current input
            display.value = '';
        } else if (value === 'AC') {
            // Clear the entire calculator memory
            display.value = '';
        } else {
            // Handle mathematical functions
            if (['sqrt', 'sin', 'cos', 'tan'].includes(value)) {
                display.value += `Math.${value}(`;
            } else {
                display.value += value;
            }
        }
    }

    // Remove the toggleDarkMode function and related code
    // Update the remaining code as needed
});
