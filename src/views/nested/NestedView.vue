<template>
  <ul class="nav">
    <li class="nav-item">
      <RouterLink class="nav-link" to="/nested/one" active-class="active">Nested 1</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link" to="/nested/two" active-class="active">Nested 2</RouterLink>
    </li>
  </ul>
  <hr class="my-4"/>
  <router-view/>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>