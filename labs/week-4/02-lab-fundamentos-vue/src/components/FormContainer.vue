<!-- HTML HERE -->
<template>

<div id="form-info">
    <form @submit.prevent="handleSubmit">
        <div id="applicant-name">
          <label for="name">Please, enter your name:</label>
          <input
            type="text"
            id="name"
            autocomplete="off"
            v-model="formInfo.applicantName"
          />
        </div>
        <div id="applicant-age">
          <label for="applicantAge">Please, enter your age:</label>
          <input
            type="number"
            id="applicantAge"
            v-model="formInfo.applicantAge"/>
        </div>
        <div id="applicant-dob">
          <label for="applicantDob">Please, enter your date of birth:</label>
          <input
            type="date"
            id="applicantDob"
            v-model="formInfo.applicantDob"/>
        <div id="submit-button">
          <input type="submit" value="Submit" />
        </div>

        </div>
    </form>
    <!-- ---- SLOT QUE ESTÀ CONNECTAT A LA APP VUE A L'ETIQUETA DE FORMCONTAINER ---- -->
    <button> <slot /></button>
</div>

</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

const formInfo = reactive ({
    applicantName: "",
    applicantAge: 0,
    applicantDob: "",
});

const handleSubmit = () => {
  
  console.log(`
        La info del form es ${formInfo.applicantName}
    `);
    // usar metodo nativo de js alert() para darle visibilidad al usuario
  alert(`
        Gracias, ${formInfo.applicantName} :)
        Tu edad es ${formInfo.applicantAge} y tu fecha de nacimento es ${formInfo.applicantDob}
    `);
};

// Ejercicios Two Way Binding

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos un formulario en vuestro template. El formulario debe tener un evento de submit que bloquee el default behavior del evento y llame a la función handleSubmit. Dentro del formulario debemos tener diversos inputs que nos permitan entrar la siguiente info: name, age, date of birth. Cada uno de los inputs debe estar vinculado a su propia variable reactiva.

// Una vez le demos a submit deberíamos encargarnos de imprimir en una alerta un texto con el nombre que le hayáis inputado, un texto con la edad y un texto con vuestra date de birth.

// approach 1 - guardan cada dato en su variable propia name, age y dob
// approach 2 - guardan los 3 datos dentro de 1 variable que sea un objeto :)
</script>

<!-- CSS HERE -->
<style scoped>

#form-info {
    
}

</style>
