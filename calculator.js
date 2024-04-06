function appendToDisplay(num) {
    var display = document.getElementById('inputbox');
    display.value += num;
}

function clearInput() {
    var display = document.getElementById('inputbox');
    display.value = '';
}

function deleteOne() {
    var display = document.getElementById('inputbox');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    var display = document.getElementById('inputbox');
    var result = eval(display.value);
    display.value = result;
}
