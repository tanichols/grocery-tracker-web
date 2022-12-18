<template>
    <div>
        <LoginButton v-if="!isUserLoggedIn" />
        <LogoutButton v-else />
    </div>
</template>
  
<script>
import LoginButton from '../auth0/LoginButton.vue'
import LogoutButton from '../auth0/LogoutButton.vue'

export default {
    components: {
        LoginButton,
        LogoutButton
    },
    computed: {
        isUserLoggedIn() {
            return this.$auth0.user.value
        }
    }
}
</script>