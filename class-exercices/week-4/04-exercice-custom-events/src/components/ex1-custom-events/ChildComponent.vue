<!-- HTML HERE -->
<template>
    <button @click="buttonEvent">Emit me</button>

</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

const emits = defineEmits(["buttonEmit"]);

const buttonEvent = () => {
    emits("buttonEmit");
};

</script>
<!-- CSS HERE -->
<style scoped></style>

