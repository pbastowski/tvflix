<template>
    <div class="text-body-1 text-sm-subtitle-1">
        <v-row no-gutters>
            <v-col class="col-9 col-sm-6">
                <v-img
                    class="rounded-sm mr-3"
                    max-height="450"
                    :lazy-src="(show.image && show.image.medium) || noImageYet"
                    :src="(show.image && show.image.original) || noImageYet"
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
            </v-col>

            <v-col class="text-body-2 col-sm-6 px-sm-5">
                <!-- Summary for not mobile -->
                <show-details-summary v-if="!isMobile" :show="show" />

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

        <!-- Summary -->
        <show-details-summary v-if="isMobile" :show="show" class="mt-5" />

        <!-- More details -->
        <v-row no-gutters class="mt-3 mt-sm-5">
            <v-col>
                <h2 class="mb-3 font-weight-light">About {{ show.name }}</h2>
                <p v-if="directors">
                    <a name="director"
                        ><span class="grey--text"
                            >{{ pluralize('Director', show.directors.length) }}:
                        </span></a
                    >{{ directors }}
                </p>
                <p>
                    <a name="cast-full"><span class="grey--text">Full cast: </span></a
                    >{{ castFull }}
                </p>
            </v-col>
        </v-row>
        <!--<hr />
        <p>{{ show }}</p>-->
    </div>
</template>

<script>
    export default {
        props: { show: Object },
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
            },
            directors() {
                return this.show.directors.join(', ')
            }
        }
    }
</script>
