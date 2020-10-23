<template>
    <div style="height: 100vh">
        <h3>Popular Shows</h3>
        <div style="height: 100vh; overflow-y: scroll; overflow-x: hidden">
            <div v-for="genre in $store.getters.popularShows">
                <h4 style="text-transform: capitalize">
                    {{ genre.genre }} ({{ genre.shows.length }})
                </h4>
                <div style="height: 200px; overflow-x: scroll; overflow-y: hidden; display: flex">
                    <div v-for="show in genre.shows">
                        <v-img
                            v-if="show.image.medium"
                            :lazy-src="show.image.medium"
                            max-height="150"
                            max-width="120"
                            :src="show.image.medium"
                        >
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular
                                        indeterminate
                                        color="grey lighten-5"
                                    ></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                        <p v-else>No Image</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        asyncData(ctx) {}
    }
</script>
