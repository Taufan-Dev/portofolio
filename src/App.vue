<template>
  <main>
    <navigation />
    <router-view></router-view>
  </main>
</template>
<script>
import navigation from "./components/navbar.vue";
export default {
  name: "App",
  components: {
    navigation,
  },
};
</script>
