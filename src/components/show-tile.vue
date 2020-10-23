<template>
    <div style="background: rgba(125, 125, 125, 0.1)" class="rounded">
        <v-img
            class="rounded-sm"
            :lazy-src="(show.image && show.image.medium) || noImageYet"
            :height="maxHeight"
            :width="maxWidth"
            :src="(show.image && show.image[imgSize]) || noImageYet"
        >
            <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
            </template>
        </v-img>
        <p style="height: 40px" class="mt-1" :title="show.name">{{ show.name }}</p>
    </div>
</template>

<script>
    const noImageYet = require('~/assets/no-img-portrait-text.png')

    export default {
        props: {
            show: Object
        },

        data: () => ({ noImageYet }),

        computed: {
            mobile() {
                return this.$vuetify.breakpoint.xs
            },
            maxWidth() {
                return this.mobile ? 125 : 250
            },
            maxHeight() {
                return this.mobile ? 175 : 350
            },
            imgSize() {
                return 'medium'
            }
        }
    }
</script>
