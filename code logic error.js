

let goal = Math.floor(Math.random() * 10) + 1;

function updateText() {
    let returnValue = Number(prompt("Guess my number"));

    while (returnValue !== goal) {
        
        if (returnValue > goal) {
            returnValue = Number(prompt("Too low! Guess again"));
        }
        else if (returnValue < goal) {
            returnValue = Number(prompt("Too high! Guess again"));
        }       
        
     
    }
    document.getElementById("heading").innerHTML = "Congratulations! You guessed the number!";
    goal = Math.floor(Math.random() * 10) + 1;
}
