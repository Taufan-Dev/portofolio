<template>
  <div
    v-if="show"
    class="fixed inset-0 flex items-center justify-center z-50"
    @click.self="close"
  >
    <div class="bg-gray-950 p-6 rounded-lg w-[90%] max-w-xl relative">
      <!-- Tombol X -->
      <button
        @click="close"
        class="absolute top-3 right-3 text-white text-2xl font-bold"
        aria-label="Close"
      >
        &times;
      </button>

      <img :src="project.image" alt="" class="rounded mb-4 my-6" />
      <h2 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h2>
      <p class="text-gray-400 mb-4">{{ project.description }}</p>
      <div>
        <h3 class="font-semibold text-white mb-1">Stack yang digunakan:</h3>
        <ul class="list-disc list-inside text-gray-600">
          <li v-for="(tech, index) in project.stack" :key="index">
            {{ tech }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalProject",
  props: {
    show: Boolean,
    project: Object,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
