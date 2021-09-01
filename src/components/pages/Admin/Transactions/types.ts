interface IMoney {
  readonly id: string;
  date: string;
  status: string;
}

export interface ITransaction extends IMoney {
  user_id: string;
  username: string;
  address: string;
}

export interface IRequest extends IMoney {
  username: string;
  count: number;
  earned: number;
  withdrew: number;
  remainder: number;
  ip: string;
}

export interface ITransfer extends IMoney {
  pin: string | number;
  count: number;
  recipient: string;
  sender: string;
}
