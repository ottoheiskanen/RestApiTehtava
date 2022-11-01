const Post = require("../models/Post.js")

// Get all posts
exports.getAllPosts = async(req, res, next) => {
    try {
        const [posts, _] = await Post.findAll()
        res.status(200).json({count: posts.length, posts})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// Get certain post
exports.getPostById = async(req, res, next) => {
    try {
        let postId = Number(req.params.id)
        let [post, _] = await Post.findById(postId)
        res.status(200).json({post: post[0]})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// Create post
exports.createNewPost = async(req, res, next) => {
    try {
        let {title, body} = req.body // Postman testing
        let post = new Post(title, body)

        post = await post.save()
        res.status(201).json({message: "Post created"})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// Update post
exports.updatePostById = async(req, res, next) => {
    try {
        let postId = Number(req.params.id)
        let  {title, body} = req.body
        let [post, _] = await Post.findById(postId)
        post = await Post.updateById(postId, title, body)
        res.status(204).json({message: "Post updated"})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// Delete post
exports.deletePostById = async(req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}