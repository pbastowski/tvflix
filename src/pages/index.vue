<template>
    <nuxt-child />
</template>

<script>
    export default {
        asyncData({ store, redirect }) {
            redirect(`/shows`)
        }
    }
</script>
