<!-- Crea un componente que haga lo siguiente:
1- Te pregunte si te gusta la pizza inyectando la pregunta en un HTML.
2- Dé la respuesta en función a un JSON que debes crear
3- El JSON será un archivo local que conteste "Yey, te gusta la pizza" si dices que sí, "Que raro eres" si dices que no y "contéstame bien" si contestas cualquier otra cosa.
4- Junto a la contestación, debe aparecer una imagen divertida 


variable question variable respuesta / template input v model per rebre la resposta i una vegada es rep passen coses amb el watch o watch effect

-->

<!-- JS HERE -->
<script setup>
import { ref, reactive} from "vue";
import { watch } from "vue";
const question = ref("Do you like pizza?")
const answer = ref("");
const jsonResponse = ref ("");
const jsonImage = ref ("");

/* ------ Watch Clásico ------ */

</script>

<!-- HTML HERE -->
<template>
<section>
    <div>
        <h1>Te gusta la pizza?</h1>
        <br>
        <input v-model="answer" class="input" type="text">
    </div>
</section>
</template>

<!-- CSS HERE -->
<style scoped>
.input {
    height: 50px;
}
</style>

