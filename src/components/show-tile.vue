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
            <h3 class="show-name" :title="show.name">
                {{ show.name }}
            </h3>
        </v-img>
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

<style scoped>
    .show-name {
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        color: white;
        font-weight: 400;
        background: rgba(0, 0, 0, 0.3);
        padding: 5px;
        border-radius: 2px;
    }
    .show-name:hover {
        background: rgba(0, 0, 0, 0.7);
    }
</style>
