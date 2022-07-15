/* 13- Realiza un script que pida un texto y lo muestre en mayúsculas.*/
let cambiar= prompt('ingrese texto')
function cambiartexto(texto){
    console.log('estoy en la funcion')
    if (typeof texto ==='string'){
        return texto.toUpperCase();
    }else{ 
        throw TypeError('el argimento no es valido')
    }
}
let textomayuscula = cambiartexto(cambiar)

document.write(textomayuscula)

