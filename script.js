const express = require("express")
const app = express()
const port = 3000

const posts = [
    { id: 1, title: 'Primo post', content: 'Contenuto del primo post' },
    { id: 2, title: 'Secondo post', content: 'Contenuto del secondo post' }
];