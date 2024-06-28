<template>
  <div id="app">
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <Screen5 />
      <Footer />
      <SubmitFormModal />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'ULSoft',
  meta: [
    { name: 'description', content: 'Разработка веб-сайтов и мобильных приложений' }
  ],
})
</script>
<style>
@import 'node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>