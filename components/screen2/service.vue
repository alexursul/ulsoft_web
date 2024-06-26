<template>
    <div class="ul-panel service">
        <h3>{{ title }}</h3>
        <slot></slot>
        <h3>От <span>{{ price }}</span> ₽</h3>
        <button>Заказать</button>
    </div>
</template>
<script setup>
defineProps(['price', 'title'])
</script>
<style>
#screen2 .service {
    h3:first-of-type {
        padding-bottom: 30px;
    }

    h3:last-of-type {
        padding-top: 20px;
        padding-bottom: 30px;
    }

    .price {
        display: inline-block;
        white-space: pre;
    }
}
</style>