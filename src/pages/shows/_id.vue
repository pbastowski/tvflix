<template>
    <div style="overflow-y: scroll; overflow-x: hidden" ref="showList">
        <h3>Details for a show</h3>
        <p>{{ show }}</p>
    </div>
</template>

<script>
    export default {
        async asyncData({ store, params }) {
            // If not found then fetch from the API
            const show = await store.dispatch('getShowById', params.id)

            return { show }
        }
    }
</script>
