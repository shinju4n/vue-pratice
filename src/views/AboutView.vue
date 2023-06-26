<template>
  <h2>About</h2>
  <p>{{ $route.path }}</p>
  <button class="btn btn-primary" @click="$router.push('/')">홈 이동</button>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.path);
</script>

<style lang="scss" scoped></style>
