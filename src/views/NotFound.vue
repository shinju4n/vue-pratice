<template>
  <div class="text-center py-5">
    <h1>OOPS!</h1>
    <h2>Not Found</h2>
    <div class="text-muted">요청한 페이지를 찾을 수 없습니다!</div>
    <div class="mt-4">
      <RouterLink to="/" class="btn btn-primary">홈으로</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>

</style>