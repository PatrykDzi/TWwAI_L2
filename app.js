const express = require('express');
const config = require('./config').config; // dodając tę linię, trzeba pamiętać o stworzeniu pliku config.js
const service = require('./service');
const app = express();

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));


app.get('/', (request, response) => {
    response.render(__dirname + '/index.html', {subject: 'Technologie webowe w aplikacjach Internetu'})
});

app.listen(config.port, function () {
    console.info(`Server is running at port 3000`);
});