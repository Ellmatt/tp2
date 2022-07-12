// pedir al usuario filas y columnas

//dibujar en una tabña

// en cada celda debe tener un numero descendente de multiplicar filas por columnas

let filas = parseInt(prompt("ingrese un numero de filas"));
let columnas = parseInt(prompt("ingrese un numero de columnas"));
let resultado = filas * columnas;

document.write("<table> <tbody>");

//este se encarga de dibujar las filas
for (let indicefila = 0; indicefila < filas; indicefila++) {
  document.write("<tr>");
  for (let indicecolumna = 0; indicecolumna < columnas; indicecolumna++){
    document.write(`<td>${resultado}</td>`); // document.write(`<td>` + resultado + `</td>`)
    resultado--;
  }
  document.write("</tr>");
}

document.write("</table> </tbody>")
