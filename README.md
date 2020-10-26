# TVFLIX

Try the TVflix web app [here](https://tvflix.pbastowski.vercel.app)

## Running TVflix locally

1. Clone this repository to your local machine and then go to the folder where it was cloned to

2. `npm install`

3. `npm run dev`

Nuxt will start up a dev server on http://localhost:3000 where you can see the app running in your browser. 

## Architecture choices

### Frameworks and Libraries

This app uses the following front-end frameworks and libraries

- Nuxt - the Vue full-stack framework (not using any SSR in this app)
- Vue - this app is built with Vue, vue-router and vuex
- Vuetify - the best Vue UI component framework
- fetch API

### Why the above?

#### Vue

As at 2020, Vue is one of the three big frameworks out there, those being React, Vue and Angular. I am not impressed with Angular, because it is overally complex. I can work with React and be satisfied with the results. Working with Vue actually makes me happy.

Beyond that, Vue is probably the easiest of all the above to learn and, if you just happen to be migrating web apps from AngularJs, then it's the easiest to migrate to. 

Some say that Angular seems a more natural choice, coming from AngularJs, but, and you'll have to trust me on this, Angular is an almost completely different framework form Angularjs. It is not the natural evolution - only in the name.

Personaly, I have been developing with Vue since version 2.0 was released in August 2016.

More info at https://vuejs.org/

#### Nuxt

Nuxt is a full-stack Vue framework. It provides an almost zero config development environment for building Vue apps and establishes an architecture that one can immediately follow, without having to invent the basics of folder structures, routing or state management.

I have used it at large organisations, developing huge front-end apps (150K lines of Vue code) and at small companies.

   For more information see here https://nuxtjs.org/.

#### Vuetify

Here is a quote from the Vuetify web site

> Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips.

Well, you will still need to be able to design the actual web app layouts, but at least most of the design language is taken care of for you. It is based on Material Design version 2 and sticks to it pretty strictly. 

I have used this component framework in many Vue apps since it was pre version 1. It has saved me countless hours of development work.

#### fetch API? Seriously, why not axios?

Yes, unfortunately axios has trouble with CORS and specifically with the tvmaze public API. There are documented issues about CORS issues in AXIOS on its github repo. 

The way to get around this problem is to use fetch() with a very specific header, please see `src/store/actions.js` for the details.

> By the way, ` jQuery.get() ` also works out of the box.

### Application design

The app is meant to loosely resemble the Netflix app, showing a list of popular shows, organised by genre (category). The list is vertically scrollable and each category is horizontally scrollable. It works very well on a mobile device, such as an iPhone.

The search feature returns a list of closest matches, by name, to the text that the user typed. This list is also organised by genre, so, the same components as the popular shows list.

The Home button always returns to the popular shows list. The Back button just goes back to the previous item in the browser's history. The hamburger menu has the option to toggle between dark theme and light theme.

Clicking a show image will take the user to a details page that gives the user a bit more info about the show, such as the cast members, all the genres it's in, when it first premiered, how many seasons exist and the total number of episodes. There is also a link to IMDB.

There could be far more work done on this app, but as a demonstration of how to do this with Nuxt, Vue, Vuex and Vuetify it is sufficient.

### The technical architecture elements

- Landing pages
    - these are Nuxt file-based vue-router routes, see ` src/pages `
    - we have these routes (features) available currently
        - Popular Shows
        - Find shows by text search
        - Display show details
    - new features can be added by creating landing pages in the ` src/pages ` folder and integrating them with the rest of the system through reactive state, actions and getters in the file-based vuex store.
- Reusable vue components
    - auto-registered by Nuxt when used, see ` src/components `
    - Vuetify UI components, grid system, colors, text, display and other helper CSS classes are used as much as possible to maintain a common approach to building the UI.
- File based store
    - Nuxt allows us to define Vuex store objects through files and creates a valid Vuex store based on them, see ` src/store `
- API access through vuex actions
    - All APIs are accessed by dispatching store actions. No API calls are made directly in any vue component or landing page. See ` src/store/actions.js `.
- Reactive and updatable state
    - Vue state is reactive in that any updates to it cause effects in all components and registered watchers that refer to it. For example, clearing the search text and clicking away from it triggers declarative changes to the search box width and error state. 
- State data updates done through the use of vuex actions
    - No mutations are required, but are still available if necessary. See ` strict = false ` in ` src/store/index.js `. If we need to wait we can use ` async/await `.
    - Dispatching getPopularShows triggers an API call that receives data, which is used to update state.shows. This triggers a reactive redraw in all components that refer to it.

### Show Data

Show data and lists are fetched by dispatching store actions and then the data is stored in state.shows, after some nominalization (transformations).

- getPopularShows fetches currently popular shows from ` api.tvmaze.com/shows `
- getShowById fetches show, episodes, cast and crew data for one show from ` api.tvmaze.com/shows/${id} ` 
- getShowBySearchtext fetches a list of shows given a search text from ` api.tvmaze.com/search/shows?q=${searchText} `
 
### Data nominalization

The data returned by the API is not always in a handy state for using in the app. So, we process it to make it easier to use and to prevent having to perform transforms in several different parts of the app.

See function ` nominalizeData ` ` src/store/actions.js `

