import express from 'express';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { signup, signin, logout } from "../controllers/auth.controller.js";

let mongoUrl = "mongodb+srv://vincentkiathadi:YIfp7gktEi2USAWW@cluster0.nt2oupy.mongodb.net/chatapp?retryWrites=true&w=majority";


const router = express.Router();

router.get('/', (req, res) => {res.send ("Home route")});

router.get('/signup', signup );

router.post('/signin', signin );

router.post('/signout', logout );

export default router;