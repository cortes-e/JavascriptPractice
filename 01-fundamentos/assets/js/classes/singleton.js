class Singleton {
    static instancia; //undefined
    nombre = '';

    constructor(nombre = '') {

        if(!Singleton.instancia){
            Singleton.instancia = this;
            this.nombre = nombre;
        }
        
        return Singleton.instancia;
    }
}

const instancia1 = new Singleton('Elenor');
const instancia2 = new Singleton('Gilermo');
const instancia3 = new Singleton('Adriano');

console.log(`Nombre de la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre de la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre de la instancia3 es: ${instancia3.nombre}`);