
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");


let screenValue = "";


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const buttonText = e.target.innerText; 

        if (buttonText === "C") {
            
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText === "=") {
            
            try {
                screen.value = eval(screenValue.replace("X", "*"));
                screenValue = screen.value; 
            } catch (error) {
                screen.value = "Error";
            }
        } else if (buttonText === "%") {
          
            screenValue += "/100"; 
            screen.value = screenValue;
        } else {
           
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
});
