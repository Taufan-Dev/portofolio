<template>
  <div class="relative my-12">
    <!-- Modal -->
    <ModalProject
      :show="isModalOpen"
      :project="selectedProject"
      @close="isModalOpen = false"
    />
    <div class="px-6 md:px-16 lg:px-20 p-4">
      <div class="text-gray-100 flex justify-between items-center">
        <h1
          class="text-xl tracking-tighter sm:text-5xl lg:text-2xl xl:text-3xl"
        >
          //Sertifikat
        </h1>
      </div>

      <!-- Scrollable Flex Project List -->
      <div class="flex gap-7 py-10 overflow-x-auto no-scrollbar">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="w-[320px] border border-blue-500 rounded shrink-0 cursor-pointer"
          @click="openModal(project)"
        >
          <img :src="project.image" class="rounded-t" alt="" />
          <div class="py-5 px-7">
            <h2 class="font-semibold text-xl text-white">
              {{ project.title }}
            </h2>
            <p class="text-gray-500">{{ project.category }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalProject from "./../components/modalProject.vue";

export default {
  name: "ProjectSection",
  components: {
    ModalProject,
  },
  data() {
    return {
      isModalOpen: false,
      selectedProject: {},
      projects: [
        {
          image: "/assets/images/sertifikat/1.png",
          title: "Cluck N Roll",
          category: "Web Design",
          description:
            "Website restoran ayam modern dengan fitur katalog menu dan info lokasi.",
          stack: ["Vue.js", "Tailwind CSS", "Firebase"],
        },
        {
          image: "/assets/images/sertifikat/1.png",
          title: "Cluck N Roll",
          category: "Web Design",
          description:
            "Website restoran ayam modern dengan fitur katalog menu dan info lokasi.",
          stack: ["Vue.js", "Tailwind CSS", "Firebase"],
        },
        {
          image: "/assets/images/sertifikat/1.png",
          title: "Cluck N Roll",
          category: "Web Design",
          description:
            "Website restoran ayam modern dengan fitur katalog menu dan info lokasi.",
          stack: ["Vue.js", "Tailwind CSS", "Firebase"],
        },
        {
          image: "/assets/images/sertifikat/1.png",
          title: "Cluck N Roll",
          category: "Web Design",
          description:
            "Website restoran ayam modern dengan fitur katalog menu dan info lokasi.",
          stack: ["Vue.js", "Tailwind CSS", "Firebase"],
        },
        {
          image: "/assets/images/sertifikat/1.png",
          title: "Cluck N Roll",
          category: "Web Design",
          description:
            "Website restoran ayam modern dengan fitur katalog menu dan info lokasi.",
          stack: ["Vue.js", "Tailwind CSS", "Firebase"],
        },
        {
          image: "/assets/images/sertifikat/1.png",
          title: "Cluck N Roll",
          category: "Web Design",
          description:
            "Website restoran ayam modern dengan fitur katalog menu dan info lokasi.",
          stack: ["Vue.js", "Tailwind CSS", "Firebase"],
        },
        // Tambahkan 6-8 project lainnya
      ],
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
      this.isModalOpen = true;
    },
  },
};
</script>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
