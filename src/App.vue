<script setup>
import mainHeader from "./components/mainHeader.vue";
</script>

<template>
  <div class="container">
    <mainHeader></mainHeader>
    <router-view></router-view>
  </div>
</template>

<style>
body {
  background-color: white;
}
.container {
  max-width: 1300px;
  margin: 0 auto;
}
</style>
