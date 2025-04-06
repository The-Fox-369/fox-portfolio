<template>
  <section
    id="projects"
    class="py-20 flex flex-col items-center dark:bg-[#1b1b1b] dark:text-white"
  >
    <div class="container mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-10">
        <h2 class="text-4xl font-bold">Projects</h2>
        <p class="mt-4 leading-3 text-gray-400 max-w-2xl mx-auto">
          Here are some of my favorite projects that showcase my skills in web
          development.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-[#e4e4e4] rounded-lg p-6 shadow-2xl dark:bg-[#1b1b1b] dark:text-white"
        >
          <h3 class="text-xl font-semibold text-white mt-4">
            {{ project.title }}
          </h3>
          <p class="text-gray-400 mt-2">{{ project.description }}</p>
          <div class="mt-4 flex gap-4">
            <button
              :href="project.live"
              target="_blank"
              class="bg-[#1b1b1b] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#1b1b1b] duration-300 transition shadow-lg"
            >
              Live Demo
            </button>
            <button
              :href="project.repo"
              target="_blank"
              class="bg-[#1b1b1b] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#1b1b1b] duration-300 transition shadow-lg"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import projects from "../projects.json";
</script>

<style scoped></style>
