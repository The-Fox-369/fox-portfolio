<template>
  <label class="inline-flex cursor-pointer items-center">
    <input
      type="checkbox"
      class="peer sr-only"
      v-model="isDark"
      @change="toggleDark"
    />
    <div
      class="relative h-6 w-11 rounded-full bg-[#929191] shadow-lg peer-checked:bg-[#e4e4e4] peer-focus:ring-4 peer-focus:outline-none after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-[#1b1b1b] dark:bg-[#222121] dark:peer-checked:bg-[#080808]"
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
