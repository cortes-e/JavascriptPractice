class Persona {

    static porObjeto( {nombre, apellido, pais} ) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`)
    }
}

const nombre1 = 'Melissa',
    apellido1 = 'Flores',
    pais1 = 'Honduras';

const fher = {
    nombre: 'Fernando',
    apellido: 'Hernandez',
    pais: 'Costa Rica'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
// No va a funcionar y no se permiten más de dos constructores
// const persona2 = new Persona(fher);

const persona2 = Persona.porObjeto(fher);

console.log({persona1, persona2});

persona1.getInfo();
persona2.getInfo();