var operandoA;
var operandoB;
var operacion;


function init(){

    //declaracion de variables y obtencion de datos de los id
    var resultado = document.getElementById("resultado");

    var reset = document.getElementById("reset");
    var igual = document.getElementById("igual");
    var division = document.getElementById("division");
    var multiplicacion = document.getElementById("multiplicacion");
    var resta = document.getElementById("resta");
    var suma = document.getElementById("suma");

    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    //eventos
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }

    reset.onclick = function(e){
        resetear();
    }

    suma.onclick = function(e){
        operandoA=resultado.textContent;
        operacion="+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoA=resultado.textContent;
        operacion="-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoA=resultado.textContent;
        operacion="*";
        limpiar();
    }
    division.onclick = function(e){
        operandoA=resultado.textContent;
        operacion="/";
        limpiar();
    }
    igual.onclick = function(e){
        resolver();
    }
}

function limpiar(){
    resultado.textContent="";
}

function resetear(){
    resultado.textContent="";
    operandoA= 0;
    operandoB= 0;
    operacion= 0;
}

function resolver(){
    operandoB=resultado.textContent;
    console.log(operandoA, operacion, operandoB)
    var res=0;
    switch(operacion){
        case "+":
            res= parseFloat(operandoA) + parseFloat(operandoB);
        break;
        case "-":
            res= parseFloat(operandoA) - parseFloat(operandoB);
        break;
        case "*":
            res= parseFloat(operandoA) * parseFloat(operandoB);
        break;
        case "/":
            res= parseFloat(operandoA) / parseFloat(operandoB);
        break;
    }
    resetear();
    resultado.textContent=parseFloat(res);
}