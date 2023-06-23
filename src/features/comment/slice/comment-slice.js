
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as commentService from "../../../api/post-api";

const initialState = {
    //post: []
    // postSelected: {}
    // isAuthenticated: false,
    // error: null,
    // loading: false,
    // user: null,
    // initialLoading: false,
  };


  export const createCommentByPostIdAsync = createAsyncThunk(
    "post/createCommentByPostIdAsync",
    async (input, thunkApi) => {
      try {
        // console.log(input);
        const res = await commentService.createPost(input);
        // setAccessToken(res.data.accessToken);  //  ไม่ต้องใช้ เพราะ Auth มาแล้ว
        // const resFetchMe = await groupService.fetchMe();
        return res.data.comment;   // ส่งไป set ค่าใน reducer
      } catch (err) {
        console.log(err);
        return thunkApi.rejectWithValue(err.response.data.message);
      }
    }
  );



// ส่งไปบอก Store
const postSlice = createSlice({
    name: "comment",
    initialState,
    //   reducers: {
    //     updateProfileImage: (state, action) => {
    //       state.user.profileImage = action.payload
    //     },
    //     updateCoverImage: (state, action) => {
    //       state.user.coverImage =action.payload
    //     }
    //   },
  
    extraReducers: (builder) =>
      builder
        // .addCase(deletePostByidAsync.fulfilled, (state) => {
        //   //state.user = null
        // })
  
        .addCase(createCommentByPostIdAsync.pending, (state) => {
          state.loading = false;
        })
        .addCase(createCommentByPostIdAsync.fulfilled, (state, action) => {
          // state.isAuthenticated = true;
          state.loading = false;
          //state.user = action.payload;
        })
        .addCase(createCommentByPostIdAsync.rejected, (state, action) => {
          state.error = action.payload;
          state.loading = false;
        })
  
  });
  
  export default postSlice.reducer;
  