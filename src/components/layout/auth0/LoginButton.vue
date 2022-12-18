<template>
    <Button @click="login">Log in</Button>
</template>

<script>
export default {
    methods: {
        login() {
            this.$auth0.loginWithRedirect()
        }
    }
}
</script>
