import React, { ChangeEvent, Component, Dispatch, SetStateAction } from 'react';
import { AxiosResponse } from 'axios';

// Тип для передачи других компонент в качестве props
export type ComponentType<T = any> = typeof Component | React.FC<T>;

export type ChangeType<T = HTMLInputElement> = ChangeEvent<T>;

<<<<<<< HEAD
// Тип для функции изменения сосотояние (useState)
=======
//Тип для функции изменения состояния (useState)
>>>>>>> feature/ID-5-chats

export type SetStateType<T = any> = Dispatch<SetStateAction<T>>;

// Более короткая запись axios ответа
export type AxiosPromise<T = any> = Promise<AxiosResponse<T>>;
