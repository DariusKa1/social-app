import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import postsService from "./postsService"

const initialState = {
    posts: null,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
}


export const getPosts = createAsyncThunk("posts/get", async (thunkAPI) => {
    try {
        return await postsService.getPosts()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const createPost = createAsyncThunk("posts/create", async (postData, thunkAPI) => {
    try {
        return await postsService.createPost(postData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

    

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.posts = action.payload
                
            })
            .addCase(getPosts.rejected, (state, action) =>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.posts = null
            })



            .addCase(createPost.pending, (state) => {
                state.isSuccess = false
                state.isLoading = true
                state.isError = false
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.isError = false
                
            })
            .addCase(createPost.rejected, (state, action) =>{
                state.isSuccess = false
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = postsSlice.actions
export default postsSlice.reducer