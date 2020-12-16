console.everything = [];

console.log = (function () {
  var cached_function = console.log;

  return function () {
    console.everything.push(...arguments);
    var result = cached_function.apply(this, arguments);
    return result;
  };
})();

console.info = (function () {
  var cached_function = console.info;

  return function () {
    console.everything.push(...arguments);
    var result = cached_function.apply(this, arguments);
    return result;
  };
})();

function testFunctionality(confirmInt, succeded) {
  confirmed = zoom.get() === confirmInt;
  if (!confirmed) {
    let failMsg = `Failure in testing ${succeded}!`;
    zoom.reset();
    console.errored = true;
    console.everything.push(failMsg);
    throw new Error(failMsg);
  } else {
    console.info(`${succeded} succeded`);
  }
}

function isString(value) {
  isOne = typeof zoom[value] === "string";
  if (!isOne) {
    let failMsg = `zoom.${value} doesn't have expected value string, but ${typeof value}`;
    zoom.reset();
    console.errored = true;
    console.everything.push(failMsg);
    throw new Error(failMsg);
  } else {
    console.info(`zoom.${value} string test succeded`);
  }
}

function test() {
  zoom.zoom(10);
  testFunctionality(10, "zoom.zoom");
  zoom.add(5);
  testFunctionality(15, "zoom.add");
  zoom.minus(10);
  testFunctionality(5, "zoom.minus");
  zoom.invert();
  testFunctionality(0.2, "zoom.invert");
  zoom.set(5);
  testFunctionality(5, "zoom.set");
  zoom.inverseZoom(2);
  testFunctionality(2.5, "zoom.inverseZoom");
  zoom.reset();
  testFunctionality(1, "zoom.reset");
  isString("version");
  isString("name");
  isString("license");
  console.log("SUCCESS!!!");
  console.errored = false;
  return true;
}

window.onload = (function () {
  var cached_function = window.onload;

  return function () {
    var result = cached_function.apply(this, arguments);
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("start") === "true") {
      test();
    }
    return result;
  };
})();
