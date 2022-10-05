import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: "0", name: "Dude Leb"},
    { id: "1", name: "Neil You"},
    { id: "2", name: "Dave Gtay"},  
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
       
        }
    }
)

export const selectAllUsers = (state) => state.users


export default usersSlice.reducer