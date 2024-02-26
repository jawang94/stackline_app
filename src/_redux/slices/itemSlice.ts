import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mockData from "mock_data/stackline_frontend_assessment_data_2021.json";

// I typed this manually however, it's better to auto-generate data types from a backend schema
type Item = {
  brand: string;
  details: Array<string>;
  id: string;
  image: string;
  retailer: string;
  reviews: Array<Record<string, string | number>>;
  sales: Array<Record<string, string | number>>;
  subtitle: string;
  tags: Array<string>;
  title: string;
};

type ItemState = {
  data: Array<Item>;
  error: string | null;
  loading: boolean;
};

const initialState: ItemState = {
  data: [],
  error: null,
  loading: false,
};

// Create an async thunk for fetching data
export const fetchMockItemData = createAsyncThunk(
  "item/fetchMockItemData",
  async (_, { rejectWithValue }) => {
    try {
      const response: { data: Array<Item>; ok: boolean } = {
        data: mockData,
        ok: true,
      };
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const { data } = response;
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

// Create the data slice
export const itemSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(fetchMockItemData.pending, (state: ItemState) => {
      state.loading = true;
    });
    builder.addCase(fetchMockItemData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMockItemData.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Failed to fetch";
    });
  },
  initialState,
  name: "item",
  reducers: {},
});

export const itemReducer = itemSlice.reducer;
