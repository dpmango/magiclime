import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getCategoriesService,
  getCitiesService,
  getCountriesService,
  getTagsService,
} from 'utils/api/routes/meta';
import { ICategory } from 'types/interfaces/meta';
import { CategoriesPayloadType } from './types';

const initialState = {
  categories: [] as ICategory[],
};

const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = metaSlice.actions;

export const getCategories = createAsyncThunk<unknown, CategoriesPayloadType>(
  'meta/getArticles',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await getCategoriesService(payload.page);
      console.log('getCategories response', response);
      if (response?.status === 200) {
        dispatch(setCategories(response.data.results));
      }
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAllMeta = createAsyncThunk<unknown, null>(
  'meta/getArticles',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      dispatch(getCategories({}));
      // dispatch(getCities({}));
      // dispatch(getCountries({}));
      // dispatch(getTags({}));

      return true;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export default metaSlice.reducer;
