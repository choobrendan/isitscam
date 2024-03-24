<template>
  <fwb-navbar class="custom-navbar absolute top-0 w-full">
    <template #logo>
      <a href="/">
        <logo :fontSize="24" />
      </a>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link link="/report"> What is Scam? </fwb-navbar-link>
        <fwb-navbar-link link="/home"> Scam Detection </fwb-navbar-link>
        <fwb-navbar-link link="/report"> Discover </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
    <template #right-side>
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link link="/login"> Log In </fwb-navbar-link>
      </fwb-navbar-collapse>
      <fwb-button href="/register" class=" my-auto h-5 items-center">
        Sign Up
      </fwb-button>
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
.custom-navbar {
  padding-left: 0;
  display: flex;
  padding-right: 0;
  flex-direction: row;
  align-items: center;
  height: 60px;
  /* Adjust this value to your preference */
}
</style>
