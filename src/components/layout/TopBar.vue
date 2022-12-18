<template>
    <div class="topbar p-3 surface-300 flex">
        <router-link to="/" class="topbar-logo">
            <img src="/images/logo.svg" alt="Grocery Tracker">
        </router-link>

        <div class="layout-topbar-menu">
            <Button icon="pi pi-check" class="p-button-rounded p-button-text" />
            <LoginButton />
        </div>
    </div>
</template>

<script>
import LoginButton from './LoginButton.vue'

export default {
    components: {
        LoginButton
    }
}
</script>
