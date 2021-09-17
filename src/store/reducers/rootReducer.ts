import { combineReducers } from 'redux';
import userReducer from './user';
import articleReducer from './article';
import settingsReducer from './settings';
import metaReducer from './meta';
import referralsReducer from './referrals';
import profileReducer from './profile';

export const rootReducer = combineReducers({
  user: userReducer,
  settings: settingsReducer,
  meta: metaReducer,
  article: articleReducer,
  referrals: referralsReducer,
  profile: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
