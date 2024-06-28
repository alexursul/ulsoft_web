import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    shown: false,
    successShown: false,
    failShown: false,
  }),
  actions: {
    show(value) {
      this.shown = value == true;
    },
    showSuccess() {
      this.successShown = true;
    },
    showFail() {
      this.failShown = true;
    },
  },
})