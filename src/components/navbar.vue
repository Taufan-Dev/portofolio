<template>
  <nav
    :class="[
      'fixed top-0 w-full z-50 px-6 md:px-16 lg:px-20 p-4 transition duration-300 backdrop-blur-lg',
      isScrolled ? 'shadow-md' : 'shadow-none',
    ]"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-bold text-amber-400">
        <RouterLink to="/">Taufan</RouterLink>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-6 text-white font-medium">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>

      <!-- Mobile Menu Toggle -->
      <div class="md:hidden">
        <button
          @click="toggleMenu"
          class="text-amber-400 p-2 focus:outline-none transition duration-300"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-in-out"
      enter-from-class="opacity-0 transform -translate-y-2"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition duration-300 ease-in-out"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-2"
    >
      <div
        v-if="menuOpen"
        class="md:hidden bg-white bg-opacity-10 backdrop-blur-lg text-white p-4 space-y-3 border-t border-white border-opacity-10"
      >
        <RouterLink @click="toggleMenu" to="/" class="block">Home</RouterLink>
        <RouterLink @click="toggleMenu" to="/about" class="block"
          >About</RouterLink
        >
        <RouterLink @click="toggleMenu" to="/contact" class="block"
          >Contact</RouterLink
        >
        <div
          class="flex flex-col space-y-3 pt-3 border-t border-white border-opacity-20"
        >
          <RouterLink
            to="/login"
            class="w-full border border-amber-400 text-amber-400 font-medium py-2 px-4 rounded-lg hover:bg-amber-400 hover:text-slate-900 transition duration-300 text-center"
          >
            Login
          </RouterLink>
          <RouterLink
            to="/register"
            class="w-full border border-amber-400 text-amber-400 font-medium py-2 px-4 rounded-lg hover:bg-amber-400 hover:text-slate-900 transition duration-300 text-center"
          >
            Register
          </RouterLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      isScrolled: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
nav {
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style>
