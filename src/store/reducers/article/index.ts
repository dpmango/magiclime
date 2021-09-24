import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getArticlesService,
  // getArticleByIdService,
} from 'utils/api/routes/article';
import { IArticle } from 'types/interfaces/article';
import { ArticlesPayloadType } from './types';

const initialState = {
  articles: [] as IArticle[],
};

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

export const getArticles = createAsyncThunk<unknown, ArticlesPayloadType>(
  'article/getArticles',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const { page, tags } = payload;
      const response = await getArticlesService({
        page,
        tags,
      });
      if (response?.status === 200) {
        dispatch(setArticles(response.data.results));
      }
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export default articleSlice.reducer;
