<template>
    <div id="screen1">
        <div id="screen1-wrap">
            <div class="container">
                <div class="row" id="panel-corner">
                    <div class="col-4" >
                        <a href="/" title="ulsoft.pro" id="logo-img">
                            <img src="/img/icons/logo.png" height="63" alt="ULSoft" />
                        </a>
                    </div>
                    <div class="col text-end">
                        <div class="ul-panel contacts">
                            <div class="d-flex">
                                <a :href="'mailto:' + email" title="Написать нам на почту" class="d-flex me-4" target="_blank">
                                    <img src="/img/svg/mail.svg" width="24" height="24" alt="E-mail" />
                                    <span class="d-none d-lg-inline">{{ email }}</span>
                                </a>
                                <a :href="'tel:' + phone" title="Позвонить нам" target="_blank">
                                    <img src="/img/svg/phone.svg" width="24" height="24" alt="Phone" />
                                    <span class="d-none d-lg-inline">{{ phone }}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div id="panel1">
                            <div class="hero d-flex flex-column align-content-center justify-content-center">
                                <h1>UL Soft</h1>
                                <h4>Политическое учение Руссо, особенно в условиях политической нестабильности, представляет собой субъект власти</h4>
                                <div>
                                    <button type="button" @click="store.show(true)">
                                        Оставить заявку
                                    </button>
                                </div>
                                
                            </div>

                            <div class="benefits ul-panel">
                                <div class="container-fluid">
                                    <div class="row pt-2">
                                        <Screen1Benefit img="/img/icons/pc2.png" title="Стильный привлекательный и адаптивный дизайн"/>
                                        <Screen1Benefit img="/img/icons/thumbs.png" title="Пожалуй, самые демократичные цены на рынке"/>
                                        <Screen1Benefit img="/img/icons/pc.png" title="Техническая поддержка и наполнение сайта"/>
                                        <Screen1Benefit img="/img/icons/graph.png" title="Оперативное продвижение ваших товаров и услуг"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import * as vars from '@/constants/constants.ts';
    import { useModalStore } from '@/stores/modal'
    const store = useModalStore()
    const email = vars.EMAIL
    const phone = vars.PHONE
</script>
<style lang="scss">
@use "/assets/scss/main.scss";

#screen1 {
    background-image: url('/img/bg/bg1.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: main.$primary;
}

#screen1-wrap {
    background: linear-gradient(180deg, rgba(11, 12, 16, 0) 0%, main.$counter 100%);
    padding-top: 25px;
    $pdLeft: 50px;
    $cornerHeight: 95px;

    #panel-corner {
        height: $cornerHeight;
        background: url('/img/svg/panel1_corner2.svg') no-repeat;
        background-size: 370px $cornerHeight;
        background-position: 12px bottom;

        #logo-img {
            padding-top: 20px;
            margin-left: $pdLeft;
            display: block;
        }
    }

    #panel1 {
        background: url('/img/svg/panel1_xxl.svg') no-repeat;
        background-size: 100% 827px;
        background-position-y: 0px;
        padding-bottom: 70px;

        .hero {
            padding-left: $pdLeft;
            padding-right: $pdLeft;
            height: 600px;
            vertical-align: middle;

            .row:first-child {
                padding-top: 20px;
            }

            button {
                margin-top: 50px;
            }
        }
    }

    .contacts {
        display: inline-block;
        img {
            margin-right: 12px;
        }

        span {
            margin-right: 25px;

            &:last-of-type {
                margin-right: 0px;
            }
        }
    }
    
    .benefits {
        margin-top: 10px;
        margin-right: 23%;
        border-radius: 40px;
        padding-bottom: 0;
        padding-top: 0;
        
        > div {
            height: 167px;
        }
    }

    /// < lg
    @media (max-width: 991.98px) {  
        #panel-corner {
            background-size: 300px $cornerHeight;

            .contacts {
                img {
                    margin-right: 0;
                }
            }
        }

        #panel1 {
            background-image: none;

            .hero {
                min-height: auto;
                height: auto;
                background: #1F2833DB;
                border-radius: 40px;
                border-top-left-radius: 0;
                padding-top: 40px;
                padding-bottom: 40px;
                margin-bottom: 20px;
            }

            .benefits {
                margin-right: 0;
                padding-bottom: 15px;
    
                > div {
                    height: auto;
                }
            }
        }
    }

    /// < md
    @media (max-width: 767.98px) {
        #panel1 {
            .hero {
                min-height: 480px;
            }

            .benefits {
                padding-bottom: 0;
            }
        }
     }

     /// < sm
     @media (max-width: 575.98px) { 
        #panel-corner {
            background-size: 220px $cornerHeight;
        }
    }
}


</style>