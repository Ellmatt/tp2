/* Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
 Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */


  
  
  

    do{
        let texto = prompt("Ingrese un texto de hasta 10 caracteres, tener en cuenta que un espacio cuenta como caracter");
  console.log(texto);
        let resultado = texto % 2;
    console.log(resultado)
    if (texto<=10 && texto >= 0) {
    
        switch (resultado) {
          case 1:
            document.write(texto );
            
            break;
          case 2:
            document.write(texto);
            break;
          case 3:
            document.write(texto);
            break;
          case 4:
            document.write(texto);
            break;
          case 5:
            document.write(texto);
            break;
          case 6:
            document.write(texto);
            break;
          case 7:
            document.write(texto);
            break;
          case 8:
            document.write(texto);
            break;
          case 9:
            document.write(texto);
            break;
          case 10:
            document.write(texto);
            break;
         
          default:
            alert("ingresaste una opcion erronea");
        }
      } 
      
    } while (confirm("desea ingresar un texto?")); 
    
