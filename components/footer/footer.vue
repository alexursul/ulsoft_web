<template>
    <div id="footer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-xl-3 d-flex align-items-center order-1">
                    <img src="/img/icons/logo.png" height="63" alt="ULSoft" />
                    <h3 class="ms-3 mt-2 pt-1">UL Soft</h3>
                </div>
                <FooterContactUs class="d-xl-none mt-3 mt-md-0 order-2" />
                <div class="col-md-8 col-xl-3 d-flex flex-column justify-content-center align-items-start my-4 order-last order-md-3">
                    <a href="javascript:void(0)" title="Открыть политику конфиденциальности">
                        <p>Политика конфиденциальности</p>
                    </a>
                    <p class="mb-0">© 2024. Вся информация защищена</p>
                </div>
                <div class="col-12 col-md-4 col-xl-2 d-flex flex-column justify-content-center align-items-xl-center align-items-md-end align-items-start mt-4 mt-md-0 order-4">
                    <a class="d-flex align-items-center mb-3" :href="'mailto:' + email" title="Написать нам на E-mail" target="_blank">
                        <img src="/img/icons/mail.png" height="24" class="me-2" alt="E-mail" />
                        <span class="">{{ email }}</span>
                    </a>
                    <a class="d-flex" :href="'tel:' + phone" title="Позвонить нам" target="_blank">
                        <img src="/img/icons/phone.png" height="24" class="me-2" alt="Phone" />
                        <span>{{ phone }}</span>
                    </a>
                </div>
                <FooterContactUs class="col-xl-4 d-none d-xl-flex order-5" />
            </div>
        </div>
    </div>
</template>
<script setup>
import * as vars from '@/constants/constants.ts';
const email = vars.EMAIL;
const phone = vars.PHONE;

</script>
<style lang="scss">
@use "/assets/scss/main.scss";

#footer {
    padding-top: 40px;
    padding-bottom: 40px;

    button.contact-us {
        min-width: 210px;
    }

    p {
        font-size: 14px;
    }

    a span {
        font-size: 16px;
    }
}

 /// < md
 @media (max-width: 767.98px) {
    #footer {
        padding-top: 20px;
    }
}
</style>