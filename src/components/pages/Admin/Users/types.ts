export interface IUserListItem {
  readonly id: string;
  name: string;
  username: string;
  date_joined: string;
  last_login: string;
  email: string;
  is_active: boolean;
  phone: string;
  referral_number: string;
  parent_username: string;
  balance: string;
  earned: string;
  withdrawn: string;
}
