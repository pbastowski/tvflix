const BASE_URL = 'https://api.tvmaze.com'

// The config below is required to enable the CORS simple requests with fetch(),
// which are required to access tvmaze API.
//
// Note: I could not get axios to work at all, because it insists on doing a
// preflight, which disables simple requests and then we have all the CORS issues.
const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

export async function getShowById({ state, getters }, showId) {
    // Fetch from the API, also getting episodes, cast and crew
    return fetch(`${BASE_URL}/shows/${showId}?embed[]=episodes&embed[]=cast&embed[]=crew`, config)
        .then(d => d.json())

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
    popularShows = state.shows = await fetch(`${BASE_URL}/shows`, config)
        .then(d => d.json())
        .then(nominalizeData)

    return popularShows
}

export async function searchByText({ state }, searchText) {
    return (state.shows = await fetch(`${BASE_URL}/search/shows?q=${searchText}`, config)
        .then(d => d.json())

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
