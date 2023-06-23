import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as groupService from "../../../api/group-api";

const initialState = {
  isAuthenticated: false,
  error: null,
  loading: false,
  user: null,
  initialLoading: false,
};

// isAuthenticated: false,

export const createGroupAsync = createAsyncThunk(
  "group/createGroupAsync",
  async (input, thunkApi) => {
    try {
      //console.log(input);
      const res = await groupService.createGroup(input);
     // setAccessToken(res.data.accessToken);  //  ไม่ต้องใช้ เพราะ Auth มาแล้ว
     // const resFetchMe = await groupService.fetchMe();
     // return resFetchMe.data.user;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);



//  export const fetchAllGroupAsync = createAsyncThunk("group/fetchAllGroup", async (_, thunkApi) => {
//    try {
//      const res = await groupService.fetchAllGroup();
//      return res.data.user;
//    } catch (err) {
//      return thunkApi.rejectWithValue(err.response.data.message);
//    }
//  });

//  export const getGroupByIdAsync = createAsyncThunk("group/getGroupById", async (_, thunkApi) => {
//     try {
//       const res = await groupService.getGroupById();
//       return res.data.user;
//     } catch (err) {
//       return thunkApi.rejectWithValue(err.response.data.message);
//     }
//   });



const groupSlice = createSlice({
  name: "group",
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
      //   .addCase(logout.fulfilled, state => {
      //     state.isAuthenticated = false;
      //     state.user = null
      //   })
      .addCase(createGroupAsync.pending, (state) => {
        state.loading = false;
      })
      .addCase(createGroupAsync.fulfilled, (state, action) => {
       // state.isAuthenticated = true;
        state.loading = false;
        //state.user = action.payload;
      })
      .addCase(createGroupAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

    //   .addCase(fetchAllGroupAsync.pending, state => {
    //     //state.initialLoading = true
    //   })
    // .addCase(fetchAllGroupAsync.fulfilled, (state, action)=> {
    //   state.isAuthenticated = true;
    //   state.user = action.payload;
    //   state.initialLoading = false
    // })
    // .addCase(fetchAllGroupAsync.rejected, (state, action)=> {
    //   state.error = action.payload;
    //  // state.initialLoading  = false;
    // })

    // .addCase(getGroupByIdAsync.pending, state => {
    //     //state.initialLoading = true
    //   })
    // .addCase(getGroupByIdAsync.fulfilled, (state, action)=> {
    //   state.isAuthenticated = true;
    //   state.user = action.payload;
    //   state.initialLoading = false
    // })
    // .addCase(getGroupByIdAsync.rejected, (state, action)=> {
    //   state.error = action.payload;
    //  // state.initialLoading  = false;
    // })

});

export default groupSlice.reducer;
