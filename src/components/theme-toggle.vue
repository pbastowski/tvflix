<template>
    <v-btn icon title="Switch between dark and light theme"
        ><v-icon @click="toggleTheme">mdi mdi-theme-light-dark</v-icon></v-btn
    >
</template>

<script>
    export default {
        methods: {
            toggleTheme() {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            }
        }
    }
</script>
