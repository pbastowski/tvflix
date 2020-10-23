<template>
    <v-app>
        <v-app-bar app :bottom="$vuetify.breakpoint.xs" flat>
            <v-spacer />

            <search />

            <v-spacer />

            <options-menu />
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>
            <v-container fluid>
                <nuxt></nuxt>
            </v-container>
        </v-main>
    </v-app>
</template>
