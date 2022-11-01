const Post = require("../models/Post.js")

exports.getAllPosts = async(req, res, next) => {
    try {
        const [posts, _] = await Post.findAll()
        res.status(200).json({count: posts.length, posts})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

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