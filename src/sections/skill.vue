<template>
  <section class="py-10 px-6 md:px-16 lg:px-20 overflow-hidden">
    <h1
      class="text-xl tracking-tighter sm:text-5xl lg:text-2xl xl:text-3xl text-white mb-14 text-center"
    >
      Skill 🧑‍💻
    </h1>
    <!-- Baris 1: ke kanan -->
    <div class="relative overflow-hidden">
      <div class="flex gap-7 animate-marquee-right whitespace-nowrap">
        <div
          v-for="(skill, index) in repeatedSkillsTop"
          :key="'top-' + index"
          class="border border-purple-500 rounded-xl shadow-md px-7 py-5 flex items-center gap-4 min-w-[300px] shrink-0"
        >
          <img :src="skill.logo" :alt="skill.name" class="w-10 h-10" />
          <div>
            <h3 class="text-lg font-bold text-white">{{ skill.name }}</h3>
            <p class="text-sm text-gray-400">{{ skill.category }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Baris 2: ke kiri -->
    <div class="relative overflow-hidden mt-10">
      <div class="flex gap-7 animate-marquee-left whitespace-nowrap">
        <div
          v-for="(skill, index) in repeatedSkillsBottom"
          :key="'bottom-' + index"
          class="border border-yellow-500 rounded-xl shadow-md px-7 py-5 flex items-center gap-4 min-w-[300px] shrink-0"
        >
          <img :src="skill.logo" :alt="skill.name" class="w-10 h-10" />
          <div>
            <h3 class="text-lg font-bold text-white">{{ skill.name }}</h3>
            <p class="text-sm text-gray-400">{{ skill.category }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillSection",
  data() {
    return {
      skillsTop: [
        {
          name: "Vue",
          category: "Front-End Development",
          logo: "/assets/images/vue.png",
        },
        {
          name: "Flutter",
          category: "Mobile Development",
          logo: "/assets/images/flutter.png",
        },
        {
          name: "Figma",
          category: "UI/UX Design",
          logo: "/assets/images/figma.png",
        },
      ],
      skillsBottom: [
        {
          name: "Python",
          category: "Data Science",
          logo: "/assets/images/python.png",
        },
        {
          name: "Blender",
          category: "3D UI Design",
          logo: "/assets/images/blender.png",
        },
        {
          name: "Excel",
          category: "Data Analysis",
          logo: "/assets/images/excel.png",
        },
      ],
    };
  },
  computed: {
    repeatedSkillsTop() {
      return [...this.skillsTop, ...this.skillsTop]; // Ulangi dua kali
    },
    repeatedSkillsBottom() {
      return [...this.skillsBottom, ...this.skillsBottom]; // Ulangi dua kali
    },
  },
};
</script>

<style scoped>
@keyframes marquee-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}

.animate-marquee-left {
  animation: marquee-left 30s linear infinite;
}

.animate-marquee-right {
  animation: marquee-right 30s linear infinite;
}

/* Menambahkan media query untuk perangkat dengan layar kecil */
@media (max-width: 768px) {
  .animate-marquee-left {
    animation: marquee-left 15s linear infinite; /* Lebih cepat */
  }

  .animate-marquee-right {
    animation: marquee-right 15s linear infinite; /* Lebih cepat */
  }
}
</style>
