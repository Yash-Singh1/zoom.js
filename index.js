/**
 * @file The main source code for zoom.js
 * @version 1.1.1
 * @author Yash Singh
 * @license MIT
 */

zoom = {};

/**
 * The name of the program => zoom.js
 * @license MIT
 * @type {string}
 * @const
 */
zoom.name = "zoom.js";

/**
 * The current version
 * @license MIT
 * @type {string}
 * @constant
 */
zoom.version = "1.1.1";

/**
 * The license used => MIT
 * @license MIT
 * @type {string}
 * @constant
 */
zoom.license = "MIT";

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  document.body.style["-moz-transform"] = "scale(1)";
  document.body.style["-moz-transform-origin"] = "0 0";
  document.body.style.zoom = 1;
} else {
  if (typeof window.onload !== "function") {
    window.onload = function () {};
  }
  window.onload = (function () {
    var cached_function = window.onload;

    return function () {
      var result = cached_function.apply(this, arguments);
      document.body.style["-moz-transform"] = "scale(1)";
      document.body.style["-moz-transform-origin"] = "0 0";
      document.body.style.zoom = 1;
      if (typeof webFrame !== "undefined") {
        webFrame.setZoomFactor(1);
      }
      return result;
    };
  })();
}

/**
 * A function to zoom in and out cross-browser
 * @param {number} int The scale at which to zoom in or out. The smaller the more it zooms out.
 * @returns {number} The current zoom value
 * @license MIT
 */
zoom.zoom = function (int) {
  return this.specify(function (givenInteger) {
    return givenInteger * int;
  }, int);
};

/**
 * Get the current zoom of the page
 * @param {boolean} [bool] console.logs the current zoom of the page
 * @returns {number} The current zoom value
 * @license MIT
 */
zoom.get = function (bool) {
  let currentZoom;
  if (typeof webFrame !== "undefined") {
    currentZoom = webFrame.getZoomFactor();
  } else {
    currentZoom = parseFloat(document.body.style.zoom);
  }
  if (bool == true) {
    console.log(currentZoom);
  }
  return currentZoom;
};

/**
 * Specify a function given data and the zoom value to set the zoom
 * @param {function} specifiedFunction A function given the current zoom as the first argument and the data parameter as the second argument. The returned value will be used for the zoom
 * @param {any} [data] Will be passed into the specifiedFunction as the second argument
 * @returns {number} The current zoom value
 * @license MIT
 */
zoom.specify = function (specifiedFunction, data) {
  if (typeof webFrame !== "undefined") {
    webFrame.setZoomFactor(specifiedFunction(webFrame.getZoomFactor(), data));
  } else {
    document.body.style["-moz-transform"] =
      "scale(" +
      specifiedFunction(
        parseFloat(
          document.body.style["-moz-transform"].substring(
            6,
            document.body.style["-moz-transform"].length - 1
          )
        ),
        data
      ) +
      ")";
  }
  document.body.style.zoom = specifiedFunction(zoom.get(), data);
  return zoom.get();
};

/**
 * Additive into the zoom
 * @param {number} int The amount in which to zoom in and out.
 * @returns {number} The current zoom value
 * @license MIT
 */
zoom.add = function (int) {
  return this.specify(function (givenInteger) {
    return givenInteger + int;
  }, int);
};

/**
 * Allows you to set the zoom value to a number
 * @param {number} int The integer to set the zoom to
 * @returns {number} The current zoom value
 * @license MIT
 */
zoom.set = function (int) {
  return this.specify(function (givenInteger, data) {
    return data;
  }, int);
};

/**
 * Opposite of zoom.add, remove from the zoom value
 * @param {number} int The amount in which to zoom in and out. Opposite of zoom.add
 * @returns {number} The current zoom value
 * @license MIT
 */
zoom.minus = function (int) {
  return this.add(-1 * int);
};

/**
 * Invert the current zoom value
 * @returns {number} The current zoom value
 * @license MIT
 */
zoom.invert = function () {
  return this.specify(function (givenInteger) {
    return 1 / givenInteger;
  });
};

/**
 * Opposite of zoom.zppm, divide the current zoom value
 * @param {number} int The amount in which to zoom in and out. Opposite of zoom.zoom
 * @returns {number} The current zoom value
 * @license MIT
 */
zoom.inverseZoom = function (int) {
  return this.specify(function (givenInteger) {
    return givenInteger / int;
  }, int);
};

/**
 * Reset the zoom value to original
 * @returns {number} The current zoom value
 * @license MIT
 */
zoom.reset = function () {
  document.body.style["-moz-transform"] = "scale(1)";
  document.body.style["-moz-transform-origin"] = "0 0";
  document.body.style.zoom = 1;
  if (typeof webFrame !== "undefined") {
    webFrame.setZoomFactor(1);
  }
  return 1;
};
