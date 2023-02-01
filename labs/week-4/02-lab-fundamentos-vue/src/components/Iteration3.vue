<!-- Iteración 3 | Mostrar un elemento sólo si una propiedad particular es true
Una de las principales razones por las que usamos algo como Vue es para poder simplificar las operaciones comunes de JavaScript. Una de las principales ventajas de este framework es que nos permite mostrar elementos condicionalmente de una manera muy sencilla.

¡Vamos a practicar esto! Tu reto aquí es crear un dato booleano dentro de un componente Vue, y vincularlo a un elemento HTML que sólo se mostrará en tu plantilla si la condición es true.

Hemos visto las propiedades v-if y v-show en la clase de hoy; pero si estás atascado, la documentación oficial puede ser muy útil aquí. -->
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

const exampleOne = ref (true)

/*  -------- EXAMPLE TWO --------  */
const exampleTwo = ref (false)


</script>

<!-- HTML HERE -->
<template>

    <h1 v-if="exampleOne === true">aina</h1>


<!-- -------- EXAMPLE TWO -------- -->

<div id="v-show-example">
    <p v-show="exampleTwo">
Example Twoooo
    </p>


</div>

</template>

<!-- CSS HERE -->
<style scoped></style>
