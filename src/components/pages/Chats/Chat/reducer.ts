import { IChatDetail, IMessage } from '../types';

export type StateType = {
  chat: IChatDetail | null;
  page: number;
  scroll: null | number;
  messages: IMessage[];
  allMessagesCount: number;
  prevBodyHeight: number;
};

export type ActionType =
  | {
      type: 'RENDER_HISTORY';
      page: number;
      messages: IMessage[];
      count: number;
    }
  | { type: 'ADD_MESSAGE'; message: IMessage }
  | { type: 'ADD_PREV_PAGE'; messages: IMessage[] }
  | { type: 'ADD_NEXT_PAGE'; messages: IMessage[] }
  | { type: 'SET_BODY_HEIGHT'; payload: number }
  | { type: 'SET_SCROLL'; payload: number }
  | { type: 'SET_CHAT'; payload: IChatDetail };

export const initialState: StateType = {
  chat: null,
  page: 1,
  messages: [],
  allMessagesCount: 0,
  scroll: null,
  prevBodyHeight: 0,
};

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'RENDER_HISTORY':
      return {
        ...state,
        page: action.page,
        messages: action.messages,
        allMessagesCount: action.count,
      };
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.message],
        allMessagesCount: state.allMessagesCount + 1,
      };
    case 'ADD_PREV_PAGE':
      return {
        ...state,
        messages: [...action.messages, ...state.messages],
        page: state.page + 1,
      };
    case 'ADD_NEXT_PAGE':
      return {
        ...state,
        messages: [...state.messages, ...action.messages],
        page: state.page - 1,
      };
    case 'SET_BODY_HEIGHT':
      return {
        ...state,
        prevBodyHeight: action.payload,
      };
    case 'SET_SCROLL':
      return {
        ...state,
        scroll: action.payload,
      };
    case 'SET_CHAT':
      return {
        ...state,
        chat: action.payload,
      };
    default:
      return state;
  }
};
