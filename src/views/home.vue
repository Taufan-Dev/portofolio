<template>
  <heroSection />
  <projectSection />
  <sertifikatSection />
  <fotoSection />
  <p class="text-gray-100">jnjn</p>
</template>
<script>
import heroSection from "./../sections/hero.vue";
import projectSection from "./../sections/project.vue";
import sertifikatSection from "../sections/sertifikat.vue";
import fotoSection from "../sections/foto.vue";
export default {
  components: {
    heroSection,
    projectSection,
    sertifikatSection,
    fotoSection,
  },
  setup() {},
};
</script>
