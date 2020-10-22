<template>
    <v-menu left bottom offset-y>
        <template #activator="{ on, attrs }">
            <v-app-bar-nav-icon v-bind="attrs" v-on="on" />
            <!--<v-btn icon v-bind="attrs" v-on="on">
                &lt;!&ndash;                <v-icon>mdi-dots-vertical</v-icon>&ndash;&gt;
                <v-icon>mdi-account</v-icon>
            </v-btn>-->
        </template>

        <v-list class="py-0">
            <!-- Dark / Light switch -->
            <!--            <v-divider />-->
            <v-list-item v-if="$vuetify.theme.dark" @click="$vuetify.theme.dark = false"
                >Go Light</v-list-item
            >
            <v-list-item v-else @click="$vuetify.theme.dark = true">Go Dark</v-list-item>

            <v-divider />
            <v-list-item
                ><span style="font-size: 12px; color: #888"
                    >fe: {{ version }}<br />be: ?.?.?</span
                ></v-list-item
            >
        </v-list>
    </v-menu>
</template>

<script>
    export default {
        data: () => ({ version: process.env.version })
    }
</script>
