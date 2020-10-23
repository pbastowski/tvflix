<template>
    <div style="height: calc(100vh - 82px); overflow-y: scroll; overflow-x: hidden" ref="showList">
        <div v-for="genre in $store.getters.getShows">
            <!-- Genre title and show count -->
            <h4 style="text-transform: capitalize">{{ genre.genre }} ({{ genre.shows.length }})</h4>

            <!-- The show list row  -->
            <div style="height: 200px; overflow-x: scroll; overflow-y: hidden; display: flex">
                <show-tile v-for="show in genre.shows" :show="show" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        asyncData({ store, query }) {
            if (query.q) {
                // If a query is passed with searchText then we fetch the search results
                store.state.searchText = query.q
                store.dispatch('searchByText', query.q)
            } else {
                // Otherwise we just fetch the popular shows list
                store.dispatch('getPopularShows')
            }
        },

        beforeRouteUpdate() {
            // Always scroll the show list to the top when fetching new results
            this.$refs.showList.scrollTop = 0
        }
    }
</script>
