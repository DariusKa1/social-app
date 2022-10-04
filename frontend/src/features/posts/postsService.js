import axios from "axios"

const BASE_API_URL = "http://localhost:5000/api/v1/posts/"

//Get posts
const getPosts = async () => {
    const data = await axios.get(BASE_API_URL)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        })

        return data
}

const createPost = async (postData) => {
    const data = await axios.post(BASE_API_URL, postData)
        .then(response => {
            console.log(postData)
            console.log("I posted");
            return response.data
        })
        .catch(error => {
            return error
        })

        return data
}

const postsService = {
    getPosts,
    createPost
}

export default postsService