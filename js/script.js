// Function below takes the value of the button pressed and adds it to the display screen
function toScreen(buttonvalue) {
    //Get the display screen element by its ID
    screen=document.getElementById("display");
    //Add the value of the button pressed to the display screen
    screen.value += buttonvalue;
}

function calculate() {
        if(screen.value == "" || screen.value == undefined ){
            screen.value = "0";
        }
        else {
            screen.value = eval(screen.value);
        }
}

function remember(){
    memory=document.getElementById("memory");


    if (memory.value){
        toScreen(memory.value);
    }
    else if(screen.value !=''){
        memory.value = screen.value;
        screen.value = "";
    }
}

function clearScreen() {
    screen.value = "";
}

function clearMemory() {
    memory.value = "";
}

function switchSign() {
    screen.value = screen.value * -1;
}

function toPercent() {
    if(screen.value){
        screen.value = screen.value / 100;
    }
}
