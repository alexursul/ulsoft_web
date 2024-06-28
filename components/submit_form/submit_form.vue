<template>
    <form class="submit-form" novalidate ref="form">
        <div class="d-flex flex-column">
            <SubmitFormTextInput 
                hint="Фамилия, имя, отчество*" 
                v-model="state.name" 
                :validation="/^\S+/"
                error="Обязательное поле"
                ref="nameInput"
            />
            <div class="d-flex flex-row justify-content-between">
                <SubmitFormTextInput 
                    hint="Телефон*" 
                    v-model="state.phone" 
                    :validation="phoneRegexp" 
                    error="Неправильный номер"
                    ref="phoneInput"
                />

                <SubmitFormTextInput 
                    hint="Эл. адрес*" 
                    v-model="state.email" 
                    :validation="emailRegexp" 
                    error="Неправильный эл. адрес"
                    ref="emailInput"
                />
            </div>
            <textarea class="input ul-panel panel-sm" rows="5" hint="Сообщение" v-model="state.message" />
            <div class="button-row d-flex flex-row align-items-center justify-content-between">
                <div class="me-4">
                    <input
                            type="file"
                            @change="onFileChanged($event)"
                            accept="image/png, image/jpeg, application/msword, .docx, application/pdf"
                            class="d-none"
                            ref="fileInput"
                            capture
                        />
                    <a href="javascript:void(0)" @click="fileInput.click()"  v-if="state.file == null" title="Прикрепить файл">
                        <img src="/img/icons/anchor.png" height="26" class="me-2 d-block" alt="Прикрепить файл" />
                        <span>Прикрепить файл</span>
                    </a>
                    <div v-if="state.file != null" class="d-flex attachment-box align-items-baseline">
                        <a href="javascript:void(0)" @click="state.file = null" class="delete-attachment me-2" title="Удалить прикрепление">
                            <img src="/img/svg/close.svg" width="16" alt="Удалить прикрепление" />
                        </a>
                        <span>{{ shortenedName(state.file.name) }} ({{(parseFloat(state.file.size) / 1024.0 / 1024.0).toFixed(2) }} Мб)</span>
                    </div>
                    <p>
                        Формат: jpg, pdf, docx. Размером не более 5 Мб
                    </p>
                </div>
                <button type="button" @click="submitForm()">Отправить заявку</button>
            </div>
            <div class="checkbox-row d-flex">
                <div class="mt-1">
                    <div class="pretty p-image p-curve p-smooth p-bigger">
                        <input type="checkbox" v-model="state.agreed" />
                        <div class="state">
                            <img class="image" src="/img/icons/tick2.png" alt="Согласие дано">
                            <label></label>
                        </div>
                    </div>
                </div>
                <div class="">
                    <a href="javascript:void(0)" @click="state.agreed = !state.agreed" title="Согласиться с политикой конфиденциальности">
                        Даю свое согласие на обработку персональных данных в соответствие с 
                    </a>
                    <a href="javascript:void(0)" title="Посмотреть политику конфиденциальности" class="policy-link">политикой конфиденциальности</a>
                </div>
               
                
            </div>
            <div class="input-error" v-if="state.showTncError && !state.agreed">
                Обязательное поле
            </div>
        </div>
    </form>
</template>
<script setup lang="ts">
import axios from 'axios';
import * as vars from '@/constants/constants.ts';
import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()
const fileInput = ref(null)
const emailInput = ref(null)
const phoneInput = ref(null)
const nameInput = ref(null)
const form = ref(null)
const emailRegexp = RegExp(/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/)
const phoneRegexp = RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)

const state = reactive({
    name: '',
    phone: '',
    email: '',
    message: '',
    agreed: false,
    file: null,
    showTncError: false
})

const onFileChanged = function($event: Event) {
    const target = $event.target as HTMLInputElement;
    if (target && target.files) {
        if (target.files[0].size > 5 * 1024 * 1024) {
            alert("Файл слишком большой!");
            return;
        }
        state.file = target.files[0];
    }
}

const shortenedName = function(name: String) {
    if (name.length < 24) {
        return name;
    }

    return name.substring(0, 10) + '...' + name.substring(name.lastIndexOf('.') - 9);
}

const submitForm = function() {
    const isValid = emailInput.value.isValid && phoneInput.value.isValid && nameInput.value.isValid && state.agreed;
    if (!isValid) {
        console.log([emailInput.value.isValid, phoneInput.value.isValid, nameInput.value.isValid, state.agreed]);

        state.showTncError = true;
        return;
    }

    console.log(['SENDING FORM!', vars.API_URL]);

    axios.postForm(vars.API_URL, {
        name: state.name,
        email: state.email,
        message: state.message,
        phone: state.phone,
        file: state.file,
    }).then(() => {
        state.showTncError = false;
        state.name = '';
        state.phone = '';
        state.message = '';
        state.email = '';
        state.agreed = false;
        state.file = null;
        modalStore.successShown = true;
    }).catch((_) => {
        modalStore.failShown = true;
    });
}
</script>
<style lang="scss">
@use "/assets/scss/main.scss";

#headlessui-portal-root, #app {
    .submit-form {
        .policy-link {
            color: main.$accent2 !important;
        }

        input {
            width: 100%;
        }
    
        .flex-row {
            margin: 20px 0;
            > div {
                width: 100%;
    
                &:first-of-type {
                    margin-right: 10px;
                }
        
                &:last-of-type {
                    margin-left: 10px;
                }
            }
        }
    
        textarea {
            margin-bottom: 20px;
        }

        .button-row {
            span {
                font-weight: 500;   
            }
    
            p {
                margin-bottom: 0;
                margin-top: 7px;
                font-size: 13px;
                font-family: "Inter", sans-serif;
            }
    
            button {
                min-width: 215px;
            }
        }

        .checkbox-row {
            padding-top: 5px;
            max-width: 580px;

            input {
                margin-bottom: 0;
            }

            a {
                font-size: 13px;
                font-family: "Inter", sans-serif;
                white-space: normal;
                color: main.$comment;
            }

        }
    }
}
</style>