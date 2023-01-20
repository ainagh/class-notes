console.log("DOM Manipulation Intro Class:");
// DOM MANIPULATION - Se trabaja con el master (02)

// En el desarrollo de sitios web, DOM son las siglas de Document Object Model. Se trata de una interfaz de programación que nos permite crear, modificar o eliminar elementos de un documento web. La manipulación del DOM es cuando se utiliza JavaScript para añadir, eliminar y modificar elementos de un sitio web. Es muy común en el desarrollo web

// ¿Qué es el DOM?
// El DOM significa Document Object Model (Modelo de Objetos del Documento). Puede entenderse simplemente como un árbol de nodos creado por el navegador. Cada uno de estos nodos tiene sus propias propiedades y métodos que pueden ser manipulados usando JavaScript.

// La capacidad de manipular el DOM es una de las habilidades más únicas y útiles de JavaScript.

// La imagen siguiente ofrece una representación visual del aspecto del árbol DOM.

// Window Object
//
console.log(window);

// El Documento
// La interfaz Document representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web, que es el árbol DOM (Document Object Model).
// El árbol DOM incluye elementos como <body> y <table>, entre muchos otros. Proporciona funcionalidad globalmente al documento, como obtener la URL de la página y crear nuevos elementos en el documento.
console.log(document);
console.log(document.title);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);

// Cómo seleccionar elementos en el DOM
// Para poder manipular un elemento en el DOM, tienes que seleccionar ese elemento en particular. Por suerte para nosotros tenemos 4 formas principales de seleccionar elementos.

//Una vez que hayas seleccionado un elemento, puede añadir estilos al elemento, manipular sus atributos y recorrer los elementos padre e hijo.

// 1. getElementById Method
// // La forma más común de acceder a un elemento HTML es utilizar el id del elemento.
//El id distingue entre mayúsculas y minúsculas. Por ejemplo, el "dom-manipulation" y el "Dom-manipulation" son ids totalmente diferentes.
console.log(document.getElementById("wutang"));

// 2. getElementsByClassName() Method
// Este método devuelve una colección de todos los elementos del documento con el nombre de clase especificado.
// Por ejemplo, nuestra página HTML de abajo contiene 5 elementos con class="wuTang".
console.log(document.getElementsByClassName("wuTang"));
console.log(document.getElementsByClassName("wuTang")[3]);

// 3. getElementsByTagName() Method
// Este método acepta un nombre de etiqueta y devuelve todos los elementos del nombre de etiqueta especificado en el orden en que aparecen en el documento.
console.log(document.getElementsByTagName("h5"));
console.log(document.getElementsByTagName("h5")[4]);

// 4. querySelector() Method
// Devuelve el primer valor que coincida con el selector que se le da. Este método puede aceptar todos los selectores de estilo CSS, lo que le permite seleccionar por etiqueta, clase o ID.
console.log(document.querySelector("#query-selector"));
console.log(document.querySelector(".hipHop"));
console.log(document.querySelector(".myLove"));
console.log(document.querySelector("h5"));
console.log(document.querySelector("#query-selector .hipHop .myLove"));
console.log(document.querySelector("#query-selector .myLove"));

// 5.querySelectorAll() Method
// Funciona de forma similar a la anterior, que devuelve una colección de listas de nodos con todos los elementos coincidentes.
console.log(document.querySelectorAll(".wuTang"));

// --------------------------------------------

// Cómo recorrer el documento
// A estas alturas estarás de acuerdo conmigo en que todo en un documento HTML es un nodo.
// También el texto dentro de los elementos HTML son nodos de texto.

// Con el DOM de HTML, puedes navegar por el árbol de nodos y acceder a los nodos en el árbol usando las relaciones de nodos de las que hablamos antes (padre, hijo(s), hermano(s), etc.).

// Se pueden crear nuevos nodos, y todos los nodos pueden ser modificados o eliminados.

