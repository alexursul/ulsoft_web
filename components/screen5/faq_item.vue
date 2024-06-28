<template>
<div class="ul-panel panel-sm faq-item" ref="item" :id="id">
    <a href="javascript:void(0)" @click="toggleShow" class="d-flex flex-row justify-content-between toggle-link" title="Раскрыть пункт FAQ">
        <p class="pe-3">{{ title }}</p>
        <img src="/img/svg/arrow.svg" alt="Раскрыть" />
    </a>

    <div class="faq-item-body">
        <slot></slot>
    </div>
  </div>
</template>
<script setup>
const item = ref(null)
const { id, expanded } = defineProps(['title', 'id', 'expanded']);

const toggleShow = function() {
    $('.faq-item.expanded').map(function() {
        if ($(this).attr('id') == id) {
            return;
        }
        $(this).find('.faq-item-body').slideUp();
        $(this).removeClass('expanded');
    })

    $('#' + id).toggleClass('expanded');
    $('#' + id).find('.faq-item-body').slideToggle();
}

onMounted(() => {
    if (expanded == true) {
        toggleShow();
    }
})
</script>
<style lang="scss">
@use "/assets/scss/main.scss";

#app .ul-panel.faq-item {
    .toggle-link {
        img {
            transition-duration: 0.3s;
            transition-property: transform;
        }
    }
    
    .faq-item-body {
        display: none;
        padding: 15px 20px;
        margin-top: 15px;
        background-color: rgba(main.$primary2, 0.5);

        p {
            font-size: 15px;
        }

        p:last-of-type {
            margin-bottom: 0;
        }
    }

    &.expanded {
        .toggle-link img {
            transform: rotate(180deg);
        }
    }
}
</style>