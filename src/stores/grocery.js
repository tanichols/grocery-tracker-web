import { defineStore } from 'pinia'

export const useGroceryStore = defineStore('grocery', {
    state: () => ({
        items: []
    }),
    actions: {
        addItem(newItem) {
            this.items.push(newItem)
        }
    }
})
