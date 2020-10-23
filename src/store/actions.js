export async function getShowById({ state, getters }, showId) {
    // Try the store cache first
    let show = getters.getShowById(showId)
    if (show) return show

    // If not found then fetch from the API
    return this.$axios.$get(`http://api.tvmaze.com/shows/${showId}`)
}

// Caching popular shows, as they are not likely to change very often
let popularShows = null

export async function getPopularShows({ state }) {
    // Check if we have popularShows in the cache
    if (popularShows) return (state.shows = popularShows)

    // If not then fetch them from the API - this will be very fast on a fast network
    popularShows = state.shows = await this.$axios
        .$get('http://api.tvmaze.com/shows')
        .then(nominalizeData)
}

export async function searchByText({ state }, searchText) {
    state.shows = await this.$axios
        .$get(`http://api.tvmaze.com/search/shows?q=${searchText}`)
        .then(shows =>
            // de nest the shows
            shows.map(result => {
                result.show.score = result.score
                return result.show
            })
        )
        .then(nominalizeData)
}

// Do some data transforms
function nominalizeData(shows) {
    return shows.map(show => ({
        ...show,
        // Lowercase genre strings for ease of searching later
        genres: show.genres.map(genre => genre.toLowerCase())
    }))
}
