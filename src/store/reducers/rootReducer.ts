import { combineReducers } from 'redux';
import userReducer from './user';
import articleReducer from './article';
import settingsReducer from './settings';

export const rootReducer = combineReducers({
  user: userReducer,
  settings: settingsReducer,
  article: articleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
