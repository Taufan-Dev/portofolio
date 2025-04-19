<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <p class="text-red-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem rerum sit quam consequatur? Nihil distinctio deserunt libero, eos consequuntur quisquam inventore cum vitae maxime necessitatibus odit assumenda et temporibus.</p>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
