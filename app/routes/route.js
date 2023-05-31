const express = require('express');
const routes = express.Router();
const tokenController = require('../controller/JWTtoken');
const authContoller = require('../controller/auth');

routes.post('/auth/register', (req, res) => {
    try {
        authContoller.signUp(req, res);
    } catch (error) {
        console.log(err);
    }
});

routes.post('/auth/login', (req, res) => {
    try {        
        authContoller.signIn(req, res);
    } catch (error) {
        console.log(err);
    }
});

routes.get('/auth', (req, res) => {});

routes.put('/auth/:id', (req, res) => {});

routes.delete('/auth/:id', (req, res) => {});

routes.get('/order', (req, res) => {});

routes.post('/order', (req, res) => {});

routes.put('/order/:id', (req, res) => {});

routes.delete('/order:id', (req, res) => {});

module.exports = routes;