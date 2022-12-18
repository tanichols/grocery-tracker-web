<template>
    <TopBar />
    <header>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="/profile">Profile</RouterLink>
                </li>
            </ul>
        </nav>
    </header>

    <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from './components/layout/TopBar.vue';

export default {
    components: {
        RouterLink,
        RouterView,
        TopBar
    }
}
</script>
