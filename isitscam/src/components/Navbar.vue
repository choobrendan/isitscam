<template>
  <!-- <div class="z-50 fixed top-0 w-full bg-white bg-opacity-85 h-[8vh] mb-2 px-4 flex items-center justify-between align-middle">
    <div class="flex items-center">
      <a href="/" class="mr-4">
        <logo :fontSize="24" />
      </a>
      <a href="/home" class="mr-4">Scam Detection</a>
      <a href="/report" class="mr-4">Discover</a>
    </div>
    <div class="flex items-center">
      <a href="/login" class="mr-4">Login</a>
      <a href="/register">Register</a>
    </div>
  </div> -->
  <fwb-navbar>
    <template #logo>
      <a href="/">
        <logo :fontSize="24" />
      </a>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link link="report"> What is Scam? </fwb-navbar-link>
        <fwb-navbar-link link="/home"> Scam Detection </fwb-navbar-link>
        <fwb-navbar-link link="report"> Discover </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
    <template #right-side>
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link link="report"> Log In </fwb-navbar-link>
      </fwb-navbar-collapse>
      <fwb-button size="xs"> Sign Up </fwb-button>
    </template>
  </fwb-navbar>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  components: {
    Logo,
  },
};
</script>

<script setup>
import {
  FwbButton,
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from "flowbite-vue";
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
