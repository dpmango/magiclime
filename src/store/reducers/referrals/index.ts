/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getReferralsService } from 'utils/api/routes/referrals';
import { IReferralTree } from 'types/interfaces/referrals';
import { ReferralsPayloadType } from './types';

const initialState = {
  loading: true,
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
  },
  extraReducers: (builder) => {
    builder.addCase(getReferrals.pending, (state) => {
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

export const { setReferralsTree } = referralsSlice.actions;

export default referralsSlice.reducer;
