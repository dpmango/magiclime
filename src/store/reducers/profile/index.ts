import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBalanceService } from 'utils/api/routes/payment';
import { IBalance } from 'types/interfaces/profile';

const initialState = {
  balance: {} as IBalance,
};

const profileSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setBalance: (state, action: PayloadAction<IBalance>) => {
      state.balance = action.payload;
    },
  },
});

export const { setBalance } = profileSlice.actions;

export const getBalance = createAsyncThunk(
  'profile/getBalance',
  async (x, { dispatch, rejectWithValue }) => {
    try {
      const response = await getBalanceService();
      if (response?.status === 200) {
        dispatch(setBalance(response.data));
      }
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export default profileSlice.reducer;
