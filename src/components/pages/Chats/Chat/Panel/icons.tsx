import React, { FC, SVGProps } from 'react';
import { createConstaIcon } from '../../../../../utils/helpers/createConstaIcon';

const SendIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5648 13.783L4.49287 13.1505C3.67558 13.0654 2.97894 12.5204 2.69963 11.7476C2.29734 10.6346 2.87348 9.40621 3.98648 9.00392L16.6166 4.43883C17.1814 4.23467 17.7999 4.23467 18.3647 4.43883C19.7003 4.92157 20.3917 6.39563 19.909 7.73122L15.3439 20.3613C15.0646 21.1341 14.3679 21.6791 13.5506 21.7642C12.3735 21.8869 11.3199 21.032 11.1973 19.8549L10.5648 13.783ZM4.4991 10.6488C4.32341 10.7509 4.24031 10.967 4.31183 11.1649C4.36769 11.3194 4.50702 11.4284 4.67048 11.4454L11.4341 12.15C11.8372 12.192 12.1558 12.5106 12.1978 12.9137L12.9024 19.6773C12.9269 19.9127 13.1376 20.0837 13.373 20.0592C13.5365 20.0422 13.6758 19.9332 13.7317 19.7786L18.2968 7.1485C18.4577 6.7033 18.2272 6.21195 17.782 6.05103C17.5937 5.98298 17.3876 5.98298 17.1993 6.05103L4.5692 10.6161L4.4991 10.6488Z"
      fill="#3F8AE0"
    />
  </svg>
);

export default {
  SendIcon: createConstaIcon(SendIcon, 'SendIcon'),
};
