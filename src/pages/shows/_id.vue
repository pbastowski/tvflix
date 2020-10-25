<template>
    <!-- On phones show without a card/border -->
    <div v-if="isMobile" class="overflow-y-auto overflow-x-hidden" ref="showList">
        <show-details :show="show" />
    </div>

    <!-- On all other larger devices show the show details in a card -->
    <v-row v-else no-gutters class="overflow-y-auto overflow-x-hidden">
        <v-col class="col-xs-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
            <v-card ref="showList">
                <v-card-text>
                    <show-details :show="show" />
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        async asyncData({ store, params }) {
            // If not found then fetch from the API
            const show = await store.dispatch('getShowById', Number(params.id))

            return { show, showCastMore: false }
        },

        beforeRouteUpdate(to, from, next) {
            // Always scroll the show list to the top when fetching new results
            this.$refs.showList.scrollIntoView()

            // next() must be called to complete the route transition
            next()
        }
    }
</script>
