function append(value){
    display.value += value
}
function calculate(){
    display.value = eval(display.value)
    
}
function clearDisplay() {
      currentInput = '';
      display.value = '';
}
