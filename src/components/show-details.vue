<template>
    <div class="text-body-1 text-sm-subtitle-1">
        <v-row no-gutters>
            <v-col class="col-9 col-sm-12">
                <v-img
                    :contain="!isMobile"
                    class="rounded-sm mr-3"
                    max-height="550"
                    :lazy-src="(show.image && show.image.original) || noImageYet"
                    :src="(show.image && show.image.original) || noImageYet"
                />
            </v-col>

            <v-col class="text-body-2 col-sm-12 px-xs-5 mt-sm-8">
                <!-- Summary for not mobile -->
                <show-details-summary v-if="!isMobile" :show="show" />

                <!-- Cast -->
                <p v-if="castShort">
                    <span class="grey--text">Cast: </span>{{ isMobile ? castShort : castFull }}
                    <template v-if="castMore && isMobile"
                        ><br />
                        <a
                            href="javascript:"
                            @click="$refs.castFull.scrollIntoView()"
                            class="grey--text"
                            >more</a
                        >
                    </template>
                </p>

                <!-- Genres -->
                <p v-if="genres">
                    <span class="grey--text">Genres: </span
                    ><span class="text-capitalize">{{ genres }}</span>
                </p>

                <!-- Language -->
                <p v-if="show.language">
                    <span class="grey--text">Language: </span
                    ><span class="text-capitalize">{{ show.language }}</span>
                </p>

                <!-- Status -->
                <p v-if="show.status">
                    <span class="grey--text">Status: </span
                    ><span class="text-capitalize">{{ show.status }}</span>
                </p>
            </v-col>
        </v-row>

        <!-- Summary -->
        <show-details-summary v-if="isMobile" :show="show" class="mt-5" />

        <!-- More details -->
        <v-row no-gutters class="mt-3 mt-sm-5" v-if="directors || (castFull && isMobile)">
            <v-col>
                <h2 class="mb-3 font-weight-light">About {{ show.name }}</h2>
                <p v-if="directors">
                    <a name="director"
                        ><span class="grey--text"
                            >{{ pluralize('Director', show.directors.length) }}:
                        </span></a
                    >{{ directors }}
                </p>
                <p ref="castFull" v-if="castFull && isMobile">
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
    const noImageYet = require('~/assets/no-img-portrait-text.png')

    export default {
        props: { show: Object },
        computed: {
            noImageYet: () => noImageYet,
            castFull() {
                return this.show?.cast?.join(', ')
            },
            castShort() {
                return this.show?.cast?.slice(0, 3).join(', ')
            },
            castMore() {
                return this.show?.cast?.length > 4
            },
            genres() {
                return this.show?.genres?.join(', ')
            },
            directors() {
                return this.show?.directors?.join(', ')
            }
        }
    }
</script>
