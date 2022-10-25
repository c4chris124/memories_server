import PostMessage from "../models/postMessage.js"

// get post func
export const getPosts = async (req, res) => {
    try {
        // query to find post through mondodb asyc
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
// Adding new post, create func
export const createPost = async (req, res) => {
    // body of request
    const post = req.body

    // new post creation, passing post request body info
    const newPost = new PostMessage(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}
