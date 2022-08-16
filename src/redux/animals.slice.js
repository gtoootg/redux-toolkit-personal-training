import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, label: "camel" },
  { id: 1, label: "lion" },
];

const animalSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {
    addAnimals(state, action) {
      const newState = state.slice();
      newState.push({ id: state.length, label: action.payload });
      state = newState;
    },
    resetAnimals(state) {
      state = initialState;
    },
  },
});

export const { addAnimals, resetAnimals } = animalSlice.actions;
const animalsReducer = animalSlice.reducer;

export default animalsReducer;
