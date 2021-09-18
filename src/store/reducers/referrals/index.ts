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
    const { successCallback, errorCallback, ...data } = payload;

    try {
      const response = await getReferralsService(data);

      if (response?.status === 200) {
        dispatch(setReferralsTree(response.data));
        successCallback && successCallback(response.data);
      }
      return response.data;
    } catch (err) {
      dispatch(
        // todo - locale should be defined on backend
        setError(
          'Этот пользователь не покупал позиции на выбранном уровне матрицы'
        )
      );
      errorCallback && errorCallback();
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
