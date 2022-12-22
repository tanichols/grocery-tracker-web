<template>
    <TopBar />
    <div class="mt-5">
        <RouterView />
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
