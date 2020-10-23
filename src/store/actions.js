export async function getPopularShows({ state }) {
    state.shows = await this.$axios.$get('http://api.tvmaze.com/shows').then(shows => {
        // Nominalize data
        return shows.map(show => ({
            ...show,
            // Lowercase genre strings for ease of searching later
            genres: show.genres.map(genre => genre.toLowerCase())
        }))
    })
}
