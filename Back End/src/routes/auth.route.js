import express from 'express';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const router = express.Router();

router.post('/signup', (req, res) => {res.send ("signup route")})

router.post('/signin', (req, res) => {res.send ("signin route")})

router.post('/signout', (req, res) => {res.send ("signout route")})

export default router;