
/* -------- HTML --------- */
<template>
<div>
    <p class="aina">  Hola, soy Aina :) </p>
</div>

</template>

/* ------ JavaScript ------- */
<script setup>

import { ref, reactive } from "vue";

const name = ref("Aina");
const age = ref(26);


const myInfo = reactive ({
    name: "Aina",
    age: 26,
    dob: "Sept 4th, 1996",
    hobbies: [
        "Netflix",
        "Singing",
    ],
    education: {
        primary: "Escola Jungfrau",
        secondary: "La Llauna",
        university: "UAB",
    },
    favouriteGroup: "Chvrches"

});


/* Vue Basics 1
Creamos 4 variables, 3 de ellas con ref() y otra con reactive(). La variable declarada con reactive tiene que ser un objeto con las siguientes keys:
name
age
dob (date of birth)
hobbies (array)
education (objeto con tres keys: primaria, secundaria y universidad)
favoriteMusic
Las variables declaradas con ref deberían ser vuestra peli preferida, el número de veces que la habéis visto y vuestra comida preferida. */


</script>

/* -------- CSS -------- */
<style scoped></style>


