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
  IApplicationSelect,
} from 'types/interfaces/profile';
import { ISelectOption } from 'types/interfaces/common';
import { getProgramById } from 'components/pages/Profile/ReferralPartners/functions';
import moment from 'moment';

const initialState = {
  outcoming: [] as IApplicationsDisplay[],
  incoming: [] as IApplicationsDisplay[],
};

export const getOutcoming = createAsyncThunk(
  'applications/getOutcoming',
  async (_x, { dispatch, rejectWithValue }) => {
    try {
      const [err, data] = await getOutcomingApplicationsService();

      if (err) {
        throw new Error(err);
      } else {
        const dataMapped = data
          ? data.map(
              (x: IApplicationOutcoming): IApplicationsDisplay => ({
                id: x.id,
                login: x.to_user.username,
                matrix: `${getProgramById(x.program)} ${x.level}`,
                date: moment(x.created_at).format('DD.MM.YY HH:mm:ss'),
                status: x.status,
                statusText: statusToText(x.status),
                level: x.level,
                program: x.program,
              })
            )
          : [];
        dispatch(setOutcoming(dataMapped));
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
        const dataMapped = data
          ? data.map(
              (x: IApplicationIncoming): IApplicationsDisplay => ({
                id: x.id,
                login: x.from_user.username,
                matrix: `${getProgramById(x.program)} ${x.level}`,
                date: moment(x.created_at).format('DD.MM.YY HH:mm:ss'),
                statusText: statusToText(x.status),
                status: x.status,
                level: x.level,
                program: x.program,
              })
            )
          : [];
        dispatch(setIncoming(dataMapped));
      }
      return data;
    } catch (err: any) {
      dispatch(setIncoming([]));
      return rejectWithValue(err.response.data);
    }
  }
);

const statusToText = (status: number) => {
  switch (status) {
    case 1:
      return 'новый';
    case 2:
      return 'исполнено';
    case 3:
      return 'отклонено';
    default:
      return '';
  }
};

const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    setOutcoming: (state, action: PayloadAction<IApplicationsDisplay[]>) => {
      state.outcoming = [...action.payload];
    },
    setIncoming: (state, action: PayloadAction<IApplicationsDisplay[]>) => {
      state.incoming = [...action.payload];
    },
  },
});

export const { setOutcoming, setIncoming } = applicationsSlice.actions;

export default applicationsSlice.reducer;
