<template>
    <v-form @submit.prevent v-model="isValid" :style="{ 'max-width': isMobile ? '60%' : '400px' }">
        <v-text-field
            class="tvflix-search"
            rounded
            dense
            hide-details
            prepend-inner-icon="mdi-magnify"
            outlined
            clearable
            :rules="searchText ? [allowedInputChars, minLength(3), maxLength(50)] : undefined"
            :value="searchText"
            @input="
                searchText = $event ? $event : ''
                debounceSearch($event)
            "
        />
    </v-form>
</template>

<style scoped>
    .tvflix-search /deep/ .v-icon {
        margin-left: -20px;
    }
    .tvflix-search /deep/ button.v-icon {
        margin-right: -40px;
    }
</style>

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

            window.$router = this.$router
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
                // The form can be valid if there is no text or when
                // there is text that satisfies the validation rules.
                // In that case we fetch search results.
                if (isValid && searchText) {
                    this.$store.dispatch('getShowBySearchtext', searchText)
                    this.$router.push(`/shows?q=${searchText}`)
                }

                // If there is no text then we fetch popular shows
                else if (!searchText) {
                    this.$store.dispatch('getPopularShows')
                    this.$router.push(`/shows`)
                }
            }
        }
    }
</script>
