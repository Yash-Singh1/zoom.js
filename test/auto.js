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

function testFunctionality(confirmInt, succeded) {
  confirmed = zoom.get() === confirmInt;
  if (!confirmed) {
    zoom.reset();
    throw new Error("Failure in testing " + succeded + "!");
  } else {
    console.info(succeded + " succeded");
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
  console.log("SUCCESS!!!");
  zoom.reset();
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
