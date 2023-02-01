<!-- HTML HERE -->
<template>
    <div class="container">
        <p>Toggle el color del background de este elemento usando el ternario</p>
        <button v-on:click="">Click me!</button>
    </div>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

const colorVariableBool = ref(true);
const myName = ref ("Aina")

const changeColorOne = () => {
    console.log(colorVariableBool);
        console.log(myName.value);
        colorVariableBool.value = !colorVariableBool.value;
    
};
/* changeColorOne() */

</script>
<!-- CSS HERE -->
<style scoped>
.container{

    min-height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.color-red {
    background-color: red;
}∫

.color-orange {
    background-color: orange;
}
</style>
