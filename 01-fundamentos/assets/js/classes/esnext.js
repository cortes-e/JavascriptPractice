class Rectangulo {
    /** PROPIEDAD PRIVADA
     * No funciona en todos los navegadores
     * No existen funciones privadas
    */
    #area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }
}

const rectangulo = new Rectangulo(10, 15);
/** No se puede modificar propiedades privadas fuera de la clase
 * rectangulo.#area = 100; 
 */



console.log(rectangulo);