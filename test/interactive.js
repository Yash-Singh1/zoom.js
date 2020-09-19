function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

function testFunctionality(confirmMessage, succeded) {
  confirmed = confirm(confirmMessage);
  if (!confirmed) {
    zoom.reset();
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
}
