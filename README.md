# TVFLIX

Try trhe TVflix web app [here](https://tvflix.pbastowski.vercel.app)

## Running locally

1. Clone this repository to your local machine and then go to the folder where it was cloned to

2. `npm install`

3. `npm run dev`

## Architecture choices

### Frameworks and Libraries

This app uses the following front-end frameworks and libraries

- Nuxt - the Vue full-stack framework (not using any SSR in this app)
- Vue - this app is built with Vue
- Vuetify - the best Vue UI component framework

### Why the above?

#### Vue

As at 2020, Vue is one of the three big frameworks out there, those being React, Vue and Angular. I am not impressed with Angular, because it is overally complex. I can work with React and be satisfied with the results. 
> However, working with Vue actually makes me happy.

Beyond that, Vue is probably the easiest of all the above to learn and, if you just happen to be migrating web apps from AngularJs, then it's the easiest to migrate to. 

Some say that Angular seems a more natural choice, coming from AngularJs, but, and you'll have to trust me on this, Angular is an almost completely different framework form Angularjs. It is not the natural evolution - only in the name.

Personaly, I have been developing with Vue since version 2.0 was released in August 2016.

More info at https://vuejs.org/

#### Nuxt

Nuxt provides the perfect, almost zero config, development environment for Vue apps. It provides an architecture that one can follow, when building Vue apps, without having to invent too much. At the same time it makes it easier to develop all, but the simplest, Vue web apps.

I have used it at large organisations, developing huge front-end apps (150K lines of Vue code) and at small companies.

   For more information see here https://nuxtjs.org/.

#### Vuetify

Here is a quote from the Vuetify web site

> Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips.

Well, you'll still need to be able to design the actual web app layouts, but at least most of the design language is taken care of for you. I have used this component framework in many Vue apps, since it was pre version 1. It has saved me countless hours of development work.

### The design

The app is meant to loosely resemble the Netflix app, showing a list of popular shows, organised by genre (category).

There is a search feature that returns a list of closest matches, by name, to the text that the user typed. This list is also organised by genre.

Clicking a show image will take the user to a details page that gives the user a bit more info about the show, such as the cast members, all the genres it's in, when it first premiered, how many seasons exist and the total number of episodes. There is also a link to IMDB.

There could be far more work done on this, but as a demonstration of how to do this it is sufficient.

### The architecture elements

- the 
- file based vue-router
- file based vuex store
- split between landing pages and components

... WIP
