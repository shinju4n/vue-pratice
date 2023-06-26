<template>
  <h2>{{ $route.name }}</h2>
  <button class="btn btn-primary" @click="$router.push('/about')">
    about으로 이동
  </button>
</template>

<script setup></script>

<style lang="scss" scoped></style>
