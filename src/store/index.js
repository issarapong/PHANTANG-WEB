import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/slice/auth-slice'
import postReducer from '../features/post/slice/post-slice'
import commentReducer from '../features/comment/slice/comment-slice'
const store = configureStore({
   reducer: { 
    auth: authReducer,
    post: postReducer,
    comment: commentReducer 
   }
});

export default store;