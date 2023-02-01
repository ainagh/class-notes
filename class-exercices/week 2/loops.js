/* Loops 1
Crea un for loop que cuente de 0 a 100 i en cada iteración sume el valor actual a un resultado total. Al final haz un console.log que printee el resultado. */

/* let total = 0
for (let i = 0; i <= 100; i++){
    console.log(i);
    total = total + i;
}
console.log(total);
 */


/* Loops 2 ------ NO EM SURT BÉ EL MINIMUM
Crea un array de números llamado "numbers" con valores aleatorios. Utiliza un for loop para recorrer el array y encontrar el número mayor y el número menor. Imprime ambos números en la consola. */

//APPROACH 1
/* const numbers = [4, 9, 27, 30, 49, 96];

console.table(numbers);
let maximum = 0;
let minimum = 0;
for (let i = 0; i <= numbers.length; i++) {
    console.log(i);
    //comparativa para ver el num mayor
    if (numbers[i] > maximum){
        maximum = numbers[i];
    }
    //comparativa para ver el num menor
    if (numbers[i] < minimum){
        minimum = numbers[i];
    }
}
console.log(`The biggest number in this array would be ${maximum}`)

console.log(`The smallest number in this array would be ${minimum}`)
 */

//APPROACH 2 ---- AIXÍ SÍ QUE EM FUNCIONA
const numbers = [4, 9, 27, 30, 49, 96];

let maximum = numbers [0];
let minimum = numbers [0];
for (let i = 0; i <= numbers.length; i++) {
    console.log(i);
    //comparativa para ver el num mayor
    if (numbers[i] > maximum){
        maximum = numbers[i];
    }
    //comparativa para ver el num menor
    if (numbers[i] < minimum){
        minimum = numbers[i];
    }
}
console.log(`The biggest number in this array would be ${maximum}`)

console.log(`The smallest number in this array would be ${minimum}`)


//----------AIXÒ CREC Q NO ESTÀ BÉ 
/* let minimum = numbers [0];
let maximum = numbers [0];

for (let i = 4; i < numbers.length; i ++){
    if (numbers [i] > maximum) (maximum = numbers [i]);
    if (numbers [i] > minimum) (minimum = numbers [i]);
}
console.log(i);
     */

/* Loops 3
Utiliza un bucle while para imprimir los números pares del 2 al 20. */

let i = 0;
while (i <= 20) {
    if(i%2==0){
    console.log(i);
    }
    i++
}

//UNA ALTRA MANERA:
/* let evenNum = 2;
while (evenNum <= 20) {
    console.log(evenNum);
    evenNum += 2;
}
 */

/* Loops 4
Crea una variable llamada "numeroAdivinar" con un número entero entre 1 y 10 (puedes asignarle un valor manualmente).
Crea una variable llamada "numeroIngresado" y asignale el valor 0.
Utiliza un bucle do...while para asignar a la variable "numeroIngresado" un número entero obtenido de un array de números [1,2,3,4,5,6,7,8,9,10]. El bucle debe continuar hasta que "numeroIngresado" sea igual a "numeroAdivinar".
Una vez que el bucle finaliza, imprime en la consola el número de iteraciones realizadas. */


//COM HO HE FET OJ Q NO SÉ SI ESTÀ BÉ

/* let numeroAdivinar = 4;
let numeroIngresado = 0;

do {
    console.log(numeroAdivinar);
    numeroIngresado++

} while (numeroIngresado <= numeroAdivinar) */


//----COM S'HA CORREGIT A CLASSE-----
let numeroAdivinar = 4;
let numeroIngresado = 0;
let arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let intentos = 0;

do {
    numeroIngresado = arrayDeNumeros[intentos];
    intentos++;
} while (numeroIngresado != numeroAdivinar);

console.log(`El numero a adivinar era ${numeroAdivinar}, y se adivinó en ${intentos} intentos`);