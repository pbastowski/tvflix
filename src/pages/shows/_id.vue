<template>
    <!-- On phones show without a card/border -->
    <div v-if="isMobile" class="overflow-y-auto overflow-x-hidden">
        <show-details :show="show" />
    </div>

    <!-- On all other larger devices show the show details in a card -->
    <v-card
        v-else
        class="col-xs-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 overflow-y-auto overflow-x-hidden"
    >
        <show-details :show="show" />
    </v-card>
</template>

<script>
    export default {
        async asyncData({ store, params }) {
            // If not found then fetch from the API
            const show = await store.dispatch('getShowById', Number(params.id))

            return { show, showCastMore: false }
        }
    }
</script>
