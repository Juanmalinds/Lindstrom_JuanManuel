var valores = [true, false, 2, "hola", "mundo", 3, "char"]

//El texto mayor
let textos = valores.filter(elemento => typeof elemento === 'string');
let txtMayor = textos.reduce((mayor, actual) => mayor.length > actual.length ? mayor : actual);

document.write(`El elemnto de texto mayor es: ${txtMayor}<br>`);

//Textos de mayor a menor
let txtOrdenados = textos.slice().sort((mayor, actual) => mayor.length - actual.length);

document.write("Elementos de textos ordenados de menor a mayor por cantidad de letras:");
txtOrdenados.forEach(texto => document.write(texto + "<br>"));

//Operaciones matematicas
let numeros = valores.filter(elemento => typeof elemento === 'number');
let [num1, num2] = numeros;
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

document.write(`Suma: ${num1} + ${num2} = ${suma}<br>`);
document.write(`Resta: ${num1} - ${num2} = ${resta}<br>`);
document.write(`Multiplicación: ${num1} * ${num2} = ${multiplicacion}<br>`);
document.write(`División: ${num1} / ${num2} = ${division}<br>`);