import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Update,
} from '@reduxjs/toolkit';

import Cookies from 'js-cookie';
import { IUser } from '../../../types/interfaces/user';
import { setAuthToken } from '../../../utils/api';
import {
  UpdateProfileType,
  LoginPayloadType,
  RegistrationPayloadType,
} from './types';
import {
  getUserProfile,
  loginUser,
  registrationUser,
} from '../../../utils/api/routes/auth';

const initialState = {
  isLogged: false,
  isFirstTime: false,
  profile: {} as IUser,
};

export const login = createAsyncThunk<object, LoginPayloadType>(
  'user/login',
  async (payload, { dispatch, rejectWithValue }) => {
    const { password, email, remember, successCallback, errorCallback } =
      payload;
    try {
      const response = await loginUser({ password, email });

      remember &&
        Cookies.set('access', response.data.access, { expires: 10 / 24 });
      remember && Cookies.set('refresh', response.data.refresh, { expires: 1 });
      setAuthToken(response.data.access);
      dispatch(setLogged());
      dispatch(getProfile());
      successCallback && successCallback();

      return response.data;
    } catch (err) {
      if (errorCallback) {
        switch (err.status) {
          case 401:
            errorCallback('Неверный логин или пароль!');
            break;
          default:
            errorCallback('Ошибка сервера!');
            break;
        }
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const registration = createAsyncThunk<object, RegistrationPayloadType>(
  'user/registration',
  async (payload, { dispatch, rejectWithValue }) => {
    const { successCallback, errorCallback, ...data } = payload;
    try {
      const {
        data: { access, refresh, ...profile },
        status,
      } = await registrationUser(data);
      Cookies.set('access', access, { expires: 10 / 24 });
      Cookies.set('refresh', refresh, { expires: 1 });
      setAuthToken(access);
      dispatch(userRegistration(profile));
      successCallback && successCallback();
      return { access, refresh, ...profile };
    } catch (err) {
      if (errorCallback) {
        switch (err.status) {
          case 401:
            errorCallback('Данный email уже используется!');
            break;
          default:
            errorCallback('Ошибка сервера!');
            break;
        }
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getProfile = createAsyncThunk(
  'user/getProfile',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await getUserProfile();
      if (response?.status === 200) {
        dispatch(setUserProfile(response.data));
      }
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// export const updateProfile = createAsyncThunk<object, UpdateProfileType>(
//   'user/updateProfile',
//   async (payload, { dispatch, rejectWithValue }) => {
//     const { profile, successCallback, errorCallback } = payload;
//     try {
//       const response = await updateUser(profile);
//       if (response?.status === 200) {
//         dispatch(setUserProfile(response.data));
//         successCallback && successCallback();
//       }
//     } catch (err) {
//       if (errorCallback) {
//         errorCallback('Что-то пошло не так...');
//       }
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogged: (state) => {
      state.isLogged = true;
    },
    userRegistration: (state, action: PayloadAction<IUser>) => {
      state.isLogged = true;
      state.isFirstTime = true;
      state.profile = action.payload;
    },
    setUserProfile: (state, action: PayloadAction<IUser>) => {
      state.profile = action.payload;
    },
    logout: (state) => {
      state.isLogged = false;
      state.profile = {} as IUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getProfile.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.profile = action.payload;
      }
    );
  },
});

export const { setUserProfile, logout, setLogged, userRegistration } =
  userSlice.actions;

export default userSlice.reducer;
