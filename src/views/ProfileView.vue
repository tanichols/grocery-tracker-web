<template>
    <div>
        <h1>User Profile</h1>
        <pre>
            <code>{{ user }}</code>
        </pre>
    </div>
</template>
  
<script>
export default {
    data: function () {
        return {
            user: this.$auth0.user
        };
    }
};
</script>