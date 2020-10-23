<template>
    <nuxt-child />
</template>

<script>
    export default {
        asyncData({ store }) {
            store.dispatch('getPopularShows')
        }
    }
</script>
