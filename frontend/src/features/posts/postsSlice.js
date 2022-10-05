import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const POSTS_URL = "http://localhost:5000/api/v1/posts"

const initialState = {
    posts: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed' 
    error: null
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
        const response = await axios.get(POSTS_URL)
        return response.data
})

export const sendPost = createAsyncThunk("posts/sendPost", async (payload) => {
    const response = await axios.post(POSTS_URL, payload)
    return response.data
})

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        reset: (state) => {
            state.status = "idle"
            state.error = null
        }
    },
    extraReducers(builder){
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })

            .addCase(sendPost.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(sendPost.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.posts = action.payload
            })
            .addCase(sendPost.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

export const selectAllPosts = (state) => state.posts.posts
export const selectStatus = (state) => state.posts.status
export const selectError = (state) => state.posts.error


export const { reset } = postsSlice.actions

export default postsSlice.reducer