const fer = {
    nombre: 'Fernando',
    edad: 30,
    imprimir: () => {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    },
}

const pedro = {
    nombre: 'Pedro',
    edad: 35,
}

// Para convertir esto en clase es necesario crearlo con la palabra reservada 'new'
function Persona(nombre, edad) {
    console.log('Clase Persona se ejecuta')

    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    };
}

// Se instancia la función Persona por la palabra reservada 'new'
const maria = new Persona('María', 18);
const melissa = new Persona('Melissa', 30);

maria.imprimir();
melissa.imprimir();