/*
ensure express is installed, check the package manager and node 
modules to see if it is installed, then require express like below
instatiate it 
*/
const express = require("express");
const app = express();

// html content to send to user
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>This is my new express App</title>
</head>
<body>
<h1>Hello world!</h1>  
</body>
</html>
`

// create a get request
app.get("/", (req, res) => {
// specify the content header to be html
res.setHeader('Content-Type', 'text/html');
// send the html content
res.send(htmlContent);
})

// instantiate the server and make it listen on port 3000
// you can access it in your browser at http://localhost:3000
// run node index.js in your command prompt to start server
app.listen(3000, () => {
console.log("Server is running at http://localhost:3000");
});
