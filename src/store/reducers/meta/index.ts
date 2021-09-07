import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getCategoriesService,
  getCitiesService,
  getCountriesService,
  getRatesService,
  getTagsService,
} from 'utils/api/routes/meta';
import { ICategory, ITag } from 'types/interfaces/meta';
import { PaginationPayloadType } from './types';

const initialState = {
  categories: [] as ICategory[],
  tags: [] as ITag[],
  rates: {
    price: 0,
  },
};

const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
    },
    setTags: (state, action: PayloadAction<ITag[]>) => {
      state.tags = action.payload;
    },
    setRates: (state, action: PayloadAction<{ price: number }>) => {
      state.rates = action.payload;
    },
  },
});

export const { setCategories, setTags, setRates } = metaSlice.actions;

export const getCategories = createAsyncThunk<unknown, PaginationPayloadType>(
  'meta/getArticles',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await getCategoriesService(payload.page);
      if (response?.status === 200) {
        dispatch(setCategories(response.data.results));
      }
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getTags = createAsyncThunk<unknown, PaginationPayloadType>(
  'meta/getTags',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await getTagsService(payload.page);

      if (response?.status === 200) {
        dispatch(setTags(response.data.results));
      }
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getRates = createAsyncThunk<unknown>(
  'meta/getRates',
  async (x, { dispatch, rejectWithValue }) => {
    try {
      const response = await getRatesService();

      if (response?.status === 200) {
        dispatch(setRates(response.data));
      }
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAllMeta = createAsyncThunk<unknown, null>(
  'meta/getAllMeta',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      dispatch(getCategories({}));
      // dispatch(getCities({}));
      // dispatch(getCountries({}));
      dispatch(getTags({}));
      dispatch(getRates());

      return true;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export default metaSlice.reducer;
