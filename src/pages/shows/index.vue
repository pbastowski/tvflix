<template>
    <div ref="showList">
        <div v-for="genre in $store.getters.getShows">
            <!-- Genre title and show count -->
            <div
                class="text-sm-h4 text-xs-h6 text-capitalize"
                :class="[{ 'font-weight-light': $vuetify.breakpoint.smAndUp }]"
            >
                <genre-link :genre="genre.genre" />
                <small>({{ genre.shows.length }})</small>
            </div>

            <!-- The show list row  -->
            <div style="position: relative">
                <scroll-row
                    v-if="!isMobile"
                    right
                    @scroll="scroll => scroll($refs[`listRow${genre.genre}`])"
                />
                <scroll-row
                    v-if="!isMobile"
                    left
                    @scroll="scroll => scroll($refs[`listRow${genre.genre}`])"
                />

                <div
                    :ref="`listRow${genre.genre}`"
                    class="overflow-x-auto overflow-y-hidden d-flex mx-n1 mb-sm-8 mb-4"
                    style="scroll-behavior: smooth; position: relative"
                >
                    <show-tile
                        v-for="show in genre.shows"
                        :key="show.id"
                        :show="show"
                        class="mx-1"
                        @click.native="$router.push(`/shows/${show.id}`)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        async fetch({ store, query }) {
            const searchText = query.q
            if (searchText) {
                // If a query is passed with searchText then we fetch the search results
                store.state.searchText = searchText
                store.dispatch('getShowBySearchtext', searchText)
            } else {
                // Otherwise we just fetch the popular shows list
                store.dispatch('getPopularShows')
            }
        },

        beforeRouteUpdate(to, from, next) {
            // Always scroll the show list to the top when fetching new results
            this.$refs.showList.scrollIntoView()

            // next() must be called to complete the route transition
            next()
        }
    }
</script>
