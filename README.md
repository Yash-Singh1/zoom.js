# `zoom.js`
A cross-browser Javascript Library to zoom in and out
## Importing
#### Online
To import the `zoom.js` inside your application, include the following code in your HTML file:
```html
<script src="https://yash-singh1.github.io/zoom.js/index.js/"></script>
```
To view the raw code go to => https://yash-singh1.github.io/zoom.js/index.js/.
#### Locally
To use `zoom.js` locally, run:
```bash
curl -s -o- https://yash-singh1.github.io/zoom.js/index.js/ > zoom.js
```
Now you can import the library using:
```html
<script src="zoom.js"></script>
```
## Architecture
#### Variables
`zoom.js` edits the following variables:
* `document.body.style.zoom`
* `document.body.style["-moz-transform-origin"]`
* `document.body.style["-moz-transform"]`

Here are the variables browser support:
* `document.body.style.zoom` is a variable used by `Chrome`, `Opera`, `Safari`, and more.
* `document.body.style["-moz-transform-origin"]` is used to set the origin of the transform before starting to scale.
* `document.body.style["-moz-transform"]` is the scale on `Firefox` and other `Mozilla` browsers.
#### File Layout
The following is the current file layout of the codebase:
```
root/
|_____ .gitignore
|_____ index.js
|_____ jsdoc/
       |_____ fonts/
       |_____ global.html
       |_____ index.html
       |_____ scripts/
       |_____ styles/
       |_____ zoom.js.html 
|_____ LICENSE
|_____ README.md
|_____ test/
       |_____ .gitignore
       |_____ index.html
       |_____ package-lock.json
       |_____ package.json
       |_____ test.js
       |_____ testing.js
```
#### Source
To view the repository, go to: [https://github.com/Yash-Singh1/zoom.js](https://github.com/Yash-Singh1/zoom.js)
To view the source code of the `index.js`, go to: [https://yash-singh1.github.io/zoom.js/zoom.js.html](https://yash-singh1.github.io/zoom.js/zoom.js.html)
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
The documentation for `zoom.js` is at: [https://yash-singh1.github.io/zoom.js/zoom.js.html](https://yash-singh1.github.io/zoom.js/zoom.js.html). It was built using `jsdoc`.
## Testing
***Note: This assumes that you have `NodeJS` installed***
To run tests for `zoom.js`:
- Run `git clone https://github.com/Yash-Singh1/zoom.js.git`
- Go to the `test/` directory at the root: `cd zoom.js/test/`
- Run the npm `test` script: `npm run test`
- Now you can go to: `localhost:1073/test/index.html` to run the tests
- To run the tests, open up the console and run `test()` and there will be a series of zooming and confirm messages
## Building Docs
To build the documentation, you must have `python` installed on your computer. Either of the following will build the JsDocs from the root directory of the repository:
```bash
npm run build
```
or
```bash
python generateJsdoc.py
```
Optional: To format the codebase, run `prettier ./` assuming that you have `prettier` installed.
## Contributing
Contributions are welcome!
