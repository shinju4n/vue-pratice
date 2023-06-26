<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <RouterLink 
      class="nav-link"  
      active-class="active" 
      :to="{name: 'NestedOne', replace: true}"
      >
      Nested 1</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link" :to="{name: 'NestedTwo', replace: true}" active-class="active">Nested 2</RouterLink>
    </li>
  </ul>
  <hr class="my-4"/>
  <router-view/>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>