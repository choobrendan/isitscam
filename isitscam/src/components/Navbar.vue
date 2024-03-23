<template>
  <div class="fixed top-0 w-full bg-white h-[8vh] mb-2 px-4 flex items-center justify-between align-middle">
    <div class="flex items-center">
      <a href="/" class="mr-4">
        <logo :fontSize="24" />
      </a>
      <!-- Add more links here -->
      <a href="/home" class="mr-4">Scam Detection</a>
      <a href="/report" class="mr-4">Discover</a>
    </div>
    <div class="flex items-center">
      <a href="/login" class="mr-4">Login</a>
      <a href="/register">Register</a>
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue';

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>