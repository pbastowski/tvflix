<template>
    <v-card class="overflow-y-auto overflow-x-hidden">
        <v-img
            class="rounded-sm"
            width="70%"
            :lazy-src="(show.image && show.image.medium) || noImageYet"
            :src="(show.image && show.image.original) || noImageYet"
        >
            <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
            </template>
            <h3 class="show-name" :title="show.name">
                {{ show.name }}
            </h3>
        </v-img>
        <h3>Details for a show</h3>
        <p>{{ show }}</p>
    </v-card>
</template>

<script>
    export default {
        async asyncData({ store, params }) {
            // If not found then fetch from the API
            const show = await store.dispatch('getShowById', Number(params.id))

            return { show }
        }
    }
</script>

<style scoped>
    .show-name {
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        color: white;
        font-weight: 400;
        background: rgba(0, 0, 0, 0.3);
        padding: 5px;
        border-radius: 2px;
    }
    .show-name:hover {
        background: rgba(0, 0, 0, 0.7);
    }
</style>
