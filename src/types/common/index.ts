import React, { ChangeEvent, Component, Dispatch, SetStateAction } from 'react';
import { AxiosResponse } from 'axios';

// Тип для передачи других компонент в качестве props
export type ComponentType<T = any> = typeof Component | React.FC<T>;

export type ChangeType<T = HTMLInputElement> = ChangeEvent<T>;

// Тип для функции изменения состояния (useState)
export type SetStateType<T = any> = Dispatch<SetStateAction<T>>;

// Более короткая запись axios ответа
export type AxiosPromise<T = any> = Promise<AxiosResponse<T>>;

export enum Language {
  RU = 'ru',
  EN = 'en',
}
