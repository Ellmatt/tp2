/* 13- Realiza un script que pida un texto y lo muestre en mayúsculas.*/

function cambiar(texto){
    if (typeof texto ==='string'){
        let contadorminusculas=0
        let contadormayusculas=0
        for(let i=0; i<texto.length;++i){
            if(/[a-z]/.test(textp[i])){
                ++contadorminusculas
            } else{
                ++contadormayusculas;
            }
        }
if(contadorminusculas>contadormayusculas){
    return texto.toLowerCase();
}else{
    texto.toUpperCase();
}
}else{ 
        throw TypeError('el argimento n oes valido')
    }
}
try {
    let cambiar= prompt('ingrese texto')
} catch (e) {
    console.log('error: ${e.message}')
    
}