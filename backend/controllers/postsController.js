import postModel from "../models/postModel.js"

export const getPosts = async (req, res) => {
    console.log("asked for posts");
    await postModel.find()
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(404).json({err: err.message}))
}

export const createPost = async (req, res) => {
    const {title, message, creator, tags, selectedFile} = req.body

    if(!title || !message || !creator || !tags || !selectedFile)
    return res.status(400).json({err: "Missing some data fields"})

    await postModel.create({
        title,
        message,
        creator,
        tags,
        selectedFile
        })
        .catch(err => res.status(409).json({err: err.message}))
    
    await postModel.find()
        .then(posts => res.status(201).json(posts))
        .catch(err => res.status(404).json({err: err.message}))
}

export const deletePost = async (req, res) => {
    const id = req.params.id
    if(!id) return res.status(400).json({err: "Missing id"})

    await postModel.findByIdAndDelete(id)
        .catch(err => res.status(404).json({err: err.message}))
    
    await postModel.find()
        .then(posts => res.status(201).json(posts))
        .catch(err => res.status(404).json({err: err.message}))
}