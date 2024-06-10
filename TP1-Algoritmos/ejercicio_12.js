function Vehiculo(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

Vehiculo.prototype.obtenerInformacion = function() {
    console.log(`Vehículo: ${this.marca} ${this.modelo} (${this.año})`);
};

function Automovil(marca, modelo, año, color, precio) {
    Vehiculo.call(this, marca, modelo, año);
    this.color = color;
    this.precio = precio;
}

Automovil.prototype = Object.create(Vehiculo.prototype);
Automovil.prototype.constructor = Automovil;

Automovil.prototype.obtenerInformacion = function() {
    Vehiculo.prototype.obtenerInformacion.call(this);
    console.log(`Color: ${this.color}`);
    console.log(`Precio: $${this.precio}`);
};

let vehiculo = new Vehiculo("Toyota", "Corolla", 2021);
let automovil = new Automovil("Ford", "Mustang", 2022, "Rojo", 45000);

console.log("Información del vehículo:");
vehiculo.obtenerInformacion();

console.log("\nInformación del automóvil:");
automovil.obtenerInformacion();