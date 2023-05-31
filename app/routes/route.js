const express = require('express');
const routes = express.Router();

routes.post('/auth/register', (req, res) => {});

routes.post('/auth/login', (req, res) => {});

routes.get('/auth', (req, res) => {});

routes.put('/auth/:id', (req, res) => {});

routes.delete('/auth/:id', (req, res) => {});

routes.get('/order', (req, res) => {});

routes.post('/order', (req, res) => {});

routes.put('/order/:id', (req, res) => {});

routes.delete('/order:id', (req, res) => {});