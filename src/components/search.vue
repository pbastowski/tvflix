<template>
    <v-text-field
        rounded
        dense
        hide-details
        prepend-inner-icon="mdi-magnify"
        outlined
        clearable
        :style="{ 'max-width': grow ? '' : '70px' }"
        :class="{ grow }"
        :rules="grow ? [allowedInputChars, minLength(3), maxLength(50)] : undefined"
        :value="$store.state.searchText"
        @input="debounceSearch($event, $store)"
        @focus="grow = true"
        @blur="grow = !!$store.state.searchText"
    />
</template>

<script>
    import { allowedInputChars, maxLength, minLength } from '@/common/validators.js'
    import debounce from 'lodash.debounce'

    export default {
        data: () => ({ grow: false }),

        methods: {
            allowedInputChars,
            maxLength,
            minLength,

            debounceSearch: debounce((value, $store) => {
                value = value || ''
                $store.state.searchText = value
            }, 400),

            async fetchResults() {
                if (this.$store.getters['search/searchTerms'].length < 2) return

                await this.$store.dispatch(
                    'search/fetchSearchResults',
                    this.$store.state.searchText
                )
                this.$router.push('/search-results')
            }
        }
    }
</script>
