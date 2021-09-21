import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language, Theme, AuthType } from '../../../types/common';

const initialState = {
  language: 'ru' as Language,
  theme: 'default' as Theme,
  authOpen: false,
  authType: 'sign_in',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    setAuth: (
      state,
      action: PayloadAction<{ opened: boolean; type: AuthType }>
    ) => {
      state.authOpen = action.payload.opened;
      state.authType = action.payload.type;
    },
    setAuthType: (state, action: PayloadAction<AuthType>) => {
      state.authType = action.payload;
    },
    setAuthOpen: (state, action: PayloadAction<boolean>) => {
      state.authOpen = action.payload;
    },
  },
});

export const { setLanguage, setTheme, setAuthType, setAuthOpen, setAuth } =
  settingsSlice.actions;

export default settingsSlice.reducer;
