let dato, resultado;
//Let declara las variables, en este caso resultado y dato
val1 = window.prompt("Introduce tu nombre", "...");
//se crea una valor llamado val1 el cual tiene un prompt que solicita tu nombre por medio de una ventana emergente
val2 = window.prompt("Introduce tu apellido", "...");
//en este caso se repite lo mismo que la linea anterior pero pidiendo el apellido
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
//se crea una cadena de texto que une los valores de val1 y vla2 (siendo nombre + apellido)
document.write(resultado);
//Se escribe la variable resultado en el documento, el cual dejaria el nombre + apeliido conectados que pide al usuaria desde el principio