require("./test.js");

var webdriver = require("selenium-webdriver");

var firefox = require("selenium-webdriver/firefox");
var chrome = require("selenium-webdriver/chrome");

var options = new firefox.Options();
options.addArguments("-headless");

var options2 = new chrome.Options();
options2.addArguments("-headless");

var driver = new webdriver.Builder()
  .forBrowser("firefox")
  .setFirefoxOptions(options)
  .build();

driver.get("http://localhost:1073/test/auto.html?start=true");

driver.sleep(2000).then(async function () {
  driver.executeScript(`return console.everything`).then((returned) => {
    console.log("Firefox:");
    console.log();
    returned.forEach((element) => {
      console.log(element);
    });
    var driver2 = new webdriver.Builder()
      .forBrowser("chrome")
      .setChromeOptions(options2)
      .build();

    driver2.get("http://localhost:1073/test/auto.html?start=true");

    driver2.sleep(2000).then(async function () {
      driver2.executeScript(`return console.everything`).then((returned) => {
        console.log();
        console.log("Chrome:");
        console.log();
        returned.forEach((element) => {
          console.log(element);
        });
        process.exit(0);
      });
    });
  });
});
