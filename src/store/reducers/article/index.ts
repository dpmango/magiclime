import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getArticlesService,
  // getArticleByIdService,
} from 'utils/api/routes/article';
import { IArticle } from 'types/interfaces/article';
import { ArticlesPayloadType } from './types';

const initialState = {
  articles: [],
};

export const getArticles = createAsyncThunk<object, ArticlesPayloadType>(
  'article/getArticles',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await getArticlesService(payload);
      if (response?.status === 200) {
        dispatch(setArticles(response.data.results));
      }
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<IArticle[]>) => {
      state.articles = action.payload;
    },
  },
});

export const { setArticles } = articleSlice.actions;

export default articleSlice.reducer;
