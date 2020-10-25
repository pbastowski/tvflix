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

                <!-- rating -->
                <h4 v-if="show.rating.average" class="ml-5">
                    <v-icon color="yellow darken-1">mdi mdi-star</v-icon> {{ show.rating.average }}
                    <span class="grey--text font-weight-light">/10</span>
                </h4>
            </div>

            <div class="font-weight-medium mt-1 d-flex">
                <!-- Year premiered, number of seasons, episode count -->
                <span>{{ show.premiered.slice(0, 4) }}</span>
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
    import imdbLogo from '@/assets/imdb-logo.svg'

    console.log('LOGO:', imdbLogo)

    export default {
        props: { show: Object }
    }
</script>
