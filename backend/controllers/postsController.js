import postModel from "../models/postModel.js";

export const getPosts = async (req, res) => {
    console.log("asked for posts");
    await postModel
        .find()
        .then((posts) => res.status(200).json(posts))
        .catch((err) => res.status(404).json({ err: err.message }));
};

export const createPost = async (req, res) => {
    const { title, message, tags, selectedFile } = req.body;

    if (!title || !message || !tags || !selectedFile)
        return res.status(400).json({ err: "Missing some data fields" });

    await postModel
        .create({
        user: req.user._id,
        title,
        message,
        creator: req.user.fullName,
        tags,
        selectedFile,
        })
        .then((createdPost) => res.status(201).json(createdPost))
        .catch((err) => res.status(409).json({ err: err.message }));
};

export const deletePost = async (req, res) => {
    console.log("User trying to delete post");
    const id = req.params.id;
    if (!id) return res.status(400).json({ err: "Missing id" });
    try {
        const postToDelete = await postModel.findById(id)
        if(!postToDelete) return res.status(400).json({ err: "Post with this id does not exist" });
        if(req.user.isAdmin || JSON.stringify(req.user._id) === JSON.stringify(postToDelete.user)) return await postToDelete.deleteOne()
                .then(() => res.status(200).json({ msg: "Post was deleted" }));
        return res.status(400).json({ err: "For this action needed privilege of admin or be owner of post" });
        
    } catch (error) {
        res.status(404).json({ err: error.message });
    }
};
