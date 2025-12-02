const express = require("express")
const router = express.Router()

const posts = [
    { id: 1, title: 'Primo post', content: 'Contenuto del primo post' },
    { id: 2, title: 'Secondo post', content: 'Contenuto del secondo post' }
];

// GET /posts
router.get("/", (req, res) => {
    res.json(posts)
})

// GET /posts/:id
router.get("/:id", (req, res) => {
    const { id } = req.params
    const post = posts.find(p => p.id === parseInt(id))
    res.json(post)
})

router.delete("/:id", (req, res) => {
    res.send(`Elimina il post ${req.params.id}`)
})

router.put("/:id", (req, res) => {
    res.send(`Modifica il post ${req.params.id}`)
})

module.exports = router
