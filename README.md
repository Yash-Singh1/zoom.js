<h1 align="center">
  <code>zoom.js</code>
  <br />
  <a href="https://www.npmjs.com/package/@saiansh2525/zoom.js" align="center">
    <img src="https://img.shields.io/npm/v/@saiansh2525/zoom.js?style=flat-square">
  </a>
  <a href="https://github.com/prettier/prettier" align="center">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
</h1>

A cross-browser Javascript Library to zoom in and out

## Importing

### Using NPM

#### Locally

`zoom.js` is available on `npm`

To install it, run:

```sh
npm install @saiansh2525/zoom.js
```

#### Online

Reference the `unpkg` URL inside your HTML:

```html
<script src="https://unpkg.com/@saiansh2525/zoom.js/index.js"></script>
```

### Without NPM

#### Online

To import the `zoom.js` inside your application, include the following code in your HTML file:

```html
<script src="https://yash-singh1.github.io/zoom.js/index.js"></script>
```

To view the raw code go to => <https://yash-singh1.github.io/zoom.js/index.js>.

#### Locally

To use `zoom.js` locally, run:

```sh
curl -s -o- https://yash-singh1.github.io/zoom.js/index.js > zoom.js
```

Now you can import the library using:

```html
<script src="zoom.js"></script>
```

## Architecture

### Variables

`zoom.js` edits the following variables:

- `document.body.style.zoom`
- `document.body.style["-moz-transform-origin"]`
- `document.body.style["-moz-transform"]`

Here are the variables browser support:

- `document.body.style.zoom` is a variable used by `Chrome`, `Opera`, `Safari`, and more.
- `document.body.style["-moz-transform-origin"]` is used to set the origin of the transform before starting to scale.
- `document.body.style["-moz-transform"]` is the scale on `Firefox` and other `Mozilla` browsers.

### File Layout

The following is the current file layout of the codebase:

```sh
root/
|_____ jsdoc/
|      |_____ fonts/
|      |_____ scripts/
|      |_____ styles/
|      |_____ global.html
|      |_____ index.html
|      |_____ zoom.js.html
|_____ test/
|      |_____ .gitignore
|      |_____ auto.html
|      |_____ auto.js
|      |_____ docs-preview.js
|      |_____ interactive.html
|      |_____ interactive.js
|      |_____ test.js
|_____ .gitignore
|_____ generateJsdoc.py
|_____ index.js
|_____ LICENSE
|_____ package.json
|_____ README.md
```

The `index.js` file is the main source code. `generateJsdoc.py` generates documentations in the `jsdoc/` directory. The `test/` directory contains tests.

### Source

To view the repository, go to: [https://github.com/Yash-Singh1/zoom.js](https://github.com/Yash-Singh1/zoom.js)<br>
To view the source code of the `index.js`, go to: [https://yash-singh1.github.io/zoom.js/jsdoc/zoom.js.html](https://yash-singh1.github.io/zoom.js/jsdoc/zoom.js.html)

## Documentation

`zoom.js` allows you to control the zoom through the `zoom` object. Let's take a look at the `zoom` object:

### Strings

- `name`
  - The name is the name of this library: `zoom.js`
- `version`
  - The version key contains the current version of `zoom.js`
- `license`
  - The license key contains the license type: `MIT`

### Functions

The documentation for `zoom.js` is at: [https://yash-singh1.github.io/zoom.js/jsdoc/global.html](https://yash-singh1.github.io/zoom.js/jsdoc/zoom.js.html).
It was built using `jsdoc`.

## Testing

### Graphical Mode

**_Note: This assumes that you have `NodeJS` installed_**
To run tests for `zoom.js`:

- Run `git clone https://github.com/Yash-Singh1/zoom.js.git` to clone the repository
- Go to the root of the repositiory: `cd zoom.js/`
- Run the npm `test` script: `npm run test`
- Now you can go to: `localhost:1073/test/interactive.html` to run the tests interactively, and `localhost:1073/test/auto.html` to run the tests automatically
- To run the tests, open up the console and run `test()` and there will be a series of zooming and confirm messages in interactive mode, and
  everything will automatically run in auto mode. Set the start query parameter to true to immediately start testing

To run the tests without `NodeJS`, you can go to: [https://yash-singh1.github.io/zoom.js/test/interactive.html](https://yash-singh1.github.io/zoom.js/test/interactive.html)
for interactive and [https://yash-singh1.github.io/zoom.js/test/auto.html](https://yash-singh1.github.io/zoom.js/test/auto.html) for auto.

### Headless Mode

To run tests in headless mode for `zoom.js`:

- Run `git clone https://github.com/Yash-Singh1/zoom.js.git` to clone the repository
- Go to the root of the repositiory: `cd zoom.js/`
- Install `firefox-geckodriver`, on Ubuntu that is: `sudo apt install firefox-geckodriver`
- Install `chromedriver`, here is a [gist](https://gist.github.com/ziadoz/3e8ab7e944d02fe872c3454d17af31a5)
- Make sure you have `firefox` and `google-chrome` installed up to date with the drivers
- Run `npm run headless` to run the headless scripts
- The logs will appear

## Building Docs

To build the documentation, you must have `python`, `jsdoc`, and `prettier` installed.
The `build:docs` script from `npm` will build the documentation using `jsdoc`:

```sh
npm run build:docs
```

## Testing Docs

To test the documentation:

- Run `git clone https://github.com/Yash-Singh1/zoom.js.git` to clone the source
- Go to the root of the repository: `cd zoom.js/`
- Run the npm `docs` script: `npm run docs`
- Now you can go to: `localhost:1079/index.html` to preview the documentation

Docs are available on: [https://yash-singh1.github.io/zoom.js/jsdoc/](https://yash-singh1.github.io/zoom.js/jsdoc/) for the current live Github Pages.

## Contributing

Contributions are welcome! You can do anything from adding a new feature to formatting the codebase.
Any proper updates are accepted. When creating an issue, make sure that you ran the tests and describe how it is different in other browsers.

**_Not rendering properly? View on [Github](https://github.com/Yash-Singh1/zoom.js#readme)_**
