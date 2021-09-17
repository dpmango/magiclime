import { IChatDetail, IMessage } from '../types';

export type StateType = {
  chat: IChatDetail | null;
  page: number;
  scroll: null | number;
  messages: IMessage[];
  allMessagesCount: number;
  prevBodyHeight: number;
  lastTopRenderPage: number;
  lastBottomRenderPage: number;
  lastPaginationDirection: 'top' | 'bottom' | '';
};

export type ActionType =
  | {
      type: 'RENDER_HISTORY';
      page: number;
      messages: IMessage[];
      count: number;
    }
  | {
      type: 'SCROLL_TO_BOTTOM';
      messages: IMessage[];
    }
  | { type: 'ADD_MESSAGE'; message: IMessage }
  | { type: 'ADD_PREV_PAGE'; messages: IMessage[]; page: number }
  | { type: 'ADD_NEXT_PAGE'; messages: IMessage[]; page: number }
  | { type: 'SET_BODY_HEIGHT'; payload: number }
  | { type: 'SET_SCROLL'; payload: number | null }
  | { type: 'MARK_PASSED'; payload: number }
  | { type: 'SET_CHAT'; payload: IChatDetail };

export const initialState: StateType = {
  chat: null,
  page: 1,
  messages: [],
  allMessagesCount: 0,
  scroll: null,
  prevBodyHeight: 0,
  lastTopRenderPage: 0,
  lastBottomRenderPage: 0,
  lastPaginationDirection: '',
};

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'RENDER_HISTORY':
      return {
        ...state,
        page: action.page,
        messages: action.messages,
        allMessagesCount: action.count,
        lastTopRenderPage: action.page,
        lastBottomRenderPage: action.page,
      };
    case 'SCROLL_TO_BOTTOM':
      return {
        ...state,
        page: 1,
        messages: action.messages,
        lastTopRenderPage: 0,
        lastBottomRenderPage: 0,
        lastPaginationDirection: '',
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
        page: action.page,
        lastTopRenderPage: state.lastTopRenderPage + 1,
        lastPaginationDirection: 'top',
      };
    case 'ADD_NEXT_PAGE':
      return {
        ...state,
        messages: [...state.messages, ...action.messages],
        page: action.page,
        lastBottomRenderPage: state.lastBottomRenderPage - 1,
        lastPaginationDirection: 'bottom',
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
    case 'MARK_PASSED':
      return {
        ...state,
        page: action.payload,
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
