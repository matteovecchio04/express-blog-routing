const express = require("express")
const router = express.Router()

const posts = [
    { id: 1, title: 'Primo post', content: 'Contenuto del primo post' },
    { id: 2, title: 'Secondo post', content: 'Contenuto del secondo post' }
];

// GET /posts
router.get("/", (req, res) => {
    res.send("Lista dei post")
})

// GET /posts/:id
router.get("/", (req, res) => {
    const { id } = req.params
    res.send(`Dettagli del post ${id}`)
})

// DELETE /posts/:id
router.delete("/:id", (req, res) => {
    const { id } = req.params
    res.send(`Elimina il post ${id}`)
})

// UPDATE /posts/:id
