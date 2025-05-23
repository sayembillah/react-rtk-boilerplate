import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Learning RTk", content: "I have heard good things" },
  {
    id: "2",
    title: "Learning Slices",
    content: "I have heard good things as well",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
