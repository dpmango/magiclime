import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language, Theme } from '../../../types/common';

const initialState = {
  language: 'ru' as Language,
  theme: 'default' as Theme,
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
  },
});

export const { setLanguage, setTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
