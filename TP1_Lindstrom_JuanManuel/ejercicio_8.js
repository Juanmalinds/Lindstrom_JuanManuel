let texto = prompt("Introduce un texto:");

let posicionVocal = texto.search(/[aeiouAEIOU]/);

if (posicionVocal !== -1) {
    let vocalEncontrada = texto[posicionVocal];
    document.write(`La primera vocal en el texto "${texto}" es "${vocalEncontrada}", en la letra Nº${posicionVocal + 1}.`);
} else {
    document.write("No se encontraron vocales en el texto");
}