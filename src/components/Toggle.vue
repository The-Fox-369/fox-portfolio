<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);

onMounted(() => {
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

<template>
  <div class="flex items-center gap-2">
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
  </div>
</template>
