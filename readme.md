# Tour of Heroes - Vue.js 2.0 edition

This repo contains an implementation of the Angular 2 'Tour of Heroes' tutorial app using Vue.js 2.0.
* https://angular.io/docs/ts/latest/tutorial/
* https://vuejs.org

My primary goal for this project was to compare (for my own benefit) Angular 2 and Vue 2 from an implementation standpoint.

A secondary goal was to see how closely I could align Vue 2 with React in terms of building components. Vue 2 introduced the ability to use a `render` function within components and the ability to use JSX. Given that I'm much more familiar with React, I wanted to see how far I could stretch Vue to incorporate React-like paradigms. 

## Highlights

* Vue 2 `render` function for all components
* JSX for all `render` functions
* Redux via `revue` for Redux > Vue bindings (https://github.com/revue/revue)
* Routing via `vue-router` (https://github.com/vuejs/vue-router)

## Installation/usage

* Clone/download repo
* `npm install`
* Due to an issue with `revue` and Vue 2.0 (https://github.com/revue/revue/issues/19), you'll also need to modify the following file:
  * `node_modules/revue/revue.common.js`
  * This line (should be line 114):
  ```
  _this.$set(_this.$data, realProp, deepProp(store.getState(), storeProp));
  ```
  should be replaced with:
  ```
  _this[realProp] = deepProp(store.getState(), storeProp);
  ``` 

* `gulp dev` will babel/webpack everything
* BYOWS (Bring Your Own Web Server). If you use IIS/IIS Express, the `web.config` contains a rewrite rule to ensure that all routes are handled properly.
