<template>
    <v-app-bar app :bottom="isMobile" flat>
        <v-btn icon to="/"><v-icon>mdi mdi-home</v-icon></v-btn>
        <v-btn icon @click="$router.back()"><v-icon>mdi mdi-arrow-left-bold</v-icon></v-btn>
        <v-spacer />

        <search />

        <v-spacer />

        <options-menu />
    </v-app-bar>
</template>
