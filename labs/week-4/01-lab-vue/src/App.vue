<template>
<header>
  <nav>
    <img class="ironhack" src="./images/Ironhack_logo.png" alt="ironhack logo">
    <img class="burger" src="./images/Burger_menu.png" alt="burger">
  </nav>
</header>

<main>
  <div class="vue-logo" >
    <img src="./images/Vue_logo.png" alt="vue logo">
    <h1>Welcome to Vue.js</h1>
    <h3>Become a coding ninja with the fastest- <br> growing JavaScript framework</h3>
    <button>Awesome!</button>
  </div>
</main>

<section>
  <div>
    <img src="./images/USP-1.png" alt="">
    <h2>Performant</h2>
    <p>Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.</p>
  </div>
  <div>
    <img src="./images/USP-2.png" alt="">
    <h2>Approachable</h2>
    <p>Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.</p>
  </div>
  <div>
    <img src="./images/USP-3.png" alt="">
    <h2>Versatile</h2>
    <p>A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
  </div>
</section>

<footer>
</footer>
</template>

<script setup>
  
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inria+Sans&display=swap');


*{
  font-family: inter;
}

h1 {
  font-size: 70px;
  margin: 0;
}

header nav {
  margin-top: 20px;
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}


nav:first-of-type img {
  width: 35px;
  height: 38px;
}

nav:nth-of-type(2) img {
  width: 22px;
  height: 20px;
}

.vue-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
  text-align: center;
}

main img {
  width: 200px;
  height: 200px;
}

button {
  background: #34495E;
  color: white;
  border-radius: 13px;
  width: 121px;
  height: 31px;
  
}

section {
  background-color: #39B983;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  padding: 100px;
  gap: 100px;
}

section img {
  width: 60px;
  height: 60px; 
}

section p {
  font-family: 'Inria Sans', sans-serif;
}

footer {
  width: auto;
  height: 70px;
}

</style>

