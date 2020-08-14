import { createSlice } from "@reduxjs/toolkit";

const photo = createSlice({
  name: "photos",
  initialState: [],
  reducers: {
    addPhoto: (state, action) => {
      const newPhoto = action.payload;
      //Because redux-toolkit appile a immutiable data, so we can change data direct state
      state.push(newPhoto);
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto } = actions;
export default reducer;
