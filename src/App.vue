<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-10 mx-auto">
        <Header></Header>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Header from './components/Header.vue'
</script>


<style>
</style>
