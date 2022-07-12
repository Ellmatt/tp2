// ingresar un dni debe ser entre 0 y 9999999

//calcular el resto de la division entera entre el numero y el numero 23

// el resultado 0 a 22, corresponde a una de las siguientes letras (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)

// si el dni cargado no es un numero mostrar con un alert

// repetir todo el proceso hasta que el usuario presione cancelar


do {
  let numero = parseInt(
    prompt("Ingrese un numero de dni, entre (0 y 99999999)")
  );
  console.log(numero);

  if (numero >= 0 && numero <= 99999999) {
    let resultado = numero % 23;
    console.log(resultado);
    switch (resultado) {
      case 0:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        console.log('T')
        break;
      case 1:
        document.write(
          "<br>la letra que corresponde a su dni es la , dni ingresado" + numero
        );
        break;
      case 2:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 3:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 4:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 5:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 6:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 7:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 8:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 9:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 10:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 11:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 12:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 13:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 14:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 15:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 16:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 17:
        document.write(
          "<br>la letra que corresponde a su dni es la V, dni ingresado" + numero
        );
        break;
      case 18:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 19:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 20:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 21:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      case 22:
        document.write(
          "<br>la letra que corresponde a su dni es la T, dni ingresado" + numero
        );
        break;
      default:
        alert("ingresaste una opcion erronea");
    }
  } else {
    alert("ingresaste un valor erroneo");
  }
} while (confirm("desea ingresar un dni?"));
