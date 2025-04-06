<template>
  <nav
    class="fixed top-0 right-0 left-0 w-full shadow-2xl z-1000 backdrop-blur-3xl"
  >
    <div class="flex justify-between items-center p-4">
      <img
        src="../../public/assets/fox.svg"
        alt="Fox Logo"
        class="rounded-full w-12 h-12"
      />

      <span class="text-sm">{{ isDark ? "Dark" : "Light" }}</span>
      <button
        @click="toggleDark"
        class="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full transition duration-300"
      >
        <span
          class="absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-transform duration-300"
          :class="{ 'translate-x-6': isDark }"
        ></span>
      </button>

      <button @click="toggleMenu" class="md:hidden">
        <img src="../../public/assets/menu.svg" alt="Menu" class="w-6 h-6" />
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
import { ref, onMounted } from "vue";

const isDark = ref(false);

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

onMounted(() => {
  // Load user's preference or system setting
  isDark.value =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  applyTheme();
});

function toggleDark() {
  isDark.value = !isDark.value;
  applyTheme();
}

function applyTheme() {
  const html = document.documentElement;
  if (isDark.value) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
}
</script>

<style scoped></style>
