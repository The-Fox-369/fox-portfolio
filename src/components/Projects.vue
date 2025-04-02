<template>
  <section id="projects" class="py-20 flex flex-col items-center">
    <div class="container mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-10">
        <h2 class="text-4xl font-bold">Projects</h2>
        <p class="mt-4 text-gray-400 max-w-2xl mx-auto">
          Here are some of my favorite projects that showcase my skills in web
          development.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Project Card -->
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-[#d6d1d1] p-8 dark:bg-[#1b1b1b] rounded-lg shadow-lg"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 object-cover rounded-lg"
          />
          <h3 class="text-xl font-semibold mt-4">{{ project.title }}</h3>
          <p class="text-gray-400 text-md">{{ project.description }}</p>
          <div class="mt-4 flex space-x-4">
            <a
              :href="project.live"
              target="_blank"
              class="px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition"
            >
              Live Demo
            </a>
            <a
              :href="project.repo"
              target="_blank"
              class="px-4 py-2 border border-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import projects from "../../public/projects.json";
</script>

<style scoped></style>
