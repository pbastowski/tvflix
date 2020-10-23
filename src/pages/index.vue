<template>
    <nuxt-child />
</template>

<script>
    export default {
        asyncData({ store, redirect }) {
            // This app may do more in the future, but for now we only have shows, so we ...
            redirect(`/shows`)
        }
    }
</script>
