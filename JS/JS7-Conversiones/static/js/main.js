let isValid=true
alert(typeof isValid) // "boolean"
//Alert conversiona las variables a string

isValid = string(isValid)
alert(typeof isValid) //"string"

alert("10" / "2")
//En este caso las variables son Strings, pero pasaran a numeros para resolver la división
//y dará como resultado 5

//ejeplos y reultado
alert(numert("    234   ")) //567
alert(numert("234z"))       //NaN
alert(numert(true))         //1
alert(numert(false))        //0