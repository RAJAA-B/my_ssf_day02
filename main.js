//Load any required libraries/modules
const express = require('express');

//Declare tunables
const PORT = 3000;

//Create an express application
const app = express();

//Routes
app.use(
    express.static(__dirname + '/public')
);

//Routing rules
// serve index.html
app.get('/time', (req, resp) => {
    resp.status(200);
   //Set the Content-Type header
    resp.type('text/html');    
    //Send the data
    resp.send(`<h1>The current time is ${new Date()}</h1>`);
});

app.get('/', (req, resp) => {
    resp.status(200);
   //Set the Content-Type header
    resp.type('text/html');    
    //Send the data
    resp.send(path.join(__dirname+`/public/index.html`));
});

//Start the server, listen on port 3000
app.listen(PORT, () => {
    console.info(`Application started on port ${PORT} at ${new Date()}`);
});