import { combineReducers } from 'redux';
import userReducer from './user';
import articleReducer from './article';

export const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
