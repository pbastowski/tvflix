// Alphabetically sorted list of genres
export const sortedGenres = state =>
    Array.from(new Set(state.shows.map(t => t.genres).flat())).sort()

// List of shows in a genre sorted by popularity, from highest to lowest (reverse rating.average)
export const popularInGenre = state => genre =>
    state.shows
        .filter(show => show.genres.includes(genre))
        .sort((a, b) => Math.sign(a.rating.average - b.rating.average))
        .reverse()

// List of popular shows ordered by genre. Each item is a list of shows for that genre.
export const popularShows = (state, getters) =>
    getters.sortedGenres.map(genre => ({ genre, shows: getters.popularInGenre(genre) }))
