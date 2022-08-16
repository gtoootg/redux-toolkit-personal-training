import { historicalPersonsApiSlice } from "./historicalPersonsApi.slice";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import fruitsReducer from "./fruits.reducer";
import animalsReducer from "./animals.slice.js";
import personsReducer from "./persons.reducer";
const composedEnhancer = applyMiddleware(thunkMiddleware);

const store = configureStore({
  reducer: {
    fruits: fruitsReducer,
    animals: animalsReducer,
    persons: personsReducer,
    [historicalPersonsApiSlice.reducerPath]: historicalPersonsApiSlice.reducer,
  },
  enhancers: [composedEnhancer],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(historicalPersonsApiSlice.middleware),
});

export default store;
