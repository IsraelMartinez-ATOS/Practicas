//██╗   ██╗ █████╗ ██████╗ ██╗ █████╗ ██████╗ ██╗     ███████╗███████╗
//██║   ██║██╔══██╗██╔══██╗██║██╔══██╗██╔══██╗██║     ██╔════╝██╔════╝
//██║   ██║███████║██████╔╝██║███████║██████╔╝██║     █████╗  ███████╗
//╚██╗ ██╔╝██╔══██║██╔══██╗██║██╔══██║██╔══██╗██║     ██╔══╝  ╚════██║
// ╚████╔╝ ██║  ██║██║  ██║██║██║  ██║██████╔╝███████╗███████╗███████║
//  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚══════╝╚══════╝
/*
Existen tipos de variables:
    undefined:
        Tipo de variable que aun no ha sido definida(aun no se ha determinado su uso).
    null:
        null por su significado del ingles es "nada", por lo que es un tipo de dato que no hace nada.
    boolean:
        variable de tipo "verdadero(true)" o "falso(false)".
    string:
        Cadena de cualquier tipo de texto.
    symbol:
        Un solo simbolo de valor primitivo inmutable que es único.
    number:
        Un valor de forma numerica(cantidad).
    object:
        Objeto que puede almacenar muchos tipos de valores diferentes.

En total son 7 tipos de datos que JS brinda.
*/
var miNombre = "Israel"
// "var significa "Variable", y como podemos ver es un tipo de variable "string" por el texto como valor de esta.

miNombre = 8
// En este caso la variable pasa a ser "number" por el tipo de dato numerico(8) que esta en esta. Tampoco se necesito usar "var" por que la variable ya esta declarada.

let otroNombre = "Johan"
// Este es otro tipo de declarar una variable, pero en tipo de bloque.

const pi = 3.14
// En este caso la variabl es constante, osease no podra cambiarse su valor.

var suma = 1;
suma++; // esto hace que cada que el programa lea esta linea de codigo, la variable "suma" se sumara 1. En lugar de usar "suma = suma + 1;"
suma --; // tambien funciona de forma contraria con "--"
