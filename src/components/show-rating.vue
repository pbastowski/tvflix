<template>
    <!-- rating -->
    <h4 v-if="rating" class="ml-5 d-flex">
        <v-icon color="yellow darken-1" :small="small" class="mr-1">mdi mdi-star</v-icon>
        {{ rating }}
        <span v-if="!minimal" class="grey--text font-weight-light">/10</span>
    </h4>
</template>

<script>
    export default {
        props: { rating: Number, minimal: Boolean, small: Boolean }
    }
</script>
