<template>
    <div class="col-lg pt-xl-2 pt-1 col-md-6 col-sm-12 d-md-block d-flex py-3 py-md-0">
        <img :src="img" height="40" :alt="title" class="pe-3 pe-md-0" />
        <h5 class="pt-1 pt-xl-2 mb-4 mb-lg-0 mt-0 mt-xl-1">{{ title }}</h5>
    </div>
</template>
<script setup>
defineProps(['img', 'title'])
</script>