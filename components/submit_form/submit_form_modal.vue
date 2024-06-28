<template>
  <div>
    <UModal v-model="store.shown" class="ul-modal">
      <div class="ul-modal-content">
        <div class="d-flex flex-row align-items-start justify-content-between">
          <h3>Заполните форму</h3>
          <a href="javascript:void(0)" @click="store.show(false)" class="close me-2">
            <img src="/img/svg/close.svg" width="18"/>
          </a>
        </div>
        <SubmitForm />
      </div>
    </UModal>
    <UModal v-model="store.successShown" class="ul-modal">
      <div class="ul-modal-content">
        <div class="d-flex flex-row align-items-start justify-content-between">
          <h3>Форма отправлена</h3>
          <a href="javascript:void(0)" @click="store.successShown = false" class="close me-2">
            <img src="/img/svg/close.svg" width="18"/>
          </a>
        </div>
        <p>Спасибо, мы свяжемся с Вами в ближайшее время.</p>
      </div>
    </UModal>
    <UModal v-model="store.failShown" class="ul-modal">
      <div class="ul-modal-content">
        <div class="d-flex flex-row align-items-start justify-content-between">
          <h3>Ошибка отправки</h3>
          <a href="javascript:void(0)" @click="store.failShown = false" class="close me-2">
            <img src="/img/svg/close.svg" width="18"/>
          </a>
        </div>
        <p>Не удалось отправить данные. Пожалуйста, повторите попытку позже, либо свяжитесь с нами через контакты, указанные в шапке сайта.</p>
      </div>
    </UModal>
  </div>
</template>
<script setup>
  import { useModalStore } from '@/stores/modal'
  const store = useModalStore()
</script>
<style lang="scss">
@use "/assets/scss/main.scss";

#headlessui-portal-root .relative {
  background: transparent !important;
}

#headlessui-portal-root, #app {
  .ul-modal-content {
    background: darken(main.$primary, 11%);
    padding: 30px 25px;
    border-radius: 15px;
  }

  .close {
    margin-top: 6px; 


    &:hover img {
      filter: invert(91%) sepia(72%) saturate(3351%) hue-rotate(209deg) brightness(581%) contrast(45%);
    }
  }

  h3 {
    margin-bottom: 20px;
    color: main.$base;
  }
}
  
</style>