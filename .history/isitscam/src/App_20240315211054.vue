<script setup>
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <fwb-textarea
    v-model="message"
    :rows="4"
    label="Your message"
    placeholder="Write your message..."
  />

  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
<script setup>
import { ref } from 'vue'
import { FwbTextarea } from 'flowbite-vue'

const message = ref('')
</script>