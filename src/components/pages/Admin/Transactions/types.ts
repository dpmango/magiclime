export interface ITransaction {
  readonly id: string;
  user_id: string;
  username: string;
  date: string;
  address: string;
  status: string;
}

export interface IRequest {
  readonly id: string;
  status: string;
  username: string;
  count: number;
  earned: number;
  withdrew: number;
  remainder: number;
}
