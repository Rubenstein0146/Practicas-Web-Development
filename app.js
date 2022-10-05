let valorUno;
let valorDos;
let operacion;
let display = document.getElementById('display');
let num0 = document.getElementById('num0');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let num5 = document.getElementById('num5');
let num6 = document.getElementById('num6');
let num7 = document.getElementById('num7');
let num8 = document.getElementById('num8');
let num9 = document.getElementById('num9');
let punto = document.getElementById('punto');
let sumar = document.getElementById('sumar');
let restar = document.getElementById('restar');
let multiplicar = document.getElementById('multiplicar');
let dividir = document.getElementById('dividir');
let solve = document.getElementById('solve');
let reset = document.getElementById('reset');
let del = document.getElementById('del');


// Digitos
num0.addEventListener('click', ()=>{
    display.textContent = display.textContent + '0';    
})
num1.addEventListener('click',()=>{
    display.textContent = display.textContent + '1';
})
num2.addEventListener('click',function(){
    display.textContent = display.textContent + '2';
})
num3.addEventListener('click', function(){
    display.textContent = display.textContent + '3';
})
num4.addEventListener('click', function(){
    display.textContent = display.textContent + '4';
})
num5.addEventListener('click', function(){
    display.textContent =  display.textContent + '5';
})
num6.addEventListener('click', function(){
    display.textContent =  display.textContent + '6';
})
num7.addEventListener('click', function(){
    display.textContent =  display.textContent + '7';
})
num8.addEventListener('click', function(){
    display.textContent = display.textContent + '8';
})
num9.addEventListener('click', function(){
    display.textContent = display.textContent + '9';
})
punto.addEventListener('click', function(){
    display.textContent = display.textContent + '.';
})

// Operaciones
sumar.addEventListener('click', () => {
    valorUno = display.textContent;
    operacion = '+';
    limpiar();
})
restar.addEventListener('click', () => {
    valorUno = display.textContent;
    operacion = '-';
    limpiar();
})
multiplicar.addEventListener('click', () => {
    valorUno = display.textContent;
    operacion = '*';
    limpiar();
})
dividir.addEventListener('click', () => {
    valorUno = display.textContent;
    operacion = '/';
    limpiar();
})
solve.addEventListener('click', () => {
    valorDos = display.textContent;
    resultado();
})
reset.addEventListener('click', () => {
    valorUno = 0;
    valorDos = 0;
    operacion = '';
    limpiar();
})
del.addEventListener('click', () => {
    valorUno = 0;
    valorDos = 0;
    operacion = '';
    limpiar();
})

function resultado (){
    let res = 0;
    switch(operacion){
        case '+':
            res = parseFloat(valorUno) + parseFloat(valorDos);
            break;
        case '-':
            res = parseFloat(valorUno) - parseFloat(valorDos);
            break;
        case '*':
            res = parseFloat(valorUno) * parseFloat(valorDos);
            break;
        case '/':
            res = parseFloat(valorUno) / parseFloat(valorDos);
            break;
    }
    display.textContent = res;
}

function limpiar (){
    display.textContent = '';
}























