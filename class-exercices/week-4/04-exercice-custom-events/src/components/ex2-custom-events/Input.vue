<!-- HTML HERE -->
<template>
    <form>
        <input type="text" v-model="inputChain" />
        <Submit @submitEmit = "inputText" button-text = "Submit" />
    </form>
    <h1> {{ inputChain }}</h1>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
import Submit from "./Submit.vue";

/* --- declaración variable reactiva DATA BIDIRECCIONAL --- */

const inputChain = ref("");
const emit = defineEmits(["submitEmitFather"]);

const inputText = () => {
    alert ("Hola");
}
</script>
<!-- CSS HERE -->
<style scoped></style>

