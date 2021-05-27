import { createSlice } from "@reduxjs/toolkit";


const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: "idle", // เพิ่ม status เพื่อทำการ แสดงว่า Loading อยู่ ; export ออกและใส่ใน getPosts ด้วย
    },
    reducers: {
        postsLoading: (state) => {
           if (state.status === "idle") {
               state.status = "pending"
           };
        }, 
        postsReceived: (state, action) => {
            if (state.status === "pending") {
                state.status = "idle";
            };
            state.posts = action.payload;
        },
    },
});

export const { postsReceived , postsLoading } = postsSlice.actions;

const getPosts = () => async (dispatch) => {    
    dispatch(postsLoading())
    let response = await fetch("http://localhost:8000/posts")
    let posts = await response.json();
    dispatch(postsReceived(posts.data))
}

export { getPosts };

export default postsSlice.reducer;