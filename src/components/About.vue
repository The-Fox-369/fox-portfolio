<template>
  <section id="about" class="py-20">
    <div class="container mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-10">
        <h2 class="text-4xl font-bold">About Me</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          I'm a full-stack developer passionate about building beautiful and
          efficient web applications and designs.
        </p>
      </div>
      <div class="flex flex-col md:flex-row items-center gap-10">
        <!-- Profile Image -->
        <img
          src="../../public/assets/fox.svg"
          alt="Your Profile"
          class="w-48 h-48 rounded-full object-cover shadow-lg"
        />
        <!-- Bio -->
        <div class="text-center md:text-left max-w-lg">
          <p class="text-lg text-gray-700">
            I specialize in front-end and back-end development, creating
            seamless user experiences. With expertise in modern frameworks and
            tools, I turn ideas into reality.
          </p>
          <p class="mt-4 text-lg text-gray-700">
            Whether it's a web app, a portfolio, or a startup project, I love
            solving problems with code and design.
          </p>
          <div class="mt-6">
            <button
              href="#contact"
              class="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 duration-300 transition shadow-lg"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
