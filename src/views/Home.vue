<template>
    <Features class="surface-section" />
    <Pricing class="surface-ground" />
    <CallToAction class="surface-section" />
</template>
<script>
import Features from '../components/home/Features.vue'
import Pricing from '../components/home/Pricing.vue'
import CallToAction from '../components/home/CallToAction.vue'

export default {
    components: {
        Features,
        Pricing,
        CallToAction
    }
}
</script>
