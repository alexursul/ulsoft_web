<template>
    <div class="col-12 col-md-6 d-flex align-items-center justify-content-md-end justify-content-start">
        <button class="contact-us" @click="store.show(true)">Связаться с нами</button>
        <a :href="whatsappUrl" title="Написать нам в WhatsApp">
            <button class="button-sm mx-3">
                <img src="/img/svg/whatsapp.svg" height="19" alt="WhatsApp" />
            </button>
        </a>
        <a :href="telegramUrl" title="Написать нам в Telegram">
            <button class="button-sm">
                <img src="/img/svg/telegram.svg" height="19" alt="Telegram" />
            </button>
        </a>
    </div>
</template>
<script setup>
import * as vars from '@/constants/constants.ts';
import { useModalStore } from '@/stores/modal'
const store = useModalStore()
const whatsappUrl = vars.WHATSAPP_URL;
const telegramUrl = vars.TELEGRAM_URL;
</script>