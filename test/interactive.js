console.everything = [];

console.log = (function () {
  var cached_function = console.log;

  return function () {
    var result = cached_function.apply(this, arguments);
    console.everything.push(arguments[0]);
    return result;
  };
})();

console.info = (function () {
  var cached_function = console.log;

  return function () {
    var result = cached_function.apply(this, arguments);
    console.everything.push(arguments[0]);
    return result;
  };
})();

function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

function testFunctionality(confirmMessage, succeded) {
  confirmed = confirm(confirmMessage);
  if (!confirmed) {
    zoom.reset();
    console.errored = true;
    console.everything.push("Failure in testing " + succeded + "!");
    throw new Error("Failure in testing " + succeded + "!");
  } else {
    console.info(succeded + " succeded");
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
