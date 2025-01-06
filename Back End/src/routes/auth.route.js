import express from 'express';

const router = express.router();

router.get('/signup', (req, res) => {res.send ("signup route")})

router.get('/signin', (req, res) => {res.send ("signin route")})

router.get('/signout', (req, res) => {res.send ("signout route")})

export default router;