const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function obetenerMes() {
let numMes = window.prompt("Introduce un numero del 1 al 12 para obtener el mes correspondiente")

numMes = parseInt(numMes);

if (numMes >= 1 && numMes <= 12) {
    let nomMes = meses[numMes - 1];
    document.write(`El número seleccionado es ${numMes} el cual corresponde al mes de ${nomMes}.`);
} else {
    alert("Por favor, introduce un numero valido del 1 al 12");
    return obetenerMes();
 }
}

obetenerMes();

//Cambie un poco el codigo para que no imprima directamente en la pantalla el error de numero invalido, dejandote colocarlo nuevamente!