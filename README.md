# `zoom.js`

A cross-browser Javascript Library to zoom in and out

## Importing

#### Online

To import the `zoom.js` inside your application, include the following code in your HTML file:

```html
<script src="https://yash-singh1.github.io/zoom.js/index.js"></script>
```

To view the raw code go to => https://yash-singh1.github.io/zoom.js/index.js.

#### Locally

To use `zoom.js` locally, run:

```bash
curl -s -o- https://yash-singh1.github.io/zoom.js/index.js > zoom.js
```

Now you can import the library using:

```html
<script src="zoom.js"></script>
```

## Architecture

#### Variables

`zoom.js` edits the following variables:

- `document.body.style.zoom`
- `document.body.style["-moz-transform-origin"]`
- `document.body.style["-moz-transform"]`

Here are the variables browser support:

- `document.body.style.zoom` is a variable used by `Chrome`, `Opera`, `Safari`, and more.
- `document.body.style["-moz-transform-origin"]` is used to set the origin of the transform before starting to scale.
- `document.body.style["-moz-transform"]` is the scale on `Firefox` and other `Mozilla` browsers.

#### File Layout

The following is the current file layout of the codebase:

```
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

#### Source

To view the repository, go to: [https://github.com/Yash-Singh1/zoom.js](https://github.com/Yash-Singh1/zoom.js)<br>
To view the source code of the `index.js`, go to: [https://yash-singh1.github.io/zoom.js/jsdoc/zoom.js.html](https://yash-singh1.github.io/zoom.js/jsdoc/zoom.js.html)

## Documentation

`zoom.js` allows you to control the zoom through the `zoom` object. Let's take a look at the `zoom` object:

#### Strings

- `name`
  - The name is the name of this library: `zoom.js`
- `version`
  - The version key contains the current version of `zoom.js`
- `license`
  - The license key contains the license type: `MIT`

#### Functions

The documentation for `zoom.js` is at: [https://yash-singh1.github.io/zoom.js/jsdoc/global.html](https://yash-singh1.github.io/zoom.js/jsdoc/zoom.js.html). It was built using `jsdoc`.

## Testing

**_Note: This assumes that you have `NodeJS` installed_**
To run tests for `zoom.js`:

- Run `git clone https://github.com/Yash-Singh1/zoom.js.git`
- Go to the root of the repositiory: `cd zoom.js/`
- Run the npm `test` script: `npm run test`
- Now you can go to: `localhost:1073/test/interactive.html` to run the tests interactively, and `localhost:1073/test/auto.html` to run the tests automatically
- To run the tests, open up the console and run `test()` and there will be a series of zooming and confirm messages in interactive mode, and everything will automatically run in auto mode

To run the tests without `NodeJS`, you can go to: [https://yash-singh1.github.io/zoom.js/test/interactive.html](https://yash-singh1.github.io/zoom.js/test/interactive.html) for interactive and [https://yash-singh1.github.io/zoom.js/test/auto.html](https://yash-singh1.github.io/zoom.js/test/auto.html) for auto.

## Building Docs

To build the documentation, you must have `python` installed on your computer. Either of the following will build the JsDocs from the root directory of the repository:

```bash
python generateJsdoc.py
```

Optional: To format the codebase, run `prettier --write ./` assuming that you have `prettier` installed.

## Testing Docs

To test the documentation:

- Run `git clone https://github.com/Yash-Singh1/zoom.js.git` to clone the source
- Go to the root of the repository: `cd zoom.js/`
- Run the npm `docs` script: `npm run docs`
- Now you can go to: `localhost:1079/index.html` to preview the documentation

Docs are available on: [https://yash-singh1.github.io/zoom.js/jsdoc/](https://yash-singh1.github.io/zoom.js/jsdoc/) for the current live Github Pages.

## Contributing

Contributions are welcome! You can do anything from adding a new feature to formatting the codebase. Any proper updates are accepted. When creating an issue, make sure that you ran the tests and describe how it is different in other browsers


**_Not rendering properly? View on [Github](https://github.com/Yash-Singh1/zoom.js#readme)_**
