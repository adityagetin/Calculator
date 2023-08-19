document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".button");
    let currentExpression = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            if (buttonText === "=") {
                try {
                    display.value = eval(currentExpression);
                } catch (error) {
                    display.value = "Error";
                }
                currentExpression = "";
            } else if (buttonText === "C") {
                currentExpression = "";
                display.value = "";
            } else {
                currentExpression += buttonText;
                display.value = currentExpression;
            }
        });
    });
});
