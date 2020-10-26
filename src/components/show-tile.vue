<template>
    <div style="background: rgba(125, 125, 125, 0.1)" class="rounded">
        <v-img
            class="rounded-sm"
            :lazy-src="(show.image && show.image.medium) || noImageYet"
            :height="maxHeight"
            :width="maxWidth"
            :src="(show.image && show.image[imgSize]) || noImageYet"
        >
            <div class="d-flex">
                <h3 class="show-name" :title="show.name">
                    {{ show.name }}
                </h3>
                <v-spacer />
                <show-rating :rating="show.rating.average" minimal small class="mr-1" />
            </div>
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
            maxWidth() {
                return this.isMobile ? 125 : 250
            },
            maxHeight() {
                return this.isMobile ? 175 : 350
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
