import React, { FC, SVGProps } from 'react';
import { createConstaIcon } from '../../../utils/helpers/createConstaIcon';

const UserIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 18 18"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 4.5C13.5 2.01375 11.4862 0 9 0C6.51375 0 4.5 2.01375 4.5 4.5C4.5 6.98625 6.51375 9 9 9C11.4862 9 13.5 6.98625 13.5 4.5ZM0 15.75V16.8694C0 17.4938 0.506198 18 1.13063 18H16.8694C17.4938 18 18 17.4938 18 16.8694V15.75C18 11.8125 12.0037 10.6875 9 10.6875C5.99625 10.6875 0 11.8125 0 15.75Z" />
  </svg>
);

const CardsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2.56389 0H5.43612C6.32763 0 6.65092 0.0928257 6.97685 0.267133C7.30277 0.44144 7.55856 0.697228 7.73287 1.02315C7.90717 1.34908 8 1.67237 8 2.56389V5.43612C8 6.32763 7.90717 6.65092 7.73287 6.97685C7.55856 7.30277 7.30277 7.55856 6.97685 7.73287C6.65092 7.90717 6.32763 8 5.43612 8H2.56389C1.67237 8 1.34908 7.90717 1.02315 7.73287C0.697228 7.55856 0.44144 7.30277 0.267133 6.97685C0.0928257 6.65092 0 6.32763 0 5.43612V2.56389C0 1.67237 0.0928257 1.34908 0.267133 1.02315C0.44144 0.697228 0.697228 0.44144 1.02315 0.267133C1.34908 0.0928257 1.67237 0 2.56389 0ZM12.5639 0H15.4361C16.3276 0 16.6509 0.0928257 16.9768 0.267133C17.3028 0.44144 17.5586 0.697228 17.7329 1.02315C17.9072 1.34908 18 1.67237 18 2.56389V5.43612C18 6.32763 17.9072 6.65092 17.7329 6.97685C17.5586 7.30277 17.3028 7.55856 16.9768 7.73287C16.6509 7.90717 16.3276 8 15.4361 8H12.5639C11.6724 8 11.3491 7.90717 11.0232 7.73287C10.6972 7.55856 10.4414 7.30277 10.2671 6.97685C10.0928 6.65092 10 6.32763 10 5.43612V2.56389C10 1.67237 10.0928 1.34908 10.2671 1.02315C10.4414 0.697228 10.6972 0.44144 11.0232 0.267133C11.3491 0.0928257 11.6724 0 12.5639 0ZM2.56389 10H5.43612C6.32763 10 6.65092 10.0928 6.97685 10.2671C7.30277 10.4414 7.55856 10.6972 7.73287 11.0232C7.90717 11.3491 8 11.6724 8 12.5639V15.4361C8 16.3276 7.90717 16.6509 7.73287 16.9768C7.55856 17.3028 7.30277 17.5586 6.97685 17.7329C6.65092 17.9072 6.32763 18 5.43612 18H2.56389C1.67237 18 1.34908 17.9072 1.02315 17.7329C0.697228 17.5586 0.44144 17.3028 0.267133 16.9768C0.0928257 16.6509 0 16.3276 0 15.4361V12.5639C0 11.6724 0.0928257 11.3491 0.267133 11.0232C0.44144 10.6972 0.697228 10.4414 1.02315 10.2671C1.34908 10.0928 1.67237 10 2.56389 10ZM12.5639 10H15.4361C16.3276 10 16.6509 10.0928 16.9768 10.2671C17.3028 10.4414 17.5586 10.6972 17.7329 11.0232C17.9072 11.3491 18 11.6724 18 12.5639V15.4361C18 16.3276 17.9072 16.6509 17.7329 16.9768C17.5586 17.3028 17.3028 17.5586 16.9768 17.7329C16.6509 17.9072 16.3276 18 15.4361 18H12.5639C11.6724 18 11.3491 17.9072 11.0232 17.7329C10.6972 17.5586 10.4414 17.3028 10.2671 16.9768C10.0928 16.6509 10 16.3276 10 15.4361V12.5639C10 11.6724 10.0928 11.3491 10.2671 11.0232C10.4414 10.6972 10.6972 10.4414 11.0232 10.2671C11.3491 10.0928 11.6724 10 12.5639 10Z" />
  </svg>
);

const ChatsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8.53846 0.75C9.66689 0.75 10.7442 0.937624 11.7302 1.27846C11.3163 1.91848 11.0769 2.67876 11.0769 3.49445C11.0769 5.76802 12.9367 7.61112 15.2308 7.61112C15.871 7.61112 16.4774 7.46756 17.019 7.21116C17.0572 7.49147 17.0769 7.77802 17.0769 8.06852C17.0769 12.1104 13.2541 15.387 8.53846 15.387C7.73184 15.387 6.95134 15.2912 6.21163 15.112C5.24288 15.9669 3.6257 16.6758 1.36162 17.2382C1.26395 17.2625 1.16061 17.2489 1.07268 17.2003C0.881953 17.0948 0.813652 16.856 0.920125 16.667L1.0847 16.3704C1.81179 15.0409 2.24727 13.9658 2.39113 13.1451C0.910116 11.8307 0 10.0407 0 8.06852C0 4.02661 3.8228 0.75 8.53846 0.75ZM15.2308 0.75C16.7602 0.75 18 1.97873 18 3.49445C18 5.01016 16.7602 6.23889 15.2308 6.23889C13.7014 6.23889 12.4615 5.01016 12.4615 3.49445C12.4615 1.97873 13.7014 0.75 15.2308 0.75Z" />
  </svg>
);

const CalendarIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 0.75C13.5 0.335786 13.1642 0 12.75 0C12.3358 0 12 0.335786 12 0.75L12.0015 1.50524C11.8381 1.50175 11.6651 1.5 11.4813 1.5H6.51874C6.33522 1.5 6.1624 1.50175 5.9993 1.50523L6 0.75C6 0.335786 5.66421 0 5.25 0C4.83579 0 4.5 0.335786 4.5 0.75L4.50023 1.61974C3.86991 1.71995 3.46193 1.88187 3.0521 2.10105C2.31876 2.49324 1.74324 3.06876 1.35105 3.8021C0.994739 4.46834 0.789751 5.12968 0.75 6.75V7.26874L0.751001 12.4659C0.767002 14.2954 0.974545 14.9939 1.35105 15.6979C1.74324 16.4312 2.31876 17.0068 3.0521 17.399C3.72676 17.7598 4.3964 17.9654 6.06121 17.996L6.51874 18H11.4813C13.4872 18 14.2146 17.7911 14.9479 17.399C15.6812 17.0068 16.2568 16.4312 16.649 15.6979C17.0098 15.0232 17.2154 14.3536 17.246 12.6888L17.25 12.2313V6.75L17.2448 6.7493C17.2102 5.12968 17.0053 4.46834 16.649 3.8021C16.2568 3.06876 15.6812 2.49324 14.9479 2.10105C14.5382 1.88196 14.1304 1.72008 13.5005 1.61986L13.5 0.75ZM6.30653 3.00069H11.6935C11.8011 3.00142 11.9037 3.00273 12.0018 3.00465L12 3.75C12 4.16421 12.3358 4.5 12.75 4.5C13.1642 4.5 13.5 4.16421 13.5 3.75L13.5008 3.14443C13.7862 3.21036 14.0121 3.30164 14.2405 3.42377C14.7124 3.67616 15.0738 4.03756 15.3262 4.5095C15.5941 5.01032 15.7135 5.49951 15.7427 6.62989L15.7448 6.75L2.25463 6.74898C2.27843 5.53319 2.3967 5.02756 2.67377 4.5095C2.92616 4.03756 3.28756 3.67616 3.7595 3.42377C3.98792 3.30161 4.21392 3.21032 4.49944 3.14438L4.5 3.75C4.5 4.16421 4.83579 4.5 5.25 4.5C5.66421 4.5 6 4.16421 6 3.75V3.0045L6.30653 3.00069ZM12.7845 12C13.1091 12 13.3647 12.0609 13.5786 12.1753C13.7924 12.2897 13.9603 12.4576 14.0747 12.6714C14.1891 12.8853 14.25 13.1409 14.25 13.4655V13.5345C14.25 13.8591 14.1891 14.1147 14.0747 14.3286C13.9603 14.5424 13.7924 14.7103 13.5786 14.8247C13.3647 14.9391 13.1091 15 12.7845 15H12.7155C12.3909 15 12.1353 14.9391 11.9214 14.8247C11.7076 14.7103 11.5397 14.5424 11.4253 14.3286C11.3109 14.1147 11.25 13.8591 11.25 13.5345V13.4655C11.25 13.1409 11.3109 12.8853 11.4253 12.6714C11.5397 12.4576 11.7076 12.2897 11.9214 12.1753C12.1353 12.0609 12.3909 12 12.7155 12H12.7845Z"
    />
  </svg>
);

const MarketIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 0C11.5313 0 13.5833 2.06638 13.5833 4.61538H15.1936C15.9086 4.61538 16.1679 4.69036 16.4293 4.83115C16.6908 4.97193 16.8959 5.17853 17.0357 5.44178C17.1755 5.70503 17.25 5.96614 17.25 6.68621V12.4545C17.25 14.3186 17.0479 15.0424 16.6684 15.7569C16.2889 16.4715 15.7321 17.0322 15.0225 17.4144C14.3129 17.7965 13.5942 18 11.743 18H6.25703C4.40583 18 3.68706 17.7965 2.97749 17.4144C2.26792 17.0322 1.71105 16.4715 1.33157 15.7569C0.952089 15.0424 0.75 14.3186 0.75 12.4545V6.68621C0.75 5.96614 0.824454 5.70503 0.964263 5.44178C1.10407 5.17853 1.30924 4.97193 1.57066 4.83115C1.83207 4.69036 2.09138 4.61538 2.80645 4.61538H4.41667C4.41667 2.06638 6.4687 0 9 0ZM12.8094 6.23077H12.7531C12.5755 6.23077 12.4429 6.2629 12.3309 6.32324C12.2188 6.38358 12.1309 6.47212 12.071 6.58494C12.0111 6.69776 11.9792 6.83129 11.9792 7.01015V7.06678C11.9792 7.24563 12.0111 7.37916 12.071 7.49198C12.1309 7.60481 12.2188 7.69335 12.3309 7.75368C12.4429 7.81402 12.5755 7.84615 12.7531 7.84615H12.8094C12.987 7.84615 13.1196 7.81402 13.2316 7.75368C13.3437 7.69335 13.4316 7.60481 13.4915 7.49198C13.5514 7.37916 13.5833 7.24563 13.5833 7.06678V7.01015C13.5833 6.83129 13.5514 6.69776 13.4915 6.58494C13.4316 6.47212 13.3437 6.38358 13.2316 6.32324C13.1196 6.2629 12.987 6.23077 12.8094 6.23077ZM5.24687 6.23077H5.19063C5.01302 6.23077 4.88041 6.2629 4.76838 6.32324C4.65634 6.38358 4.56841 6.47212 4.50849 6.58494C4.44858 6.69776 4.41667 6.83129 4.41667 7.01015V7.06678C4.41667 7.24563 4.44858 7.37916 4.50849 7.49198C4.56841 7.60481 4.65634 7.69335 4.76838 7.75368C4.88041 7.81402 5.01302 7.84615 5.19063 7.84615H5.24687C5.42448 7.84615 5.55709 7.81402 5.66912 7.75368C5.78116 7.69335 5.86909 7.60481 5.92901 7.49198C5.98892 7.37916 6.02083 7.24563 6.02083 7.06678V7.01015C6.02083 6.83129 5.98892 6.69776 5.92901 6.58494C5.86909 6.47212 5.78116 6.38358 5.66912 6.32324C5.55709 6.2629 5.42448 6.23077 5.24687 6.23077ZM9 1.61538C7.35465 1.61538 6.02083 2.95853 6.02083 4.61538H11.9792C11.9792 2.95853 10.6453 1.61538 9 1.61538Z" />
  </svg>
);

const VideoIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.56072 2.625C10.707 2.625 11.1226 2.75181 11.5417 2.98992C11.9607 3.22804 12.2896 3.57746 12.5137 4.0227C12.7378 4.46794 12.8571 4.90957 12.8571 6.12745V11.8725C12.8571 13.0904 12.7378 13.5321 12.5137 13.9773C12.2896 14.4225 11.9607 14.772 11.5417 15.0101C11.1226 15.2482 10.707 15.375 9.56072 15.375H3.29642C2.15019 15.375 1.73453 15.2482 1.31548 15.0101C0.896436 14.772 0.567566 14.4225 0.343456 13.9773C0.119347 13.5321 0 13.0904 0 11.8725V6.12745C0 4.90957 0.119347 4.46794 0.343456 4.0227C0.567566 3.57746 0.896436 3.22804 1.31548 2.98992C1.73453 2.75181 2.15019 2.625 3.29642 2.625H9.56072ZM17.8282 5.26326C17.9397 5.42099 18 5.61292 18 5.81018V12.1899C18 12.6928 17.6162 13.1006 17.1429 13.1006C16.9572 13.1006 16.7766 13.0365 16.6281 12.9181L14.7426 11.4134C14.6348 11.3274 14.5714 11.1925 14.5714 11.0493V6.9507C14.5714 6.80748 14.6348 6.67261 14.7426 6.5866L16.6281 5.08198C17.0066 4.77992 17.5439 4.86108 17.8282 5.26326Z" />
  </svg>
);

const ForumIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.6432 3.9521C17.3926 3.9521 18 4.55568 18 5.30022V17.1756C18 17.2948 17.9524 17.4091 17.8675 17.4934C17.6909 17.6689 17.4046 17.6689 17.228 17.4934L14.4 14.6834H5.85675C5.10744 14.6834 4.5 14.0798 4.5 13.3353V12.0006H12.5865C14.0851 12.0006 15.3 10.7934 15.3 9.30434V3.9521H16.6432ZM11.691 0.375C12.6901 0.375 13.5 1.17977 13.5 2.17249V8.86391C13.5 9.60846 12.8926 10.212 12.1432 10.212H3.6L0.772039 13.022C0.687226 13.1063 0.572194 13.1536 0.45225 13.1536C0.202479 13.1536 0 12.9524 0 12.7042V1.72312C0 0.978574 0.607438 0.375 1.35675 0.375H11.691Z" />
  </svg>
);

const ProgramIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.705 2.84461H8.53605V7.17282C8.53605 7.31283 8.4468 7.43957 8.30885 7.49512C8.2608 7.51447 8.2099 7.52393 8.1595 7.52393C8.0654 7.52393 7.9726 7.49102 7.9013 7.42852L6.72805 6.39956L5.55485 7.42852C5.44545 7.52449 5.28525 7.55068 5.14735 7.49512C5.00935 7.43957 4.92015 7.31283 4.92015 7.17282V2.84461H3.95735C3.6299 2.84461 3.36345 2.59609 3.36345 2.29084C3.36345 1.98549 3.6299 1.73706 3.95735 1.73706H14.5883C15.1019 1.73706 15.5201 1.34745 15.5201 0.868485C15.5201 0.38952 15.102 0 14.5883 0H3.9573C2.6023 0 1.5 1.0277 1.5 2.29079V15.3945C1.5 16.8312 2.75385 18 4.295 18H13.705C15.2462 18 16.5 16.8312 16.5 15.3945V5.45002C16.5 4.0135 15.2462 2.84461 13.705 2.84461Z" />
  </svg>
);

const KnowledgeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3 0H15C16.6569 0 18 1.34315 18 3V15C18 16.6569 16.6569 18 15 18H3C1.34315 18 0 16.6569 0 15V3C0 1.34315 1.34315 0 3 0ZM5 10H13C13.5523 10 14 9.55228 14 9C14 8.44772 13.5523 8 13 8H5C4.44772 8 4 8.44772 4 9C4 9.55228 4.44772 10 5 10ZM5 6H13C13.5523 6 14 5.55228 14 5C14 4.44772 13.5523 4 13 4H5C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6ZM5 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H5C4.44772 12 4 12.4477 4 13C4 13.5523 4.44772 14 5 14Z" />
  </svg>
);

const RatingIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.2487 5.66421L16.5502 6.06886C18.0469 6.20966 18.506 7.64321 17.3502 8.58504L13.9826 11.3293L15.2328 15.8C15.6434 17.2681 14.3696 18.1569 13.0938 17.2733L9.00198 14.4394L4.91013 17.2733C3.6395 18.1534 2.36054 17.2683 2.77115 15.8L4.02131 11.3293L0.653729 8.58504C-0.506876 7.63925 -0.0496564 6.21029 1.45349 6.06886L5.75419 5.66422L7.64897 1.38078C8.24234 0.0393801 9.76197 0.0400523 10.3548 1.38092L12.2487 5.66421Z" />
  </svg>
);

const GameIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.5 3C17.625 3 18 9.75 18 12C18 14.25 17.625 15 16.125 15C14.5751 15 13.1287 11.1429 12.0037 11.1429H6C4.875 11.1429 3.43223 15 1.875 15C0.375 15 0 14.25 0 12C0 9.75 0.375 3 4.5 3H13.5ZM5.14651 4.92857H4.93223C4.69553 4.92857 4.50365 5.12045 4.50365 5.35714L4.50343 6.42857H3.43223C3.22183 6.42857 3.04685 6.58018 3.01056 6.78011L3.00365 6.85714V7.07143C3.00365 7.30812 3.19553 7.5 3.43223 7.5H4.50343L4.50365 8.57143C4.50365 8.78182 4.65526 8.95681 4.85519 8.9931L4.93223 9H5.14651C5.38321 9 5.57508 8.80812 5.57508 8.57143L5.57486 7.5H6.64651C6.85691 7.5 7.03189 7.34839 7.06818 7.14846L7.07508 7.07143V6.85714C7.07508 6.62045 6.88321 6.42857 6.64651 6.42857H5.57486L5.57508 5.35714C5.57508 5.14675 5.42348 4.97176 5.22355 4.93548L5.14651 4.92857ZM13.0751 7.92857H12.8608C12.6241 7.92857 12.4322 8.12045 12.4322 8.35714V8.57143C12.4322 8.80812 12.6241 9 12.8608 9H13.0751C13.3118 9 13.5037 8.80812 13.5037 8.57143V8.35714C13.5037 8.12045 13.3118 7.92857 13.0751 7.92857ZM11.5751 6.42857H11.3608C11.1241 6.42857 10.9322 6.62045 10.9322 6.85714V7.07143C10.9322 7.30812 11.1241 7.5 11.3608 7.5H11.5751C11.8118 7.5 12.0037 7.30812 12.0037 7.07143V6.85714C12.0037 6.62045 11.8118 6.42857 11.5751 6.42857ZM14.5751 6.42857H14.3608C14.1241 6.42857 13.9322 6.62045 13.9322 6.85714V7.07143C13.9322 7.30812 14.1241 7.5 14.3608 7.5H14.5751C14.8118 7.5 15.0037 7.30812 15.0037 7.07143V6.85714C15.0037 6.62045 14.8118 6.42857 14.5751 6.42857ZM13.0751 4.92857H12.8608C12.6241 4.92857 12.4322 5.12045 12.4322 5.35714V5.57143C12.4322 5.80812 12.6241 6 12.8608 6H13.0751C13.3118 6 13.5037 5.80812 13.5037 5.57143V5.35714C13.5037 5.12045 13.3118 4.92857 13.0751 4.92857Z" />
  </svg>
);

export default {
  UserIcon: createConstaIcon(UserIcon, 'UserIcon'),
  CardsIcon: createConstaIcon(CardsIcon, 'CardsIcon'),
  ChatsIcon: createConstaIcon(ChatsIcon, 'ChatsIcon'),
  CalendarIcon: createConstaIcon(CalendarIcon, 'CalendarIcon'),
  MarketIcon: createConstaIcon(MarketIcon, 'MarketIcon'),
  VideoIcon: createConstaIcon(VideoIcon, 'VideoIcon'),
  ForumIcon: createConstaIcon(ForumIcon, 'ForumIcon'),
  ProgramIcon: createConstaIcon(ProgramIcon, 'ProgramIcon'),
  KnowledgeIcon: createConstaIcon(KnowledgeIcon, 'KnowledgeIcon'),
  RatingIcon: createConstaIcon(RatingIcon, 'RatingIcon'),
  GameIcon: createConstaIcon(GameIcon, 'GameIcon'),
};