export async function getPopularShows({ state }) {
    state.shows = await this.$axios.$get('http://api.tvmaze.com/shows').then(nominalizeData)
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
