import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { ISneakers } from "../types";

interface IParams {
  priceFrom: number;
  priceTo: number;
  gender: string;
  sizes: number[];
}

export const fetchSneakers = createAsyncThunk<ISneakers[], IParams>(
  "sneakers/fetchSneakers",
  async (_params, { rejectWithValue }) => {
    try {
      
      const { data } = await axios.get<ISneakers[]>(
        `${BASE_URL}/sneakers/`
      );
      console.log(data)

      localStorage.setItem("sneakers", JSON.stringify(data));

      return data;
    } catch (error) {
      console.log(`Failed to fetch:`);
      return rejectWithValue("Failed to fetch sneakers");
    }
  }
);

interface IState {
  data: ISneakers[];
}

const initialState: IState = {
  data: JSON.parse(localStorage.getItem("sneakers") || "[]"),
};

export const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default sneakersSlice.reducer;
