import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language } from '../../../types/common';

const initialState = {
  language: 'ru' as Language,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = settingsSlice.actions;

export default settingsSlice.reducer;
