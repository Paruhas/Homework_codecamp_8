import { configureStore } from "@reduxjs/toolkit" // Fn ไว้สร้าง store
import counterReducer from "../features/counter/counterSlice"; // import counterSlice เข้ามาเพื่อใช้ reducer
import postsReducer from "../features/posts/postSlice"


// คือ state ใน app ของเราทั้งหมด
export default configureStore({
    reducer: {
        counter: counterReducer, // === { counter: { counter: 0 } }
        posts: postsReducer
    },
});

