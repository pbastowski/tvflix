<template>
    <v-app-bar app :bottom="isMobile" flat hide-on-scroll>
        <v-btn icon to="/"><v-icon>mdi mdi-home</v-icon></v-btn>
        <v-btn icon @click="$router.back()"><v-icon>mdi mdi-arrow-left-bold</v-icon></v-btn>
        <v-spacer />

        <search class="grow" />

        <v-spacer />

        <theme-toggle />
    </v-app-bar>
</template>
