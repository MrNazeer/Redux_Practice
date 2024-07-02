import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await axios.get(baseUrl);
  return res.data;
});

const initialState = {
  users: [],
  postData: [],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer(state, action) {
      state.users.push(action.payload);
    },
    deleteCustomer(state, action) {
      const userIndex = action.payload;
      state.users = state.users.filter((val, index) => index !== userIndex);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.postData = action.payload;
    });
  },
});

export const {addCustomer, deleteCustomer} = customerSlice.actions;

export default customerSlice.reducer;
