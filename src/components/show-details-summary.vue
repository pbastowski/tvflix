<template>
    <!-- Summary -->
    <v-row no-gutters class="text-body-1">
        <v-col>
            <div class="d-flex">
                <!-- Show Name -->
                <h2 class="show-name" :title="show.name">
                    {{ show.name }}
                </h2>
                <v-spacer />

                <show-rating :rating="show.rating.average" />
            </div>

            <div class="font-weight-medium mt-1 d-flex">
                <!-- Year premiered, number of seasons, episode count -->
                <span v-if="show.premiered">{{ show.premiered.slice(0, 4) }}</span>
                <span v-if="show.seasons" class="ml-3"
                    >{{ show.seasons }} {{ pluralize('season', show.seasons) }}</span
                >
                <span v-if="show.seasons" class="ml-3"
                    >{{ show.episodes }} {{ pluralize('episode', show.episodes) }}</span
                >
                <v-spacer />

                <!-- IMDB link -->
                <a class="ml-8" :href="`https://imdb.com/title/${show.externals.imdb}`"
                    ><img src="~/assets/imdb-logo.svg" alt="imdb logo" height="16px;"
                /></a>
            </div>

            <!-- Show Summary Description -->
            <!-- TODO: unsafe usage of HTML needs to be fixed in production app -->
            <p class="mt-3 mt-sm-5" v-html="show.summary"></p>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        props: { show: Object }
    }
</script>
