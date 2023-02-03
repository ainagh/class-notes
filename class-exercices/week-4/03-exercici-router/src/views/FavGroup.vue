<!-- HTML HERE -->
<template>

    <section>
        <h1>CHVRCHES</h1>
        <p>Chvrches (stylised CHVRCHΞS and pronounced "Churches") are a Scottish pop band from Glasgow, formed in September 2011. The band consists of Lauren Mayberry, Iain Cook, Martin Doherty and, unofficially since 2018, Jonny Scott. Mostly deriving from the synth-pop genre, Chvrches also incorporate indietronica, indie pop, and electronic dance into their sound.</p>

        <button @click="verImagen">Click me to see the image!</button>

        <img 
            :src="chvrchesSrc" 
            :alt="chvrchesAlt" 
            :class="boolean ? 'vista' : 'no-vista'"/>
    </section>

</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

const chvrchesSrc = ref (
    "https://musictech.com/wp-content/uploads/2021/08/CHVRCHES-HERO@2560x1625.jpg"
);

const chvrchesAlt = ref ("Chvrches group photo");

const boolean = ref (true);

const verImagen = () => (
    boolean.value = !boolean.value
)

</script>
<!-- CSS HERE -->
<style scoped>
img {
    width: 50%;
}

.no-vista {
    display: none;
}

.vista {
    width: 200px;
}
</style>

