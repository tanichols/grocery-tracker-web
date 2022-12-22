<template>
    <div class="flex max-h-4rem shadow-4 p-2">
        <router-link to="/" class="flex-none">
            <img src="/logo.svg" class="h-full" alt="Grocery Tracker">
        </router-link>
        <div class="flex-grow-1" />
        <Avatar
            v-if="isAuthenticated"
            :image="user.picture"
            class="avatar mr-2 flex-none cursor-pointer"
            shape="circle"
            size="large"
            aria-haspopup="true"
            aria-controls="profileMenu"
            @click="toggleProfileMenu"
        />
        <Menu id="profileMenu" ref="profileMenu" :model="profileMenuItems" :popup="true" />
        <Button
            v-if="!isAuthenticated"
            class="p-button-text flex-none"
            icon="fa-solid fa-right-to-bracket"
            label="Login"
            @click="login"
        />
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            isAuthenticated: this.$auth0.isAuthenticated,
            user: this.$auth0.user,
            profileMenuItems: [
                {
                    label: 'Profile',
                    icon: 'fa-solid fa-user',
                    to: '/profile'
                },
                {
                    label: 'Logout',
                    icon: 'fa-solid fa-right-to-bracket',
                    command: () => {
                        this.$auth0.logout({ returnTo: window.location.origin })
                    }
                }
            ]
        }
    },
    methods: {
        login() {
            this.$auth0.loginWithRedirect()
        },
        toggleProfileMenu(event) {
            this.$refs.profileMenu.toggle(event)
        }
    }
}
</script>

<style scoped>
</style>
