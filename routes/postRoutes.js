const express = require("express")
const postControllers = require("../controllers/postControllers.js")

const router = express.Router()

router
.route("/")
.get(postControllers.getAllPosts)

router
.route("/:id")
.get(postControllers.getPostById)

module.exports = router