<template>
  <nav
    class="fixed top-0 right-0 left-0 w-full shadow-2xl z-1000 backdrop-blur-3xl"
  >
    <div class="flex justify-between items-center p-4">
      <img
        src="../assets/The Fox.svg"
        alt="Fox Logo"
        class="rounded-full w-12 h-12"
      />

      <button @click="toggleMenu" class="md:hidden">
        <img src="../assets/menu.svg" alt="Menu" class="w-6 h-6" />
      </button>

      <div class="hidden md:flex gap-6">
        <a href="#hero" class="text-gray-600 hover:text-black duration-300"
          >Home</a
        >
        <a href="#about" class="text-gray-600 hover:text-black duration-300"
          >About</a
        >
        <a href="#projects" class="text-gray-600 hover:text-black duration-300"
          >Projects</a
        >
        <a href="#contact" class="text-gray-600 hover:text-black duration-300"
          >Contact</a
        >
      </div>
    </div>

    <div
      v-if="menuOpen"
      class="md:hidden flex flex-col items-center p-4 shadow-md"
    >
      <a href="#hero" class="py-2 text-gray-600 hover:text-black duration-300"
        >Home</a
      >
      <a href="#about" class="py-2 text-gray-600 hover:text-black duration-300"
        >About</a
      >
      <a
        href="#projects"
        class="py-2 text-gray-600 hover:text-black duration-300"
        >Projects</a
      >
      <a
        href="#contact"
        class="py-2 text-gray-600 hover:text-black duration-300"
        >Contact</a
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped></style>
