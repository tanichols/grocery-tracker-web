<template>
    <Button v-if="isAuthenticated" icon="pi pi-check" class="p-button-rounded p-button-text" @click="login" />
    <Button v-else icon="pi pi-check" class="p-button-rounded p-button-text" @click="logout" />
</template>

<script>
export default {
    data: function () {
        return {
            isAuthenticated: this.$auth0.isAuthenticated
        }
    },
    methods: {
        login() {
            this.$auth0.loginWithRedirect()
        },
        logout() {
            this.$auth0.logout({ returnTo: window.location.origin })
        }
    }
}
</script>
