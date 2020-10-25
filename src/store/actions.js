export async function getShowById({ state, getters }, showId) {
    // Try the store cache first
    // let show = getters.getShowById(showId)
    // if (show) return show

    // If not found then fetch from the API
    return this.$axios
        .$get(`http://api.tvmaze.com/shows/${showId}?embed[]=episodes&embed[]=cast&embed[]=crew`)
        .then(show => {
            if (show._embedded.episodes.length > 0) {
                show.seasons = new Set(show._embedded.episodes.map(ep => ep.season)).size
                show.episodes = show._embedded.episodes.length
            }
            if (show._embedded.cast.length > 0)
                show.cast = show._embedded.cast.map(item => item.person.name)
            if (show._embedded.crew.length > 0) {
                show.directors = show._embedded.crew
                    .filter(item => item.type.toLowerCase().includes('director'))
                    .map(item => item.person?.name)
            }
            return { ...show, _embedded: undefined }
        })
}

// Caching popular shows, as they are not likely to change very often
let popularShows = null

export async function getPopularShows({ state }) {
    // Check if we have popularShows in the cache
    if (popularShows) return (state.shows = popularShows)

    // If not then fetch them from the API - this will be very fast on a fast network
    return (popularShows = state.shows = await this.$axios
        .$get('http://api.tvmaze.com/shows')
        .then(nominalizeData))
}

export async function searchByText({ state }, searchText) {
    return (state.shows = await this.$axios
        .$get(`http://api.tvmaze.com/search/shows?q=${searchText}`)
        .then(shows =>
            // de nest the shows
            shows.map(result => {
                result.show.score = result.score
                return result.show
            })
        )
        .then(nominalizeData))
}

// Do some data transforms
function nominalizeData(shows) {
    return shows.map(show => ({
        ...show,
        // Lowercase genre strings for ease of searching later
        genres: show.genres.map(genre => genre.toLowerCase())
    }))
}
