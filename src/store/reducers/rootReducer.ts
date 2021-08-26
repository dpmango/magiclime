import { combineReducers } from 'redux';
import userReducer from './user';
import articleReducer from './article';
import settingsReducer from './settings';
import referralsReducer from './referrals';

export const rootReducer = combineReducers({
  user: userReducer,
  settings: settingsReducer,
  article: articleReducer,
  referrals: referralsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
