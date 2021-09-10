export interface IBalance {
  readonly id: number;
  bitlimes: number;
  total_earned: number;
  total_output: number;
  available_for_withdrawal: number;
  user?: number;
}
