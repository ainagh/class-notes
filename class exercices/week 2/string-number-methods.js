/* String methods 1
Dada la string que tenéis a continuación, haced los console.log() correspondientes para conseguir los siguientes outputs: */



// 23
// 'JavaScript is fun!'
// ['java', 'cript i', ' fun!']
// 'JAVASCRIPT IS FUN!'
// 'f'
// 5
// 15
// 'CSS is fun!'

let stringToLog = '    JavaScript is fun! ';
console.log(stringToLog.length);

console.log(stringToLog.trim());

/* console.log(stringToLog.replace("s", " ").replace("S", " ").toLowerCase().split("  "));

console.log(stringToLog.slice(4, 8).slice(9, 15)); */

console.log(stringToLog.toUpperCase());

console.log(stringToLog.charAt(18));

console.log(stringToLog.indexOf("a"));

console.log(stringToLog.lastIndexOf("i"));

console.log(stringToLog.trim().replace("JavaScript", "CSS"));


/* String Methods 2
Dada la string stringToChange, modificadla de tal manera que los console.log() devuelvan los outputs comentados.*/

const original = 'Hello world!';
let stringToChange = 'Hello world!';

stringToChange = stringToChange.slice(0, 5);
console.log('ITERACION 1', stringToChange.endsWith('o')); // true

"!World hello"  //--> no està bé pq la lastIndexof no quadra


console.log(stringToChange.endsWith('o')); // true
console.log(stringToChange.charAt(3)); // 'r'
console.log(stringToChange.includes('hello')); // true
console.log(stringToChange.lastIndexOf('o')); // 4
console.log(stringToChange.indexOf('w')); // -1



/* Number methods 1
En un banco quieren hacer una web que muestre cuánto dinero ha ganado al día un usuario. Dicho usuario ha ganado en un mes que tiene 30 días un total de 3100€. ¿Cómo mostrarías esa cifra correctamente para el usuario? */

/* Number methods 2
En una página de diseño quieren crear una paleta de colores, para ello quieren coger un elemento representado de forma hexadecimal y sumarle 336655. Si se pasa del valor 255 (en decimal) de la paleta de colores empezará desde 00. Haz un ejemplo con el color #0000FF sabiendo que cada canal R-G-B corresponde, en orden, a las cifras de dos en dos. R = 00, G=00, B=ff. */