<template>
    <nuxt-link
        :to="`/shows/genre/${genre}`"
        class="text-decoration-none"
        :class="[$vuetify.theme.dark ? 'white--text' : 'black--text']"
        >{{ genre }}</nuxt-link
    >
</template>

<script>
    export default {
        props: { genre: String }
    }
</script>
