<template>
    <v-menu left :top="isMobile" :bottom="!isMobile" offset-y>
        <template #activator="{ on, attrs }">
            <v-app-bar-nav-icon v-bind="attrs" v-on="on" />
        </template>

        <v-list class="py-0">
            <!-- Dark / Light switch -->
            <v-list-item v-if="$vuetify.theme.dark" @click="$vuetify.theme.dark = false"
                >Go Light</v-list-item
            >
            <v-list-item v-else @click="$vuetify.theme.dark = true">Go Dark</v-list-item>
        </v-list>
    </v-menu>
</template>
