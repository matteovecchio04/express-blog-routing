const express = require("express")
const router = express.Router()

const posts = [
    { id: 1, title: 'Primo post', content: 'Contenuto del primo post' },
    { id: 2, title: 'Secondo post', content: 'Contenuto del secondo post' }
];

// GET
router.get("/", (req, res) => {
    res.send("Lista dei post")
})