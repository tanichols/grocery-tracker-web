<template>
    <div>
        <h1>Profile</h1>
        <pre>
            <code>{{ user }}</code>
        </pre>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            user: this.$auth0.user
        }
    }
}
</script>
