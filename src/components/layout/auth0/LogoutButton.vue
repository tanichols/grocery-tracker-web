<template>
    <Button @click="logout">Log out</Button>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$auth0.logout({ returnTo: window.location.origin })
        }
    }
}
</script>
