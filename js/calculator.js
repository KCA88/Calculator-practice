// Function below takes the value of the button pressed and adds it to the display screen
function toScreen(buttonvalue) {
    //Get the display screen element by its ID
    screen=document.getElementById("display");
    //Add the value of the button pressed to the display screen
    screen.value += buttonvalue;
}