<template>
    <div ref="showList">
        <div
            class="text-sm-h4 text-xs-h6 text-capitalize"
            :class="[{ 'font-weight-light': $vuetify.breakpoint.smAndUp }]"
        >
            {{ genre }} <small>({{ shows.length }})</small>
        </div>
        <v-row>
            <v-col
                v-for="show in shows"
                :key="show.id"
                class="d-flex child-flex col-4 col-sm-3 col-lg-2 col-xl-1"
            >
                <show-tile :show="show" @click.native="$router.push(`/shows/${show.id}`)" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        async asyncData({ store, params }) {
            store.dispatch('getPopularShows')
            return { genre: params.genre }
        },

        beforeRouteUpdate(to, from, next) {
            // Always scroll the show list to the top when fetching new results
            this.$refs.showList.scrollIntoView()

            // next() must be called to complete the route transition
            next()
        },

        computed: {
            shows() {
                return this.$store.getters.popularInGenre(this.genre) || []
            }
        }
    }
</script>