// Un pequeño repaso
// Cada nodo tiene exactamente un padre, excepto el nodo superior (que no tiene padre).
// Un nodo puede tener más de un hijo.
// Los hermanos son nodos con el mismo padre.
// En esta sección, vamos a ver cómo obtener el elemento padre, los hermanos de un elemento y los hijos de un elemento. Utilizaré las siguientes propiedades de nodo para lograr estas cosas:

// - parentNode
// - childrenNodes
// - firstElementChild
// - lastElementChild
// - nextElementSibling
// - previousElementSibling

// Last Element Child
console.log(document.querySelector("#traverse-document").lastElementChild);

// First Element Child
console.log(document.querySelector("#traverse-document").firstElementChild);

// Children
console.log(document.querySelector("#traverse-document").children);
console.log(document.querySelector("#traverse-document").children[4]);

// parentNode
console.log(document.querySelector("#second-child").parentNode);

// parentElement
console.log(document.querySelector("#second-child").parentElement);

// nextElementSibling
console.log(document.querySelector("#traverse-document").nextElementSibling);

// previousElementSibling
console.log(
  document.querySelector("#traverse-document").previousElementSibling
);



//* EJERCICIOS

// 1º - Crea un <p></p> dentro de un tag de tipo <div id="insert-p"></div>

/* console.log(document.getElementById ("insert-p")); */
//console.log(document.querySelector("#insert-p"));
let newElement = document.createElement("p");
let newVar = document.querySelector("#insert-p").appendChild(newElement);

//console.log(newElement)


// 2º - Crea un <div id="nested"></div> desde código

let newEl = document.createElement("div");
let newDiv = document.querySelector("div").appendChild(newEl);

newEl.setAttribute("id", "nested");

//el .setAttribute tmb es pot fer així:
//newEl.id = "nested";

//3º - Crea contenido de texto del elemento <p></p> creado para introducir el siguiente texto: "Programming is my great"

newEl.innerText = "Programming is my great";
console.log(newEl);

//4º - Crea una función que cambie el contenido del texto de un <p></p> en función a una variable string.

function cambiaContenido(contenido) {
  newEl.innerText = contenido;
}

cambiaContenido("Hola");
console.log(newEl);


// Block 002

// 1º - Crea un elemento de color verde y un botón para cambiar el color de verde a rojo.

//part 1. creem l'element
const createCSSElement = document.createElement("div");
createCSSElement.innerHTML = 
  "This is the button <button id='turn-to-red'> Turn to red </button>";
let cssElement = document.querySelector(".itOne").appendChild(createCSSElement);

//part 2. afegim la class
createCSSElement.classList += "green-box"

//part 3. seleccionem la style sheet que volem modificar
const sheet = document.styleSheets[0];
console.log(sheet);

//part 4. seleccionem la propietat cssRules dins de la variable sheet que conté style sheet
const rules = sheet.cssRules;
console.log(rules);

//part 5. revisem cada regla per accedir a ella. haurà d'estar escrita encara que estigui buida o no es trobarà
for (let i = 0; 1 < rules.length; i++) {
  //si troba la regla concreta, es modifica seguint l'esquema habitual
  if (rules [i].selectorText === ".green-box") {
    rules [i].style.width = "300px";
    rules [i].style.height = "300px";
    rules [i].style.background = "green";
    break;
  }
}

//el button que convierte el fondo en rojo
const button = document.querySelector("#turn-to-red");
  //funció anonima o callback
  //button.addEventListener("click", () => {}) === button.addEventListener("click", function() {})
  button.addEventListener("click", () => {
    for (let i = 0; i < rules.length; i++) {
      if(rules[i].selectorText === ".green-box") {
        rules[i].style.background = "red";
        break;
      }
    }
  });


// 2º - Crea un elemento <div></div> y asignale una clase "green-box" que haga que sea una caja de 100px de alto y ancho de color verde.

// 3º - Crea una <div class="remove-class"></div> y elimínale la clase mediante js. La clase remove-class debe hacer que el elemento mida 100vw de ancho y 100px de alto y tener un background azul.

// 4º 1 - Crea un botón que, al ser pulsado, introduzca en el dom un <p>Texto insertado</p>

// 5º - Crea un botón que, al ser pulsado, introduzca una tabla de tres columnas y tres filas.