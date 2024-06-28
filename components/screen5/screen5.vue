<template>
    <div id="screen5">
        <div id="screen5-wrap">
            <div class="container">
                <div class="row d-none d-lg-flex align-items-center">
                    <div class="col">
                        <h3>Часто задаваемые вопросы</h3>
                    </div>
                    <div class="col">
                        <h3>Не нашли ответа на свой вопрос? Напишите нам</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <h2 class="d-lg-none">Часто задаваемые вопросы</h2>
                        <div id="faq">
                            <Screen5FaqItem title="Успешный продукт, которым вы можете начать пользоваться прямо сейчас" id="faq1">
                                <p>
                                    Enim sed faucibus turpis in eu mi bibendum. Netus et malesuada fames ac turpis egestas. Integer enim neque volutpat ac tincidunt.
                                </p>
                            </Screen5FaqItem>
                            <Screen5FaqItem title="Успешный продукт, которым вы можете начать пользоваться прямо сейчас" id="faq2">
                                <p>
                                    Semper auctor neque vitae tempus. Habitasse platea dictumst vestibulum rhoncus est. 
                                    Euismod lacinia at quis risus sed vulputate odio. Odio tempor orci dapibus ultrices. Nec tincidunt praesent semper feugiat nibh sed.
                                </p>
                            </Screen5FaqItem>
                            <Screen5FaqItem title="Успешный продукт, которым вы можете начать пользоваться прямо сейчас" id="faq3">
                                <p>
                                    Enim sed faucibus turpis in eu mi bibendum. Netus et malesuada fames ac turpis egestas. Integer enim neque volutpat ac tincidunt.
                                </p>
                            </Screen5FaqItem>
                            <Screen5FaqItem title="Успешный продукт, которым вы можете начать пользоваться прямо сейчас" id="faq4">
                                <p>
                                    Semper auctor neque vitae tempus. Habitasse platea dictumst vestibulum rhoncus est. 
                                    Euismod lacinia at quis risus sed vulputate odio. Odio tempor orci dapibus ultrices. Nec tincidunt praesent semper feugiat nibh sed.
                                </p>
                            </Screen5FaqItem>
                            <Screen5FaqItem title="Успешный продукт, которым вы можете начать пользоваться прямо сейчас" id="faq5">
                                <p>
                                    Enim sed faucibus turpis in eu mi bibendum. Netus et malesuada fames ac turpis egestas. Integer enim neque volutpat ac tincidunt.
                                </p>
                            </Screen5FaqItem>
                            <Screen5FaqItem title="Успешный продукт, которым вы можете начать пользоваться прямо сейчас" id="faq6">
                                <p>
                                    Semper auctor neque vitae tempus. Habitasse platea dictumst vestibulum rhoncus est. 
                                    Euismod lacinia at quis risus sed vulputate odio. Odio tempor orci dapibus ultrices. Nec tincidunt praesent semper feugiat nibh sed.
                                </p>
                            </Screen5FaqItem>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <h2 class="d-lg-none mt-5">Не нашли ответа на свой вопрос? Напишите нам</h2>
                        <SubmitForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@use "/assets/scss/main.scss";

#screen5 {
   margin-top: 100px;
   background: url('/img/bg/bg3.png');
   background-size: 100% 450px;
   background-position-y: bottom;
   background-repeat: no-repeat;

   #screen5-wrap {
        background: linear-gradient(180deg, rgba(main.$counter, 1) 75%, rgba(main.$primary, 0.3) 90%, rgba(main.$counter, 0.8) 100%);
        padding-bottom: 100px;
   }

   h3 {
    margin-bottom: 20px;
   }

   #faq {
    .ul-panel {
        margin-bottom: 20px;
    
        .card-body {
            margin-top: 10px;
            background-color: rgba(main.$primary2, 0.5);
            padding: 15px 20px 15px 20px;

            p {
                font-size: 15px;
            }

            p:last-of-type {
                margin-bottom: 0;
            }
        }
    }

    a {
        p {
            margin-bottom: 0;
            color: main.$base;
        }
    }
   }

    // >= lg
    @media (min-width: 992px) {
        #screen5-wrap > .container > .row > div {
            &:first-of-type {
                padding-right: 50px;
            }

            &:last-of-type {
                padding-left: 50px;
            }
        }
    }
}


</style>
