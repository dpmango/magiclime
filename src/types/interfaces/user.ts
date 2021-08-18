import { IPhoto } from './common';

export interface IUser {
  readonly id: number;
  name: string;
  email: string;
  is_active: boolean;
  phone: string;
  date_of_birth: string;
  referral_number: string;
  country: {
    readonly id: number;
    title: string;
  };
  city: {
    readonly id: number;
    title: string;
  };
  faculty: string;
  educational_program: string;
  education_level: string;
  avatar: IPhoto;
  sound: boolean;
  animation: boolean;
  listening: boolean;
  motivating_tips: boolean;
  courses: string;
  achievements: string;
  level: number;
  experience: number;
  is_admin: boolean;
}
