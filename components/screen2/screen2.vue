<template>
    <div id="screen2">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2>Услуги</h2>
                </div>
            </div>
        </div>
        <div class="wrap">
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="d-flex flex-lg-row services-list flex-column">
                                <Screen2Service title="Разработка сайтов" price="70 000">
                                    Визитки, лендинги, Интернет-магазины, Корпоративные сайты, Готовые решения
                                </Screen2Service>
                                <div class="d-flex flex-column">
                                    <div class="d-flex flex-column flex-md-row">
                                        <Screen2Service title="Реклама" price="150 000">
                                            визитки, лендинги, интернет-магазины, корпоративные сайты и тд
                                        </Screen2Service>
                                        <Screen2Service title="Проектирование" price="30 000">
                                            аналитика, прототипы будущего проекта, готовое техническое задание
                                        </Screen2Service>
                                    </div>
                                    <Screen2Service title="Разработка мобильных приложений" price="15 000">
                                        визитки, лендинги, интернет-магазины, корпоративные сайты и тд
                                    </Screen2Service>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss">
@use "/assets/scss/main.scss";

$gapSize: 20px;

#screen2 {
    padding-bottom: 100px;

    .wrap {
        background-image: url('/img/bg/bg2.png');
        background-size: 100% 827px;
        background-repeat: no-repeat;
        background-color: main.$counter;
        

        > div {
            background: linear-gradient(180deg, main.$counter 0%, rgba(5, 6, 8, 0) 52.5%, main.$counter 100%);
        }
    }


    > .container > .row:first-of-type h2 {
        padding-bottom: 20px;
    }

    background-color: main.$counter;

    .services-list {
        > .service {
            margin-right: $gapSize;
        }

        > div {
            > div .service:first-of-type {
                margin-right: $gapSize;
            }

            > .service {
                margin-top: $gapSize;
            }
        }
    }

    /// < lg
    @media (max-width: 991.98px) {  
        .services-list {
            > .service {
                margin-right: 0;
                margin-bottom: $gapSize;
            }
        }
    }

    
    /// < md
    @media (max-width: 767.98px) {
        .services-list {
             > div > div .service:first-of-type {
                margin-right: 0;
                margin-bottom: $gapSize;
            }
        }
    }
}

</style>