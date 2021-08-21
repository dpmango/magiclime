/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getReferralsService } from 'utils/api/routes/referrals';
import { IReferralTree } from 'types/interfaces/referrals';
import { ReferralsPayloadType } from './types';

const initialState = {
  referralsTree: {} as IReferralTree,
};

const referralsSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setReferralsTree: (state, action: PayloadAction<IReferralTree>) => {
      state.referralsTree = action.payload;
    },
  },
});

export const { setReferralsTree } = referralsSlice.actions;

export const getReferrals = createAsyncThunk<any, ReferralsPayloadType>(
  'referrals/getReferrals',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await getReferralsService(payload);
      console.log(response);
      if (response?.status === 200) {
        dispatch(setReferralsTree(response.data));
      }
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export default referralsSlice.reducer;
