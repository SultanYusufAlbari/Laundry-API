require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./app/routes/route');
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3500;  
const appName = process.env.app || "Aplikasi";
const environment = process.env.ENV || 'Development';

app.use(express.json());

app.use(express.urlencoded({
    extended: true,
}));

app.use('/api', routes);

app.listen(port, function() {
    console.log(appName + ' running on environment ' + environment + ' | ' + host + 'listening on port ' + port);
})