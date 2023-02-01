<!-- Iteración 4 | Mostrar una lista de elementos que están almacenados dentro de un componente
¿Recuerdas lo difíciles que parecían los for loops con el JavaScript convencional? Vue hace mucho del trabajo pesado cuando los usamos, y puede permitirnos mostrar una lista de elementos en la pantalla de una manera mucho más fácil.

En este ejercicio, vas a practicar cómo utilizar la directiva v-for. El reto tiene los siguientes componentes:

Tienes que crear una lista de posts dentro de los datos de uno de tus componentes Vue. Estos posts necesitan incluir los siguientes datos: título, descripción y contenido; y necesitas al menos tres de ellos.
Luego, tienes que hacer que los posts "aparezcan" en tu template usando la directiva v-for. -->



<!-- HTML HERE -->
<template>
<section v-for="book in books">
    <h2> {{ book.bookTitle }}</h2>
    <p v-text="book.bookDescription"></p>
    <p> {{ book.bookGenre }}</p>

</section>

</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

/* el mateix que: books.forEach(book => {...}) */
const books = reactive ([
    {bookTitle: "The Philosopher Stone",
bookDescription: "Harry Potter saga's first book",
bookGenre: "Fantasy",},

    {bookTitle: "The Chamber of Secrets",
bookDescription: "Harry Potter saga's second book",
bookGenre: "Fantasy",},

    {bookTitle: "The Prisioner of Azkaban",
bookDescription: "Harry Potter saga's third book",
bookGenre: "Fantasy",}
]);
</script>
<!-- CSS HERE -->
<style scoped></style>
