const { obtenerSaludo } = require("./02-JS-II/homework/homework");

var primeraPalabra = "Hola";
var segundaPalabra = "mundo!";
var resultado = primeraPalabra + " " + segundaPalabra;

console.log(resultado)


var srt = "Macarena";
function agregarxclamacion(srt){
    return srt + "!";
}

console.log(agregarxclamacion(srt))

var str = "Salió"
function agregarSimboloExclamacion(str){
    return str + "!"; 
  }

console.log(agregarSimboloExclamacion(str))



function combinarNombres(nombre, apellido){
    var tunombre = nombre + " " + apellido;
    return tunombre;
  }

  console.log(combinarNombres("Ariel", "Almiron"))

function saludar(nombre){
return "Hola" + " " + nombre + "!";
}

console.log(saludar("Maqui"))

function perimetro(lado){
    var resultado = lado * 4;
    return resultado;
}

console.log(perimetro(10))
