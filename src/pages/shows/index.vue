<template>
    <div ref="showList" style="overflow-y: auto; overflow-x: hidden">
        <div v-for="genre in $store.getters.getShows">
            <!-- Genre title and show count -->
            <h1 style="text-transform: capitalize; font-weight: 400">
                {{ genre.genre }} <small>({{ genre.shows.length }})</small>
            </h1>

            <!-- The show list row  -->
            <div
                style="overflow-x: auto; overflow-y: hidden; display: flex"
                class="mx-n1 mb-sm-5 mb-1"
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
</template>

<script>
    export default {
        asyncData({ store, query }) {
            const searchText = query.q
            if (searchText) {
                // If a query is passed with searchText then we fetch the search results
                store.state.searchText = searchText
                store.dispatch('searchByText', searchText)
            } else {
                // Otherwise we just fetch the popular shows list
                store.dispatch('getPopularShows')
            }
        },

        beforeRouteUpdate(to, from, next) {
            // Always scroll the show list to the top when fetching new results
            this.$refs.showList.scrollTop = 0

            // next() must be called to complete the route transition
            next()
        }
    }
</script>
