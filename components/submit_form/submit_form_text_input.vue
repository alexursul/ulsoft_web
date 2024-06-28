<template>
    <div class="text-input" :class="state.errorShown ? 'has-error' : ''">
        <input 
            class="input ul-panel panel-sm" 
            type="text" 
            name="name"
            :value="modelValue" 
            @input="onValueEntered($event.target.value)" 
            required
            :placeholder="hint" 
        />
        <div class="input-error" v-if="state.errorShown && modelValue.length == 0">
            Обязательное поле
        </div>
        <div class="input-error" v-else-if="state.errorShown">
            {{ error }}
        </div>
    </div>
    
</template>
<script setup lang="ts">
const { validation, modelValue } = defineProps(['hint', 'modelValue', 'error', 'validation']);
const emit = defineEmits(['update:modelValue'])
const state = reactive({
    errorShown: false,
    value: '',
})

const onValueEntered = function(value: String) {
    state.value = value
    emit('update:modelValue', value);
    const regex = RegExp(validation);

    if (value.length == 0 || (validation != null && regex.test(value) == false)) {
        state.errorShown = true;
    } else {
        state.errorShown = false;
    }

    return state.errorShown == false;
}

const isValid = computed(() => onValueEntered(state.value))

defineExpose({
    isValid
});
</script>
<style lang="scss">
@use "/assets/scss/main.scss";

.input-error {
    padding-top: 6px;
    color: main.$danger;
    font-size: 14px;
}

</style>