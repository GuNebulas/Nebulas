# Description
> Personal blog for front-end ideas

# Dependence

## Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## [TypeScript](https://www.typescriptlang.org/)

> TypeScript is JavaScript with syntax for types

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

## [Vue3](https://vuejs.org/)

> The Progressive JavaScript Framework

An approachable, performant and versatile framework for building web user interfaces.

## [Pinia](https://pinia.vuejs.org/)

> The Vue Store that you will enjoy using

Pinia is a store library for Vue, it allows you to share a state across components/pages.

## [Vue Router](https://router.vuejs.org/)

> The official router for Vue.js.

Vue Router is the official router for [Vue.js](https://vuejs.org/). It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. Features include:

- Nested routes mapping
- Dynamic Routing
- Modular, component-based router configuration
- Route params, query, wildcards
- View transition effects powered by Vue.js' transition system
- Fine-grained navigation control
- Links with automatic active CSS classes
- HTML5 history mode or hash mode
- Customizable Scroll Behavior
- Proper encoding for URLs

## [GSAP](https://greensock.com/docs/v3/GSAP)

> The standard for modern web animation

A robust JavaScript toolset that turns developers into animation superheroes. We obsess about performance, compatibility, and support so that you don't have to.

## [Axios](https://axios-http.com/docs/intro)

> Promise based HTTP client for the browser and node.js

Axios is a _[promise-based](https://javascript.info/promise-basics)_ HTTP Client for [`node.js`](https://nodejs.org/) and the browser. It is _[isomorphic](https://www.lullabot.com/articles/what-is-an-isomorphic-application)_ (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js `http` module, while on the client (browser) it uses XMLHttpRequests.

# DevDependence

## [Vite](https://vitejs.dev/)

> Next Generation Frontend Tooling

Vite (French word for "quick", pronounced `/vit/`, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

- A dev server that provides [rich feature enhancements](https://vitejs.dev/guide/features.html) over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), for example extremely fast [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement).
- A build command that bundles your code with [Rollup](https://rollupjs.org/), pre-configured to output highly optimized static assets for production.

Vite is opinionated and comes with sensible defaults out of the box, but is also highly extensible via its [Plugin API](https://vitejs.dev/guide/api-plugin.html) and [JavaScript API](https://vitejs.dev/guide/api-javascript.html) with full typing support.

## [ESLint](https://eslint.org/)

> Find and fix problems in your JavaScript code

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to JSLint and JSHint with a few exceptions:

- ESLint uses [Espree](https://github.com/eslint/espree) for JavaScript parsing.
- ESLint uses an AST to evaluate patterns in code.
- ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

## [Prettier](https://prettier.io/)

- An opinionated code formatter
- Supports many languages
- Integrates with most editors
- Has few options

Prettier is an opinionated code formatter with support for:

- JavaScript (including experimental features)
- [JSX](https://facebook.github.io/jsx/)
- [Angular](https://angular.io/)
- [Vue](https://vuejs.org/)
- [Flow](https://flow.org/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS, [Less](http://lesscss.org/), and [SCSS](https://sass-lang.com/)
- [HTML](https://en.wikipedia.org/wiki/HTML)
- [Ember/Handlebars](https://handlebarsjs.com/)
- [JSON](https://json.org/)
- [GraphQL](https://graphql.org/)
- [Markdown](https://commonmark.org/), including [GFM](https://github.github.com/gfm/) and [MDX](https://mdxjs.com/)
- [YAML](https://yaml.org/)

## [![Stylelint](https://stylelint.io/img/light.svg)](https://stylelint.io/)

> A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

You can lint:

- CSS files by using our standard config
- everything else by using extensions written by the community

### [Linting CSS files](https://stylelint.io/user-guide/get-started#linting-css-files)

1. Use [npm](https://docs.npmjs.com/about-npm/) to install Stylelint and its [standard configuration](https://www.npmjs.com/package/stylelint-config-standard):

```shell
npm install --save-dev stylelint stylelint-config-standard
```

2. Create a `.stylelintrc.json` configuration file in the root of your project with the following content:

```json
{
  "extends": "stylelint-config-standard"
}
```

3. Run Stylelint on all the CSS files in your project:

```shell
npx stylelint "**/*.css"
```

## [Vue I18n](https://vue-i18n.intlify.dev/)

> Internationalization plugin for Vue.js

Vue I18n is internationalization plugin of Vue.js. It easily integrates some localization features to your Vue.js Application.

## [Tailwindcss](https://tailwindcss.com/)

> Rapidly build modern websites without ever leaving your HTML.

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

It's fast, flexible, and reliable — with zero-runtime.

# Features

- [ ] TBD
