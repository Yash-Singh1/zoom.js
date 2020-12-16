console.everything = [];

console.log = (function () {
  var cached_function = console.log;

  return function () {
    console.everything.push(arguments[0]);
    var result = cached_function.apply(this, arguments);
    return result;
  };
})();

console.info = (function () {
  var cached_function = console.log;

  return function () {
    console.everything.push(arguments[0]);
    var result = cached_function.apply(this, arguments);
    return result;
  };
})();

function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

function testFunctionality(confirmMessage, succeded) {
  confirmed = confirm(confirmMessage);
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
  isOne = typeof value === "string";
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

async function test() {
  zoom.zoom(10);
  await sleep();
  testFunctionality("Did you see the page zoom in?", "zoom.zoom");
  zoom.add(5);
  await sleep();
  testFunctionality("Did you see the page zoom in?", "zoom.add");
  zoom.minus(10);
  await sleep();
  testFunctionality("Did you see the page zoom out?", "zoom.minus");
  zoom.invert();
  await sleep();
  testFunctionality("Did the page zoom out?", "zoom.invert");
  zoom.set(5);
  await sleep();
  testFunctionality("Did you see the page zoom in?", "zoom.set");
  zoom.inverseZoom(2);
  await sleep();
  testFunctionality("Did you see the page zoom out?", "zoom.inverseZoom");
  zoom.reset();
  await sleep();
  testFunctionality("Did you see the page zoom out?", "zoom.reset");
  isString(zoom.version);
  isString(zoom.name);
  isString(zoom.license);
  console.log("SUCCESS!!!");
  zoom.reset();
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
