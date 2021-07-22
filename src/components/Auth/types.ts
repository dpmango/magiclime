import { SetStateType } from '../../types/common';

export type AuthType = 'sign_in' | 'sign_up' | 'pass_recovery';

export interface IBaseAuthProps {
  setAuthType: SetStateType<AuthType>;
  closeModal: VoidFunction;
}
