const express = require("express");
const path = require("path");
const multer = require("multer");
const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Middleware allows info to be passed before request is responded
app.use(express.static(path.join(__dirname, "dist")));

// Because Angular runs a one page app, we direct all incoming requests to that one page
// index.html in dist folder is the only page shown to the user
const root = path.join(__dirname, "dist/index.html");

app.get("*", function (req, res) {

  res.sendFile(root);

})

app.post("/uploadFile", upload.single('docFile'), (req, res, next) => {
  const file = req.file; // We get the file in req.file
  const keywords = req.body.keywords.split(","); // Comma delineated list
  const matchAll = req.body.matchAll; // are we censoring just instances of the word (false) or all words containing it (true)

  if (!file) { // in case we do not get a file we return
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }

  // we have the string of text from the file
  var fileText = file.buffer.toString("utf-8");

  // make array of words
  var fileTextArray = fileText.split(" ");

  // used to replace whole words when matchAll is true
  function replacer(match) {
    var replaceWord = "";
    
    for (let k = 0; k < match.length; k++) {
      replaceWord += "X";
    }
    return replaceWord;
  }

  for (let i = 0; i < keywords.length; i++) {
    const keyword = new RegExp(keywords[i].trim(), "gi");
    
    if (matchAll == "true") {
      for (let j = 0; j < fileTextArray.length; j++) {
        if (fileTextArray[j].match(keyword)) {
          fileTextArray[j] = replacer(fileTextArray[j]);
        }
      }
      fileText = fileTextArray.join(" ");
    } else {

      fileText = fileText.replace(keyword, replacer);
    }
  };

  res.send(JSON.stringify(fileText));
});

const port = process.env.PORT || 4600;

app.listen(port, function (req, res) {

  console.log(`Currently running on port ${port}`);

})
