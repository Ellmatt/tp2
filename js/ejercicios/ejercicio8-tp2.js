/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let numero = parseInt(prompt('ingrese un numero no mayor a 50'))
if(Number(numero) == numero){
    if(numero > 0 && numero <= 50){

for(let i = 1; i <= numero; i++){
    
    for(let repeticion = 0; repeticion < i; repeticion++){
        document.write(i);
    }
    document.write('<br>')
  }
}
else { 
    alert('El valor ingresado no esta dentro del valor establecido');
}
}else{
    alert('El valor ingresado no es un valor numerico')
}
