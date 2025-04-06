<template>
  <label class="inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      class="sr-only peer"
      v-model="isDark"
      @change="toggleDark"
    />
    <div
      class="relative w-11 h-6 bg-[#e4e4e4] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#1b1b1b] rounded-full peer dark:bg-[#1b1b1b] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#1b1b1b] peer-checked:bg-[#e4e4e4] dark:peer-checked:bg-[#1b1b1b] shadow-2xl"
    ></div>
  </label>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);

const toggleDark = () => {
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

onMounted(() => {
  const saved = localStorage.getItem("theme");
  isDark.value = saved === "dark";
  toggleDark();
});
</script>
