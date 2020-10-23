<template>
    <v-form v-model="isValid" :style="{ 'min-width': $vuetify.breakpoint.xs ? '' : '50%' }">
        <v-text-field
            rounded
            dense
            hide-details
            prepend-inner-icon="mdi-magnify"
            outlined
            :clearable="grow"
            :style="{ 'max-width': grow ? '' : $vuetify.breakpoint.xs ? '70px' : '' }"
            :class="{ grow }"
            :rules="grow ? [allowedInputChars, minLength(3), maxLength(50)] : undefined"
            :value="searchText"
            @input="
                searchText = $event ? $event : ''
                debounceSearch($event)
            "
            @focus="grow = true"
            @blur="grow = !!searchText"
        />
    </v-form>
</template>

<script>
    import { allowedInputChars, maxLength, minLength } from '@/common/validators.js'
    import debounce from 'lodash.debounce'

    export default {
        data: () => ({ isValid: false, grow: false }),

        created() {
            // Create a debounced method that calls fetchResults
            // - when the user stops typing
            // - and the input is valid, as per the rules prop on text-field
            this.debounceSearch = debounce(v => this.fetchResults(v, this.isValid), 500)

            // SHow the search text if it's available
            this.grow = !!this.searchText
        },

        computed: {
            // This is how you proxy a state from the store
            searchText: {
                get() {
                    return this.$store.state.searchText
                },
                set(nv) {
                    this.$store.state.searchText = nv
                }
            }
        },

        methods: {
            // Expose validators to the template
            allowedInputChars,
            maxLength,
            minLength,

            fetchResults(searchText, isValid) {
                if (isValid && searchText) {
                    this.$store.dispatch('searchByText', searchText)
                    this.$router.push(`/shows?q=${searchText}`)
                } else if (!searchText) {
                    this.$store.dispatch('getPopularShows')
                    this.$router.push(`/shows`)
                }
            }
        }
    }
</script>
