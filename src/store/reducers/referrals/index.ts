/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getReferralsService } from 'utils/api/routes/referrals';
import { IReferralTree } from 'types/interfaces/referrals';
import { ReferralsPayloadType } from './types';

const initialState = {
  loading: true,
  error: '',
  referralsTree: {} as IReferralTree,
};

export const getReferrals = createAsyncThunk<any, ReferralsPayloadType>(
  'referrals/getReferrals',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await getReferralsService(payload);

      if (response?.status === 200) {
        dispatch(setReferralsTree(response.data));
      }
      return response.data;
    } catch (err) {
      dispatch(setError(err.data[0]));
      return rejectWithValue(err.response.data);
    }
  }
);

const referralsSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setReferralsTree: (state, action: PayloadAction<IReferralTree>) => {
      state.referralsTree = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      console.log('setting error', action);
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getReferrals.pending, (state) => {
      state.error = '';
      state.loading = true;
    });
    builder.addCase(getReferrals.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(getReferrals.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setReferralsTree, setError } = referralsSlice.actions;

export default referralsSlice.reducer;
