<template>
    <div>
        <v-img
            :lazy-src="(show.image && show.image.medium) || noImageYet"
            max-height="175"
            max-width="125"
            :src="(show.image && show.image.medium) || noImageYet"
        >
            <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
            </template>
        </v-img>
        <p :title="show.name">{{ show.name }}</p>
    </div>
</template>

<script>
    const noImageYet = require('~/assets/no-img-portrait-text.png')

    export default {
        props: {
            show: Object
        },

        data: () => ({ noImageYet })
    }
</script>
