<template>
    <div id="screen4">
        <div class="container">
            <div class="ul-panel d-flex flex-xl-row flex-column mb-4">
                <h3 class="mb-4 mb-xl-0 me-xl-5">Выберите нас для реализации своего проекта и получите скидку</h3>
                <div class="d-flex align-items-lg-center align-items-start flex-column flex-lg-row">
                    <a :href="whatsappUrl" title="Написать нам в WhatsApp" target="_blank">
                        <button class="me-lg-4 mb-3 mb-lg-0">
                        <img src="/img/svg/whatsapp.svg" alt="WhatsApp" width="15" />
                            Написать в WhatsApp
                        </button>
                    </a>
                    <a :href="telegramUrl" title="Написать нам в Telegram" target="_blank">
                        <button>
                            <img src="/img/svg/telegram.svg" alt="Telegram" width="15" />
                            Написать в Telegram
                        </button>
                    </a>
                </div>
            </div>

            <div class="ul-panel tusk-panel d-flex flex-xl-row flex-column">
                <div class="row">
                    <div class="col">
                        <div class="d-flex align-items-center company-name">
                            <img src="/img/icons/logo.png" height="63" />
                            <h3 class="pt-2 mt-1 ps-3">UL Soft</h3>
                        </div>
                        <h2>Успешный продукт, которым вы можете начать пользоваться прямо сейчас</h2>
                        <div class="mb-3 pt-2">
                            <a :href="tuskAppStoreUrl" title="Скачать Tusk в App Store" class="me-4" target="_blank">
                                <img src="/img/icons/appstore.png" height="45" alt="Tusk в App Store" />
                            </a>
                            <a :href="tuskGooglePlayUrl" title="Скачать Tusk в Google Play" target="_blank">
                                <img src="/img/icons/googleplay.png" height="45" alt="Tusk в Google Play" />
                            </a>
                        </div>
                    </div>
                    <div class="col d-flex align-content-end align-items-end justify-content-center">
                        <img src="/img/tusk_app.png" width="400" class="mt-5" alt="Приложение Tusk" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import * as vars from '@/constants/constants.ts';
const whatsappUrl = vars.WHATSAPP_URL;
const telegramUrl = vars.TELEGRAM_URL;
const tuskAppStoreUrl = vars.TUSK_APP_STORE_URL;
const tuskGooglePlayUrl = vars.TUSK_GOOGLE_PLAY_URL;

</script>
<style lang="scss">
@use "/assets/scss/main.scss";

#screen4 {
    padding-top: 50px;

    > .container > .ul-panel 
    {
        margin-left: 0;
        margin-right: 0;
        padding: 40px 60px;
    }

    > .container > .tusk-panel {
        padding-bottom: 0;
    }

    button {
        min-width: 270px;
        img {
            margin-right: 5px;
        }
    }

    h2 {
        font-size: 40px;
        font-weight: 700;
        line-height: 52px;
    }

    .company-name {
        padding-bottom: 30px;

        h3 {
            text-align: left;
            background: linear-gradient(180deg, #64F6EB 24.18%, #46A29F 104.4%);
            font-size: 26px;
            font-weight: 700;
            line-height: 31.2px;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
}
</style>
