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
            v-model="searchText"
            @input="debounceSearch"
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
            this.debounceSearch = debounce(v => this.isValid && this.fetchResults(v), 500)
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
            allowedInputChars,
            maxLength,
            minLength,

            async fetchResults(searchText) {
                await this.$store.dispatch('searchByText', searchText)
                this.$router.push('/shows')
            }
        }
    }
</script>
