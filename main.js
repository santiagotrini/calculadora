// variables globales para lo que esta pasando en la calculadora
let number = 0;
let operator = '';
let a = 0;
let b = 0;

// las funciones de las operaciones
// declaradas usando funciones flecha y declaraciones comunes

let sum = (a, b) => a + b;
// es lo mismo que
// function sum(a, b) { return a + b; }
let sub = (a, b) => a - b;
let div = function(a,b) { return a / b; }
let mul = function(a,b) { return a * b; }

// un event handler, declaracion de funcion tradicional estilo C
// uso la clase de cada boton para ver que hay que hacer
function handleClick(event) {
  let btn = event.target;
  if (btn.classList.contains('number')) {
    number += btn.textContent;
    updateScreen();
  }
  if (btn.classList.contains('operator')) {
    a = parseFloat(number);
    operator = btn.textContent;
    number = '0';
    updateScreen();
  }
  if (btn.classList.contains('clear')) {
    a = 0;
    b = 0;
    number = 0;
    updateScreen();
  }
  if (btn.classList.contains('equal')) {
    b = parseFloat(number);
    switch (operator) {
      case '+':
        number = sum(a,b); 
        break;
      case '-': 
        number = sub(a,b);
        break;
      case '÷': 
        number = div(a,b);
        break;    
      case '×': 
        number = mul(a,b);
        break;
    }
    updateScreen();
  }
}

// una funcion para actualizar la pantalla
function updateScreen() {
  let screen = document.querySelector('#screen');
  screen.textContent = parseFloat(number);
}




