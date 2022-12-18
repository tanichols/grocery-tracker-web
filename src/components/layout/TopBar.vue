<template>
    <div>
        <LoginButton v-if="!isAuthenticated" />
        <LogoutButton v-else />
    </div>
</template>

<script>
import LoginButton from './auth0/LoginButton.vue'
import LogoutButton from './auth0/LogoutButton.vue'

export default {
    components: {
        LoginButton,
        LogoutButton
    },
    data: function () {
        return {
            isAuthenticated: this.$auth0.isAuthenticated
        }
    }
}
</script>
