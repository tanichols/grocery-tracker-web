<template>
    <button @click="login">Log in</button>
</template>
  
<script>
export default {
    methods: {
        login() {
            this.$auth0.loginWithRedirect();
        }
    }
};
</script>