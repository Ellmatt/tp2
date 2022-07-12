// pedir al usuario filas y columnas

//dibujar en una tabña

// en cada celda debe tener un numero descendente de multiplicar filas por columnas

let filas = parseInt(prompt('ingrese un numero de filas'))
//let columnas = parseInt(prompt('ingrese un numero de columnas'))

document.write( '<table> <tbody>')

//este se encarga de dibujar las filas
for(let indicefila = 0; indicefila < filas; indicefila++){
document.write(`
            <tr>
<td>pueba</td>
<td>datos</td>
            </tr>
        `);}

        document.write( '</table> </tbody>')
