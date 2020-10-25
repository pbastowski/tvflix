<template>
    <v-card class="overflow-y-auto overflow-x-hidden">
        <v-img
            xcontain
            class="rounded-sm"
            xmax-width="70%"
            max-height="350"
            :lazy-src="(show.image && show.image.medium) || noImageYet"
            :src="(show.image && show.image.original) || noImageYet"
        >
            <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
            </template>
        </v-img>

        <v-row no-gutters class="mt-3 text-body-1">
            <v-col cols="8" class="pr-5">
                <!-- Show Name -->
                <h3 class="show-name" :title="show.name">
                    {{ show.name }}
                </h3>

                <!-- Year premiered and number of seasons-->
                <div class="font-weight-medium mt-1">
                    <span class="mr-3">{{ show.premiered.slice(0, 4) }}</span
                    ><span v-if="show.seasons">{{ show.seasons }} seasons</span>
                </div>
                <p class="mt-5" v-html="show.summary"></p>
            </v-col>
            <v-col cols="4 text-caption">
                <!-- Cast -->
                <p>
                    <span class="grey--text">Cast: </span>{{ castShort }}
                    <template v-if="castMore"
                        ><br />
                        <nuxt-link to="#cast-full" class="grey--text">more</nuxt-link>
                    </template>
                </p>

                <!-- Genres -->
                <p>
                    <span class="grey--text">Genres: </span
                    ><span class="text-capitalize">{{ genres }}</span>
                </p>
            </v-col>
        </v-row>

        <!-- More details -->
        <v-row no-gutters>
            <v-col>
                <h2 class="mb-3">About {{ show.name }}</h2>
                <p v-if="show.director">
                    <a name="director"><span class="grey--text">Director: </span></a
                    >{{ show.director }}
                </p>
                <p>
                    <a name="cast-full"><span class="grey--text">Cast: </span></a>{{ castFull }}
                </p>
            </v-col>
        </v-row>
        <hr />
        <p>{{ show }}</p>
    </v-card>
</template>

<script>
    export default {
        async asyncData({ store, params }) {
            // If not found then fetch from the API
            const show = await store.dispatch('getShowById', Number(params.id))

            return { show, showCastMore: false }
        },

        computed: {
            castFull() {
                return this.show.cast.join(', ')
            },
            castShort() {
                return this.show.cast.slice(0, 4).join(', ')
            },
            castMore() {
                return this.show.cast.length > 4
            },
            genres() {
                return this.show.genres.join(', ')
            }
        }
    }
</script>

<style scoped>
    /*.show-name {*/
    /*    position: absolute;*/
    /*    bottom: 0px;*/
    /*    left: 0px;*/
    /*    right: 0px;*/
    /*    color: white;*/
    /*    font-weight: 400;*/
    /*    background: rgba(0, 0, 0, 0.3);*/
    /*    padding: 5px;*/
    /*    border-radius: 2px;*/
    /*}*/
    /*.show-name:hover {*/
    /*    background: rgba(0, 0, 0, 0.7);*/
    /*}*/
</style>
