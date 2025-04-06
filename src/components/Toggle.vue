<template>
  <label class="inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      class="sr-only peer"
      v-model="isDark"
      @change="toggleDark"
    />
    <div
      class="w-11 h-6 bg-gray-300 peer-focus:outline-none dark:bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300"
    >
      <div
        class="dot w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 translate-x-1 peer-checked:translate-x-6"
      ></div>
    </div>
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
