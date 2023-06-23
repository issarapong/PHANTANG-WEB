import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as postService from "../../../api/post-api";

const initialState = {
  //post: []
  // postSelected: {}
  // isAuthenticated: false,
  // error: null,
  // loading: false,
  // user: null,
  // initialLoading: false,
};

// isAuthenticated: false,

export const createPostAsync = createAsyncThunk(
  "post/createPostAsync",
  async (input, thunkApi) => {
    try {
      // console.log(input);
      const res = await postService.createPost(input);
      // setAccessToken(res.data.accessToken);  //  ไม่ต้องใช้ เพราะ Auth มาแล้ว
      // const resFetchMe = await groupService.fetchMe();
      return res.data.post;   // ส่งไป set ค่าใน reducer
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchAllPostAsync = createAsyncThunk(
  "post/fetchAllPost",
  async (_, thunkApi) => {
    try {
      const res = await postService.fetchAllPost();
      // console.log(res)
      return res.data.allPost; // const allPost from Backend
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchPostByIdAsync = createAsyncThunk(
  "post/fetchPostById",
  async (id, thunkApi) => {
    try {
      const res = await postService.fetchPostByid(id);
      //console.log('---slice-----', res);
      return res.data.postTopicById;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);


export const editPostByidAsync = createAsyncThunk(
"post/editPostByidAsync",
async (input, thunkApi) => {
  try {
     console.log('---update-input---', input);
    const res = await postService.editPostByid(input.input, input.postId);
    // setAccessToken(res.data.accessToken);  //  ไม่ต้องใช้ เพราะ Auth มาแล้ว
    // const resFetchMe = await groupService.fetchMe();
    return res.data.post;   // ส่งไป set ค่าใน reducer
  } catch (err) {
    console.log(err);
    return thunkApi.rejectWithValue(err.response.data.message);
  }
}
);


export const deletePostByidAsync = createAsyncThunk(
  "post/deletePostByid",
  async (id, thunkApi) => {
    try {
     // console.log('--slice--', id)
      const res = await postService.deletePostByid(id);
      //console.log(res)
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);



// ส่งไปบอก Store
const postSlice = createSlice({
  name: "post",
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
      .addCase(deletePostByidAsync.fulfilled, (state) => {
        //state.user = null
      })

      .addCase(createPostAsync.pending, (state) => {
        state.loading = false;
      })
      .addCase(createPostAsync.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.loading = false;
        //state.user = action.payload;
      })
      .addCase(createPostAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(fetchAllPostAsync.pending, (state) => {
        //state.initialLoading = true
      })
      .addCase(fetchAllPostAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.post = action.payload;
        //  state.initialLoading = false
      })
      .addCase(fetchAllPostAsync.rejected, (state, action) => {
        state.error = action.payload;
        // state.initialLoading  = false;
      })

      .addCase(fetchPostByIdAsync.pending, (state) => {
        //state.initialLoading = true
      })
      .addCase(fetchPostByIdAsync.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.post = [action.payload];  // แปลงเป็น array ก่อนส่งเข้า Store
        //  state.initialLoading = false;
      })
      .addCase(fetchPostByIdAsync.rejected, (state, action) => {
        state.error = action.payload;
        // state.initialLoading  = false;
      })
      
      .addCase(editPostByidAsync.pending, (state) => {
        state.loading = false;
      })
      .addCase(editPostByidAsync.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.loading = false;
        //state.user = action.payload;
      })
      .addCase(editPostByidAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export default postSlice.reducer;
