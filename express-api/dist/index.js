"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// const express = require('express');
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    res.status(401).json({ ok: false, msg: 'No hay token en la peticion' });
    // res.json({ ok: true, msg: 'Todo salio bien!' });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
