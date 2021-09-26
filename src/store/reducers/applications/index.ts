/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getOutcomingApplicationsService,
  getIncomingApplicationsService,
  postApplicationService,
  approveApplicationService,
  rejectApplicationService,
} from 'utils/api/routes/position';
import {
  IApplicationOutcoming,
  IApplicationIncoming,
  IApplicationsDisplay,
} from 'types/interfaces/profile';
import { ISelectOption } from 'types/interfaces/common';

const initialState = {
  outcoming: [] as IApplicationsDisplay[],
  incoming: [] as IApplicationsDisplay[],
  incomingSelect: [] as ISelectOption[],
};

export const getOutcoming = createAsyncThunk(
  'applications/getOutcoming',
  async (_x, { dispatch, rejectWithValue }) => {
    try {
      const [err, data] = await getOutcomingApplicationsService();

      if (err) {
        throw new Error(err);
      } else {
        dispatch(setOutcoming(data! || []));
      }
      return data;
    } catch (err: any) {
      dispatch(setOutcoming([]));
      return rejectWithValue(err.response.data);
    }
  }
);

export const getIncoming = createAsyncThunk(
  'applications/getIncoming',
  async (_x, { dispatch, rejectWithValue }) => {
    try {
      const [err, data] = await getIncomingApplicationsService();

      if (err) {
        throw new Error(err);
      } else {
        dispatch(setIncoming(data! || []));
      }
      return data;
    } catch (err: any) {
      dispatch(setIncoming([]));
      return rejectWithValue(err.response.data);
    }
  }
);

const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    setOutcoming: (state, action: PayloadAction<IApplicationOutcoming[]>) => {
      const dataMapped = action.payload.map(
        (x: IApplicationOutcoming): IApplicationsDisplay => ({
          id: x.id,
          login: x.to_user.username,
          name: x.to_user.name,
          email: x.to_user.email,
          phone: x.to_user.phone,
        })
      );

      state.outcoming = [...dataMapped];
    },
    setIncoming: (state, action: PayloadAction<IApplicationIncoming[]>) => {
      const dataMapped = action.payload.map(
        (x: IApplicationIncoming): IApplicationsDisplay => ({
          id: x.id,
          login: x.from_user.username,
          name: x.from_user.name,
          email: x.from_user.email,
          phone: x.from_user.phone,
        })
      );

      const dataSelectMapped = dataMapped.map((x) => ({
        id: x.id,
        label: `${x.id} - ${x.login}`,
      }));

      state.incoming = [...dataMapped];
      state.incomingSelect = [...dataSelectMapped];
    },
  },
});

export const { setOutcoming, setIncoming } = applicationsSlice.actions;

export default applicationsSlice.reducer;
