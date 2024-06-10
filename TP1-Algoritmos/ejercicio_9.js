function solicitarNota(numero) {
    let nota;
    do {
        nota = parseInt(prompt(`Ingrese la nota ${numero}:`));
    } while (isNaN(nota) || nota < 0 || nota >= 11);
    return nota;
}

function calcularEstado(promedio) {
    if (promedio < 5) {
        return "Reprobado";
    } else if (promedio >= 6 && promedio <= 8) {
        return "Aprobado";
    } else {
        return "Sobresaliente";
    }
}

let notas = [];
for (let i = 1; i <= 5; i++) {
    notas.push(solicitarNota(i));
}

let sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
let promedio = sumaNotas / notas.length;

let estado = calcularEstado(promedio);

document.write(`El promedio de las notas es: ${promedio.toFixed(2)} - ${estado}`);