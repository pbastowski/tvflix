<template>
    <v-form v-model="isValid" :style="{ 'min-width': $vuetify.breakpoint.xs ? '' : '50%' }">
        <v-text-field
            rounded
            dense
            hide-details
            prepend-inner-icon="mdi-magnify"
            outlined
            clearable
            :style="{ 'max-width': grow ? '' : $vuetify.breakpoint.xs ? '70px' : '' }"
            :class="{ grow }"
            :rules="grow ? [allowedInputChars, minLength(3), maxLength(50)] : undefined"
            :value="searchText"
            v-on="{ input: debounce(v => updateSearchText(v), debounceDelay) }"
            @focus="grow = true"
            @blur="grow = !!searchText"
        />
    </v-form>
</template>

<script>
    import { allowedInputChars, maxLength, minLength } from '@/common/validators.js'
    import debounce from 'lodash.debounce'

    export default {
        data: () => ({ isValid: false, grow: false, debounceDelay: 600 }),

        computed: {
            searchText() {
                return this.$store.state.searchText
            }
        },

        methods: {
            allowedInputChars,
            maxLength,
            minLength,
            debounce,

            updateSearchText(value) {
                value = value || ''
                if (this.isValid) {
                    this.$store.state.searchText = value
                }
            },

            async fetchResults() {
                await this.$store.dispatch('searchByText', this.searchText)
                this.$router.push('/search-results')
            }
        }
    }
</script>
