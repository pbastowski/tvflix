<template>
    <div style="height: calc(100vh - 82px); overflow-y: scroll; overflow-x: hidden">
        <div v-for="genre in $store.getters.popularShows">
            <h4 style="text-transform: capitalize">{{ genre.genre }} ({{ genre.shows.length }})</h4>

            <div style="height: 200px; overflow-x: scroll; overflow-y: hidden; display: flex" b1>
                <div v-for="show in genre.shows">
                    <v-img
                        :lazy-src="(show.image && show.image.medium) || noImageYet"
                        max-height="175"
                        max-width="125"
                        :src="(show.image && show.image.medium) || noImageYet"
                    >
                        <template #placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                    <p :title="show.name">{{ show.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const noImageYet = require('~/assets/no-img-portrait-text.png')

    export default {
        asyncData({ store, query }) {
            if (query.q) {
                store.state.searchText = query.q
                store.dispatch('searchByText', query.q)
            } else store.dispatch('getPopularShows')
        },
        data: () => ({ noImageYet })
    }
</script>
