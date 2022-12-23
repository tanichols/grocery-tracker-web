<template>
    <div>
        <ItemList :items="itemList" class="overflow-auto" />
        <div>
            {{ selectedItem }}
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useGroceryStore } from '../stores/grocery'
import ItemList from '../components/dashboard/itemList.vue'

export default {
    components: {
        ItemList
    },
    data: () => {
        return {
            selectedItem: 0
        }
    },
    computed: {
        ...mapState(useGroceryStore, ['itemList'])
    },
    mounted() {
        this.selectedItem = this.itemList[0]
    }
}
</script>
<style>
.p-splitter {
    border: none
}
.p-splitter-gutter {
    border-right: 1px solid #dee2e6;
}
</style>
