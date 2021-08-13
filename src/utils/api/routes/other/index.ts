import { instance } from '../../index';
import { IPhoto } from '../../../../types/interfaces/common';
import { AxiosPromise } from '../../../../types/common';

export const uploadImage = (img: File): AxiosPromise<IPhoto> => {
  const fakeForm = new FormData();
  fakeForm.append('/image', img);
  return instance.post('/images/', fakeForm, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
