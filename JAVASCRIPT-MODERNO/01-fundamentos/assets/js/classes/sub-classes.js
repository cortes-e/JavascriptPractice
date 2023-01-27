// Instanciación de una clase
class Persona {
    
    /** PROPIEDADES ESTÁTICAS */

    static _conteo = 0;
    
    /** GET & SET ESTÁTICOS */

    static get conteo(){
        return Persona._conteo;
    }

    /** MÉTODOS ESTÁTICOS
     * No se pueden usar propiedades no estáticas en métodos estáticos
    */

    static mensaje() {
        return Persona._conteo + ' instancias';
    }


    /** PROPIEDADES */
    
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
    
    /** CONSTRUCTOR */

    constructor(nombre = 'N/A', codigo = 'N/A', frase = 'N/A') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    /** GET & SET */

    set setComidaFavorita(comida) {

        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return this.comida;
    }

    // get getComidaFavorita() {
    //     return `La comida favorita de ${this.nombre} es ${this.comida}`;
    // }
    
    /** MÉTODOS */

    quienSoy() {
        console.log(`Soy ${this.nombre}, y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.frase}`);
    }

}

//Herencia
class Heroe extends Persona {
    clan;

    constructor(nombre, codigo, frase, clan){
        // const a = 10;
        // let b = 5;

        /** Llama al constructor de la clase padre
         *  Este debe llamarse antes que cualquier propiedad de la clase hija
         *  Pero si se pueden instanciar variables y constantes
         */
        super(nombre, codigo, frase);

        this.clan = clan;
    }

    quienSoy(){
        super.quienSoy();
        console.log(`Soy ${this.nombre}, ${this.clan}`);
    }
}


const elenor = new Persona('Elenor', '313N0R', 'Más vale la alegría de haber sentido dolor, que el dolor de no sentir nada');
const gilermo = new Heroe('Gilermo', 'G113RM0', 'La gente solo quiere verte en el piso para darte consejos que no necesitas', 'Policía');

console.log({elenor, gilermo});