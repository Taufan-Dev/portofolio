<template>
  <div
    class="text-slate-100 px-6 md:px-16 lg:px-20 p-4 min-h-screen flex relative overflow-hidden"
  >
    <!-- BACKGROUND VECTOR -->
    <img
      src="/assets/images/Vector 1.svg"
      alt=""
      class="absolute top-0 bottom-4 left-0 w-full h-full object-cover z-0"
    />

    <!-- KONTEN UTAMA -->
    <div
      class="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between p-6 relative z-10"
    >
      <!-- KIRI : Teks -->
      <div class="text-center md:text-left mb-8 md:mb-0">
        <h1 class="text-7xl font-bold mb-4">
          Hallo👋, <br />saya Taufan sebagai
        </h1>
        <h2 class="text-amber-400 text-3xl font-semibold">
          {{ displayedText }}<span class="blinking-cursor">|</span>
        </h2>
      </div>

      <!-- KANAN : Gambar -->
      <div class="w-80 h-80 overflow-hidden  border-amber-400">
        <img
          src="/assets/images/profile.png"
          alt="Taufan Profile"
          class="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const texts = ["UI/UX Designer", "Web Developer", "Front-End Engineer"];
const displayedText = ref("");
let currentTextIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[currentTextIndex];

  if (isDeleting) {
    displayedText.value = currentText.substring(0, charIndex--);
  } else {
    displayedText.value = currentText.substring(0, charIndex++);
  }

  // Kecepatan ketik / hapus
  let typingSpeed = isDeleting ? 50 : 100;

  // Kalau selesai ketik
  if (!isDeleting && charIndex === currentText.length) {
    typingSpeed = 1500; // jeda sebelum hapus
    isDeleting = true;
  }
  // Kalau selesai hapus
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    typingSpeed = 500; // jeda sebelum mulai ketik lagi
  }

  setTimeout(type, typingSpeed);
}

onMounted(() => {
  type();
});
</script>

<style>
.blinking-cursor {
  font-weight: 100;
  font-size: 1.5rem;
  color: #fbbf24;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  50.01%,
  100% {
    opacity: 0;
  }
}
</style>
