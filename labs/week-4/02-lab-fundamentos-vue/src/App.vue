<script setup>
import HelloWorld from './components/HelloWorld.vue'
import NavComponent from "./components/NavComponent.vue"

import FooterComponent from "./components/FooterComponent.vue"

import Iteration2 from './components/Iteration2.vue';

import Iteration3 from './components/Iteration3.vue';

import Iteration4Vue from './components/Iteration4.vue';

import Iteration5Vue from './components/Iteration5.vue';

import FormContainer from './components/FormContainer.vue';

</script>

<template>
  <nav>
    <NavComponent/>
  </nav>
  <h1>holaaaa</h1>
  <Iteration2/>
  <Iteration3/>
  <Iteration4Vue/>
  <Iteration5Vue/>
  <FormContainer>Hello hello</FormContainer>
  <footer>
    <FooterComponent/>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
