const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

var pkg = require(path.join(process.cwd(), "package.json"));

const args = process.argv.splice(2);

execSync(
  "npm version --no-git-tag-version --allow-same-version --no-commit-hooks " +
    args[0]
);

fs.writeFileSync(
  path.join(process.cwd(), "index.js"),
  fs
    .readFileSync(path.join(process.cwd(), "index.js"))
    .toString()
    .replace(new RegExp(pkg.version, "g"), args[0])
);

execSync("npm run build:docs");
