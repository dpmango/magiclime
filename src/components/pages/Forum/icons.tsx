import React from 'react';
import { createConstaIcon } from 'utils/helpers/createConstaIcon';

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.61761 11.0317C8.73155 11.6424 7.65754 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5C12 7.65746 11.6425 8.73141 11.0318 9.61744L15.0011 13.5868L13.5869 15.001L9.61761 11.0317ZM10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5Z"
      fill="#002033"
      fillOpacity="0.35"
    />
  </svg>
);

export default {
  SearchIcon: createConstaIcon(SearchIcon, 'SearchIcon'),
};
