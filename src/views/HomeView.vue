<template>
  <div class="wrapper">
    <nav class="navigation">
      <router-link class="navigation__item" :to="{ name: 'case-one' }">Задание №1</router-link>
      <router-link class="navigation__item" :to="{ name: 'case-two' }">Задание №2</router-link>
      <router-link class="navigation__item" :to="{ name: 'case-three' }">Задание №3</router-link>
    </nav>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style src="./HomeView.css" scoped />
