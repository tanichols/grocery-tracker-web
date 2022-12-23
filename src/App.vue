<template>
    <div class="flex flex-column gap-3 flex-grow-1 overflow-hidden">
        <TopBar class="flex" />
        <RouterView class="flex flex-grow-1 overflow-hidden" />
    </div>
</template>

<script>
import { RouterView } from 'vue-router'
import TopBar from './components/layout/TopBar.vue'

export default {
    components: {
        RouterView,
        TopBar,
    }
}
</script>
