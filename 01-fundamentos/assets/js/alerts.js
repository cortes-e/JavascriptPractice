/** VARIABLE miNombre ESTA DEFINIDA EN app.js
 * SI SE EJECUTA ESTE SCRIPT ANTES
 * ARROJARA ERROR
 * POR LO QUE NO ES BUENA PRACTICA
 */

// console.log(miNombre)

/*****/

/* alert, prompt y confirm son funciones del objeto Window */
/* Por tanto, no se pueden ejecutar en consola */
/* Node ofrece un objeto global que es similar a window */

/* BLOQUEANTE */
// alert('¡ALERTA!')

/* SOLICITANTE */
/* RETORNA INPUT */
/* CANCELAR RETORNA null */
// let nombre = prompt('Cómo te llamas?', 'Valor por defecto');
// console.log(nombre);
// console.log('****' + nombre + '****');

/* SOLICITANTE */
/* RETORNA boolean (true / false) */
// const seleccion = confirm('¿Quiere continuar?');
// console.log(seleccion);