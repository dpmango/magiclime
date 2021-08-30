import { IAchievement } from 'components/pages/Profile/types';
import { IPhoto } from './common';

export interface IUser {
  readonly id: number;
  name: string;
  username: string;
  email: string;
  is_active: boolean;
  phone: string;
  date_of_birth: string;
  referral_number: string;
  country: string;
  city: string;
  faculty: string;
  educational_program: string;
  education_level: string;
  avatar: IPhoto;
  sound: boolean;
  animation: boolean;
  listening: boolean;
  motivating_tips: boolean;
  courses: string;
  achievements: IAchievement[];
  level: number;
  experience: number;
  media_sponsor: string;
  username: string;
  is_staff: boolean;
}
