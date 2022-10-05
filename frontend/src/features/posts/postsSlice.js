import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const POSTS_URL = "http://localhost:5000/api/v1/postss"

const initialState = {
    posts: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed' 
    error: null
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
        const response = await axios.get(POSTS_URL)
        return response.data
})

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer: (state, action) => {
                state.posts.push(action.payload)
            },
            prepare: (value) => {
                return {
                    payload: {
                        ...value,
                        id: nanoid(),
                        date: new Date(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        }
                    }
                }
            }
        },
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
    }
})

export const selectAllPosts = (state) => state.posts.posts
export const selectStatus = (state) => state.posts.status
export const selectError = (state) => state.posts.error


export const { postAdded,  } = postsSlice.actions

export default postsSlice.reducer