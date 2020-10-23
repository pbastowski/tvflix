<template>
    <div>
        <h1>Loading popular shows...</h1>
        <nuxt-child />
    </div>
</template>

<script>
    export default {
        asyncData(ctx) {
            ctx.store.dispatch('getPopularShows')
        }
    }
</script>
