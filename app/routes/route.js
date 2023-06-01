const express = require('express');
const routes = express.Router();
const tokenController = require('../controller/JWTtoken');
const authContoller = require('../controller/auth');
const userController = require('../controller/user');
const orderController = require('../controller/order');


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

routes.get('/auth', (req, res) => {
    try { 
        tokenController.verifyToken(req, res, userController.findAll);      
        //userController.findAll(req, res);
    } catch (error) {
        console.log(err);
    }
});

routes.put('/auth/:id', (req, res) => {
    try {       
        tokenController.verifyToken(req, res, userController.updateUser);  
        //userController.updateUser(req, res);
    } catch (error) {
        console.log(err);
    }
});

routes.delete('/auth/:id', (req, res) => {
    try {        
        tokenController.verifyToken(req, res, userController.deleteUser); 
        //userController.deleteUser(req, res);
    } catch (error) {
        console.log(err);
    }
});

routes.get('/order', (req, res) => {
    try {        
        tokenController.verifyToken(req, res, orderController.findAll); 
    } catch (error) {
        console.log(err);
    }
});

routes.post('/order', (req, res) => {
    try {        
        tokenController.verifyToken(req, res, orderController.createOrder); 
    } catch (error) {
        console.log(err);
    }
});

routes.put('/order/:id', (req, res) => {
    try {        
        tokenController.verifyToken(req, res, orderController.updateOrder); 
    } catch (error) {
        console.log(err);
    }
});

routes.delete('/order/:id', (req, res) => {
    try {        
        tokenController.verifyToken(req, res, orderController.deleteOrder); 
    } catch (error) {
        console.log(err);
    }
});

module.exports = routes;