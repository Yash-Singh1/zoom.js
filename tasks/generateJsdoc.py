import subprocess
import os
import shutil
import time
import bs4

file = open("index.js", "r")
linies = []

for line in file.read().splitlines():
    if line[0:5] == "zoom." and "function " in line and "(" in line and ")" in line:
        linies.append("function " + str(line.split(" ")
                                        [0][5:]) + " ".join(line.split(" ")[3:]))
    else:
        linies.append(line)
file.close()

liniescombine = "\n".join(linies) + "\n"

if os.path.exists("zoom.js"):
    os.remove("zoom.js")

if os.path.exists("jsdoc"):
    shutil.rmtree("jsdoc")

file = open("zoom.js", "w")
file.write("\n".join(linies))
file.close()

if "out" in os.listdir():
    shutil.rmtree("out")

bashCommand = "jsdoc zoom.js"
process = subprocess.Popen(bashCommand.split(), stdout=subprocess.PIPE)

while "out" not in os.listdir():
    time.sleep(1)

shutil.move("out/", "jsdoc/")

file = open("index.js", "r")
newSource = file.read()
file.close()
file = open("jsdoc/zoom.js.html", "r")
soup = bs4.BeautifulSoup(file.read(), features="lxml")
file.close()

soup.select("code")[0].string = newSource
newNavString = ""
soupNav = soup.select("nav")[0].contents
b = 1
for i in soupNav:
    if b == 3:
        newNavString += '<h2><a href="zoom.js.html">Source</a></h2>'
    newNavString += str(i)
    b += 1
soup.select("nav")[0].string = ""

file = open("jsdoc/zoom.js.html", "w")
file.write(str(soup))
file.close()

file = open("jsdoc/zoom.js.html", "r")
currentSource = file.read()
file.close()

sourceLines = []

for line in currentSource.splitlines():
    addLine = ""
    if "<nav></nav>" in line:
        addLine = line.replace("<nav></nav>", "<nav>" +
                               newNavString + "</nav>")
    else:
        addLine = line
    sourceLines.append(addLine)

nextSource = "\n".join(sourceLines)

file = open("jsdoc/zoom.js.html", "w")
file.write(nextSource)
file.close()

file = open("jsdoc/index.html", "r")
currentSource = file.read()
file.close()

currentSource = bs4.BeautifulSoup(currentSource, features="lxml")
currentSource.select("nav")[0].string = ""
currentSource = str(currentSource)
sourceLines = []

for line in currentSource.splitlines():
    addLine = ""
    if "<nav></nav>" in line:
        addLine = line.replace("<nav></nav>", "<nav>" +
                               newNavString + "</nav>")
    else:
        addLine = line
    sourceLines.append(addLine)

nextSource = "\n".join(sourceLines)


file = open("jsdoc/index.html", "w")
file.write(nextSource)
file.close()

file = open("jsdoc/global.html", "r")
currentSource = file.read()
file.close()

currentSource = bs4.BeautifulSoup(currentSource, features="lxml")
currentSource.select("nav")[0].string = ""
currentSource = str(currentSource)
sourceLines = []

for line in currentSource.splitlines():
    addLine = ""
    if "<nav></nav>" in line:
        addLine = line.replace("<nav></nav>", "<nav>" +
                               newNavString + "</nav>")
    else:
        addLine = line
    sourceLines.append(addLine)

nextSource = "\n".join(sourceLines)


file = open("jsdoc/global.html", "w")
file.write(nextSource)
file.close()

if os.path.exists("zoom.js"):
    os.remove("zoom.js")
