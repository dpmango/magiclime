import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBalanceService } from 'utils/api/routes/payment';
import {
  getAchivementsService,
  getEventsService,
  getProgramsService,
} from 'utils/api/routes/profile';
import { IAchievement, IBalance, IEvent } from 'types/interfaces/profile';

const initialState = {
  balance: {} as IBalance,
  achivements: [] as IAchievement[],
  events: [] as IEvent[],
  programs: [] as IEvent[],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setBalance: (state, action: PayloadAction<IBalance>) => {
      state.balance = action.payload;
    },
    setAchievements: (state, action: PayloadAction<IAchievement[]>) => {
      state.achivements = action.payload;
    },
    setEvents: (state, action: PayloadAction<IEvent[]>) => {
      state.events = action.payload;
    },
    setPrograms: (state, action: PayloadAction<any>) => {
      state.events = action.payload;
    },
  },
});

export const { setBalance, setAchievements, setEvents, setPrograms } =
  profileSlice.actions;

export const getBalance = createAsyncThunk(
  'profile/getBalance',
  async (x, { dispatch, rejectWithValue }) => {
    try {
      const response = await getBalanceService();
      if (response?.status === 200) {
        dispatch(setBalance(response.data));
      }
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAchivements = createAsyncThunk(
  'profile/getAchivements',
  async (x, { dispatch, rejectWithValue }) => {
    try {
      const response = await getAchivementsService();
      if (response?.status === 200) {
        dispatch(setAchievements(response.data!.results));
      }
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getEvents = createAsyncThunk(
  'profile/getEvents',
  async (x, { dispatch, rejectWithValue }) => {
    try {
      const response = await getEventsService();
      if (response?.status === 200) {
        dispatch(setEvents(response.data!.results));
      }
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getPrograms = createAsyncThunk(
  'profile/getPrograms',
  async (x, { dispatch, rejectWithValue }) => {
    try {
      const response = await getProgramsService();
      if (response?.status === 200) {
        dispatch(setEvents(response.data!.results));
      }
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAllProfile = createAsyncThunk(
  'profile/getAllProfile',
  async (x, { dispatch, rejectWithValue }) => {
    try {
      dispatch(getBalance());
      dispatch(getAchivements());
      dispatch(getEvents());
      dispatch(getPrograms());
      return true;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export default profileSlice.reducer;
