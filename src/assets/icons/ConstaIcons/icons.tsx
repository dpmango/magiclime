import React, { FC, SVGProps } from 'react';
import { createConstaIcon } from 'utils/helpers/createConstaIcon';

interface IBuilder {
  size: number[];
}

const ConstaIconsBuilder: FC<IBuilder> = ({ size, children, ...props }) => (
  <svg
    width={size[0]}
    height={size[1]}
    viewBox={`0 0 ${size[0]} ${size[1]}`}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);

const ServicesOutline: FC<SVGProps<SVGSVGElement>> = (props) => (
  <ConstaIconsBuilder size={[38, 38]} {...props}>
    <path d="M10.5166 21.8333C11.7598 21.8333 12.6022 21.996 13.4852 22.4682C14.359 22.9356 15.0646 23.6411 15.5319 24.5149C15.9516 25.2998 16.1268 26.0526 16.1606 27.0834L16.1668 27.4836V32.3164C16.1668 33.5597 16.0041 34.4021 15.5319 35.285C15.0646 36.1589 14.359 36.8644 13.4852 37.3318C12.7003 37.7515 11.9475 37.9267 10.9167 37.9604L10.5166 37.9667H5.68367C4.44041 37.9667 3.59803 37.804 2.71506 37.3318C1.84121 36.8644 1.13568 36.1589 0.668335 35.285C0.248586 34.5002 0.0734176 33.7474 0.0396733 32.7166L0.0334473 32.3164V27.4836C0.0334473 26.2403 0.196118 25.3979 0.668335 24.5149C1.13568 23.6411 1.84121 22.9356 2.71506 22.4682C3.49992 22.0485 4.25271 21.8733 5.2835 21.8395L5.68367 21.8333H10.5166ZM30.3166 21.8333C31.5598 21.8333 32.4022 21.996 33.2852 22.4682C34.159 22.9356 34.8646 23.6411 35.3319 24.5149C35.7516 25.2998 35.9268 26.0526 35.9606 27.0834L35.9668 27.4836V32.3164C35.9668 33.5597 35.8041 34.4021 35.3319 35.285C34.8646 36.1589 34.159 36.8644 33.2852 37.3318C32.5003 37.7515 31.7475 37.9267 30.7167 37.9604L30.3166 37.9667H25.4837C24.2404 37.9667 23.398 37.804 22.5151 37.3318C21.6412 36.8644 20.9357 36.1589 20.4683 35.285C20.0486 34.5002 19.8734 33.7474 19.8397 32.7166L19.8334 32.3164V27.4836C19.8334 26.2403 19.9961 25.3979 20.4683 24.5149C20.9357 23.6411 21.6412 22.9356 22.5151 22.4682C23.2999 22.0485 24.0527 21.8733 25.0835 21.8395L25.4837 21.8333H30.3166ZM10.5166 25.1333H5.68367C4.86645 25.1333 4.5701 25.2184 4.27134 25.3782C3.97257 25.538 3.7381 25.7724 3.57832 26.0712C3.43851 26.3326 3.35589 26.5922 3.33742 27.2005L3.33345 27.4836V32.3164C3.33345 33.1337 3.41854 33.43 3.57832 33.7288C3.7381 34.0275 3.97257 34.262 4.27134 34.4218C4.53276 34.5616 4.79233 34.6442 5.40061 34.6627L5.68367 34.6667H10.5166C11.3338 34.6667 11.6301 34.5816 11.9289 34.4218C12.2277 34.262 12.4621 34.0275 12.6219 33.7288C12.7617 33.4673 12.8443 33.2078 12.8628 32.5995L12.8668 32.3164V27.4836C12.8668 26.6663 12.7817 26.37 12.6219 26.0712C12.4621 25.7724 12.2277 25.538 11.9289 25.3782C11.6301 25.2184 11.3338 25.1333 10.5166 25.1333ZM30.3166 25.1333H25.4837C24.6665 25.1333 24.3701 25.2184 24.0713 25.3782C23.7726 25.538 23.5381 25.7724 23.3783 26.0712C23.2385 26.3326 23.1559 26.5922 23.1374 27.2005L23.1334 27.4836V32.3164C23.1334 33.1337 23.2185 33.43 23.3783 33.7288C23.5381 34.0275 23.7726 34.262 24.0713 34.4218C24.3328 34.5616 24.5923 34.6442 25.2006 34.6627L25.4837 34.6667H30.3166C31.1338 34.6667 31.4301 34.5816 31.7289 34.4218C32.0277 34.262 32.2621 34.0275 32.4219 33.7288C32.5617 33.4673 32.6443 33.2078 32.6628 32.5995L32.6668 32.3164V27.4836C32.6668 26.6663 32.5817 26.37 32.4219 26.0712C32.2621 25.7724 32.0277 25.538 31.7289 25.3782C31.4301 25.2184 31.1338 25.1333 30.3166 25.1333ZM29.3474 1.03712C30.1858 1.29126 30.8348 1.691 31.5728 2.37591L31.8954 2.68731L35.3128 6.10467C36.1919 6.98379 36.6725 7.69447 36.963 8.65273C37.2504 9.6011 37.2504 10.5989 36.963 11.5472C36.7088 12.3857 36.3091 13.0346 35.6242 13.7727L35.3128 14.0953L31.8954 17.5127C31.0163 18.3918 30.3056 18.8724 29.3474 19.1629C28.399 19.4503 27.4012 19.4503 26.4529 19.1629C25.6144 18.9087 24.9655 18.509 24.2274 17.8241L23.9048 17.5127L20.4874 14.0953C19.6083 13.2162 19.1277 12.5055 18.8372 11.5472C18.5498 10.5989 18.5498 9.6011 18.8372 8.65273C19.0914 7.81425 19.4911 7.16533 20.176 6.42726L20.4874 6.10467L23.9048 2.68731C24.7839 1.80819 25.4946 1.32756 26.4529 1.03712C27.4012 0.749672 28.399 0.749672 29.3474 1.03712ZM10.5166 2.03332C11.7598 2.03332 12.6022 2.19599 13.4852 2.66821C14.359 3.13555 15.0646 3.84108 15.5319 4.71493C16.0041 5.5979 16.1668 6.44028 16.1668 7.68355V12.5164C16.1668 13.7597 16.0041 14.6021 15.5319 15.485C15.0646 16.3589 14.359 17.0644 13.4852 17.5318C12.6022 18.004 11.7598 18.1667 10.5166 18.1667H5.68367C4.44041 18.1667 3.59803 18.004 2.71506 17.5318C1.84121 17.0644 1.13568 16.3589 0.668335 15.485C0.196118 14.6021 0.0334473 13.7597 0.0334473 12.5164V7.68355C0.0334473 6.44028 0.196118 5.5979 0.668335 4.71493C1.13568 3.84108 1.84121 3.13555 2.71506 2.66821C3.59803 2.19599 4.44041 2.03332 5.68367 2.03332H10.5166ZM27.4101 4.19524C27.1264 4.28123 26.8844 4.40635 26.4412 4.82341L26.2383 5.02076L22.8209 8.43812C22.243 9.01599 22.0936 9.2857 21.9954 9.60995C21.8971 9.93419 21.8971 10.2658 21.9954 10.59C22.0814 10.8737 22.2065 11.1157 22.6235 11.5589L22.8209 11.7618L26.2383 15.1792C26.8161 15.7571 27.0858 15.9065 27.4101 16.0047C27.7343 16.103 28.0659 16.103 28.3902 16.0047C28.6739 15.9187 28.9158 15.7936 29.359 15.3766L29.562 15.1792L32.9793 11.7618C33.5572 11.184 33.7066 10.9143 33.8049 10.59C33.9031 10.2658 33.9031 9.93419 33.8049 9.60995C33.7189 9.32623 33.5937 9.08427 33.1767 8.64109L32.9793 8.43812L29.562 5.02076C28.9841 4.4429 28.7144 4.29352 28.3902 4.19524C28.0659 4.09696 27.7343 4.09696 27.4101 4.19524ZM10.5166 5.33332H5.68367C4.86645 5.33332 4.5701 5.41841 4.27134 5.57819C3.97257 5.73797 3.7381 5.97245 3.57832 6.27121C3.41854 6.56998 3.33345 6.86632 3.33345 7.68355V12.5164C3.33345 13.3337 3.41854 13.63 3.57832 13.9288C3.7381 14.2275 3.97257 14.462 4.27134 14.6218C4.5701 14.7816 4.86645 14.8667 5.68367 14.8667H10.5166C11.3338 14.8667 11.6301 14.7816 11.9289 14.6218C12.2277 14.462 12.4621 14.2275 12.6219 13.9288C12.7817 13.63 12.8668 13.3337 12.8668 12.5164V7.68355C12.8668 6.86632 12.7817 6.56998 12.6219 6.27121C12.4621 5.97245 12.2277 5.73797 11.9289 5.57819C11.6301 5.41841 11.3338 5.33332 10.5166 5.33332Z" />
  </ConstaIconsBuilder>
);

const ChevronLeft: FC<SVGProps<SVGSVGElement>> = (props) => (
  <ConstaIconsBuilder size={[11, 18]} {...props}>
    <path d="M3.76777 9L9.88388 15.1161C10.372 15.6043 10.372 16.3957 9.88388 16.8839C9.39573 17.372 8.60427 17.372 8.11612 16.8839L1.11611 9.88388C0.62796 9.39573 0.627959 8.60427 1.11611 8.11612L8.11612 1.11612C8.60427 0.62796 9.39573 0.62796 9.88388 1.11612C10.372 1.60427 10.372 2.39573 9.88388 2.88388L3.76777 9Z" />
  </ConstaIconsBuilder>
);

const ChevronRight: FC<SVGProps<SVGSVGElement>> = (props) => (
  <ConstaIconsBuilder size={[6, 10]} {...props}>
    <path d="M4.11612 5L1.05806 1.94194C0.813981 1.69786 0.813981 1.30214 1.05806 1.05806C1.30214 0.813981 1.69786 0.813981 1.94194 1.05806L5.44194 4.55806C5.68602 4.80214 5.68602 5.19786 5.44194 5.44194L1.94194 8.94194C1.69786 9.18602 1.30214 9.18602 1.05806 8.94194C0.813981 8.69786 0.813981 8.30214 1.05806 8.05806L4.11612 5Z" />
  </ConstaIconsBuilder>
);

const Info: FC<SVGProps<SVGSVGElement>> = (props) => (
  <ConstaIconsBuilder size={[24, 24]} {...props}>
    <path d="M12 24C14.3734 24 16.6935 23.2962 18.6668 21.9776C20.6402 20.6591 22.1783 18.7849 23.0866 16.5922C23.9948 14.3995 24.2324 11.9867 23.7694 9.65892C23.3064 7.33115 22.1635 5.19295 20.4853 3.51472C18.8071 1.83649 16.6689 0.693605 14.3411 0.230582C12.0133 -0.232441 9.60051 0.00519943 7.4078 0.913451C5.21509 1.8217 3.34094 3.35977 2.02236 5.33316C0.703788 7.30655 0 9.62663 0 12C0.00344108 15.1815 1.26883 18.2318 3.51852 20.4815C5.76821 22.7312 8.81846 23.9966 12 24ZM12 5.00001C12.2967 5.00001 12.5867 5.08798 12.8334 5.2528C13.08 5.41762 13.2723 5.65189 13.3858 5.92598C13.4994 6.20007 13.5291 6.50167 13.4712 6.79264C13.4133 7.08361 13.2704 7.35089 13.0607 7.56067C12.8509 7.77044 12.5836 7.91331 12.2926 7.97118C12.0017 8.02906 11.7001 7.99936 11.426 7.88582C11.1519 7.77229 10.9176 7.58003 10.7528 7.33336C10.588 7.08669 10.5 6.79668 10.5 6.50001C10.5 6.10218 10.658 5.72065 10.9393 5.43934C11.2206 5.15804 11.6022 5.00001 12 5.00001ZM11 10H12C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12V18C14 18.2652 13.8946 18.5196 13.7071 18.7071C13.5196 18.8946 13.2652 19 13 19C12.7348 19 12.4804 18.8946 12.2929 18.7071C12.1054 18.5196 12 18.2652 12 18V12H11C10.7348 12 10.4804 11.8946 10.2929 11.7071C10.1054 11.5196 10 11.2652 10 11C10 10.7348 10.1054 10.4804 10.2929 10.2929C10.4804 10.1054 10.7348 10 11 10Z" />
  </ConstaIconsBuilder>
);

const Done: FC<SVGProps<SVGSVGElement>> = (props) => (
  <ConstaIconsBuilder size={[24, 18]} {...props}>
    <path d="M8.4 14.5685L2.04853 8.14137C1.5799 7.66716 0.820101 7.66716 0.351472 8.14137C-0.117157 8.61558 -0.117157 9.38442 0.351472 9.85863L7.55147 17.1443C8.0201 17.6186 8.7799 17.6186 9.24853 17.1443L23.6485 2.57291C24.1172 2.09871 24.1172 1.32986 23.6485 0.855656C23.1799 0.381448 22.4201 0.381448 21.9515 0.855656L8.4 14.5685Z" />
  </ConstaIconsBuilder>
);

const Close: FC<SVGProps<SVGSVGElement>> = (props) => (
  <ConstaIconsBuilder size={[14, 14]} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
    />
  </ConstaIconsBuilder>
);

const Blocked: FC<SVGProps<SVGSVGElement>> = (props) => (
  <ConstaIconsBuilder size={[16, 16]} {...props}>
    <path d="M8.00001 1.3335C4.32001 1.3335 1.33334 4.32016 1.33334 8.00016C1.33334 11.6802 4.32001 14.6668 8.00001 14.6668C11.68 14.6668 14.6667 11.6802 14.6667 8.00016C14.6667 4.32016 11.68 1.3335 8.00001 1.3335ZM8.00001 13.3335C5.05334 13.3335 2.66668 10.9468 2.66668 8.00016C2.66668 6.76683 3.08668 5.6335 3.79334 4.7335L11.2667 12.2068C10.3667 12.9135 9.23334 13.3335 8.00001 13.3335ZM12.2067 11.2668L4.73334 3.7935C5.63334 3.08683 6.76668 2.66683 8.00001 2.66683C10.9467 2.66683 13.3333 5.0535 13.3333 8.00016C13.3333 9.2335 12.9133 10.3668 12.2067 11.2668Z" />
  </ConstaIconsBuilder>
);

const Search: FC<SVGProps<SVGSVGElement>> = (props) => (
  <ConstaIconsBuilder size={[16, 16]} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.61761 11.0317C8.73155 11.6424 7.65754 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5C12 7.65746 11.6425 8.73141 11.0318 9.61744L15.0011 13.5868L13.5869 15.001L9.61761 11.0317ZM10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5Z"
      fill="#002033"
      fillOpacity="0.35"
    />
  </ConstaIconsBuilder>
);

const Refresh: FC<SVGProps<SVGSVGElement>> = (props) => (
  <ConstaIconsBuilder size={[17, 16]} {...props}>
    <path
      d="M14.0302 1.03335C14.4374 1.03335 14.7675 1.36168 14.7675 1.76669V4.33335C14.7675 4.73836 14.4374 5.06669 14.0302 5.06669H11.4493C11.0421 5.06669 10.712 4.73836 10.712 4.33335C10.712 3.92834 11.0421 3.60002 11.4493 3.60002H12.4019C11.3615 2.68666 9.99559 2.13335 8.49984 2.13335C5.46394 2.13335 2.96282 4.41474 2.63686 7.34726C2.59211 7.74982 2.2277 8.04008 1.82293 7.99558C1.41815 7.95108 1.12629 7.58867 1.17103 7.18611C1.57868 3.51871 4.70385 0.666687 8.49984 0.666687C10.33 0.666687 12.0043 1.33012 13.2928 2.42712V1.76669C13.2928 1.36168 13.6229 1.03335 14.0302 1.03335Z"
      fill="#0078D2"
    />
    <path
      d="M15.1767 8.00446C15.5815 8.04896 15.8734 8.41137 15.8286 8.81393C15.421 12.4813 12.2958 15.3334 8.49984 15.3334C6.66965 15.3334 4.99541 14.6699 3.70688 13.5729V14.2334C3.70688 14.6384 3.37675 14.9667 2.96951 14.9667C2.56226 14.9667 2.23213 14.6384 2.23213 14.2334V11.6667C2.23213 11.2617 2.56226 10.9334 2.96951 10.9334H5.55033C5.95757 10.9334 6.2877 11.2617 6.2877 11.6667C6.2877 12.0717 5.95757 12.4 5.55033 12.4H4.59776C5.63813 13.3134 7.00409 13.8667 8.49984 13.8667C11.5357 13.8667 14.0369 11.5853 14.3628 8.65278C14.4076 8.25022 14.772 7.95996 15.1767 8.00446Z"
      fill="#0078D2"
    />
  </ConstaIconsBuilder>
);

const Comment: FC<SVGProps<SVGSVGElement>> = (props) => (
  <ConstaIconsBuilder size={[20, 20]} {...props}>
    <path d="M5.49995 15.9H3.99995C2.01514 15.9 0.699951 14.5919 0.699951 12.6V4.20002C0.699951 2.20813 2.01514 0.900024 3.99995 0.900024H16C17.9848 0.900024 19.2999 2.20813 19.2999 4.20002V12.6C19.2999 14.5919 17.9848 15.9 16 15.9H11.5869L8.5225 19.1327C7.78939 19.8746 6.92199 20.0575 6.22641 19.5295C5.75913 19.1748 5.49995 18.5519 5.49995 18V15.9ZM10.3693 14.5681C10.6525 14.2693 11.0462 14.1 11.4579 14.1H16C16.9928 14.1 17.5 13.5956 17.5 12.6V4.20002C17.5 3.20443 16.9928 2.70002 16 2.70002H3.99995C3.00708 2.70002 2.49995 3.20443 2.49995 4.20002V12.6C2.49995 13.5956 3.00708 14.1 3.99995 14.1H6.39875C6.63745 14.1 6.86636 14.1948 7.03515 14.3636L7.12857 14.4729C7.23927 14.6256 7.29995 14.8103 7.29995 15.0012V17.8062L10.3693 14.5681Z" />
  </ConstaIconsBuilder>
);

const Lime: FC<SVGProps<SVGSVGElement>> = (props) => (
  <ConstaIconsBuilder size={[24, 24]} {...props}>
    <path
      d="M12.0001 24C18.5712 24 23.8981 18.6731 23.8981 12.102C23.8981 5.53087 18.5712 0.203949 12.0001 0.203949C5.42898 0.203949 0.102051 5.53087 0.102051 12.102C0.102051 18.6731 5.42898 24 12.0001 24Z"
      fill="#00395C"
      fillOpacity="0.8"
    />
    <path
      d="M23.1808 16.1798V16.1803C23.1245 16.3348 23.0648 16.4877 23.0021 16.6392C22.2134 18.5502 20.9411 20.211 19.3375 21.4688C18.7047 21.9652 18.0205 22.3988 17.2945 22.7606C15.8589 23.4745 14.2592 23.9072 12.5668 23.9864C10.533 23.2938 8.62251 22.1361 7.00096 20.5141C2.09998 15.6131 1.43904 8.07705 5.01913 2.46605C5.57666 1.59141 6.2376 0.763923 7.00101 0L7.92225 0.921236L8.41664 1.4161L8.78039 1.77985L9.19561 2.1946V2.19507L16.8064 9.80589H16.8069V9.80636L17.7087 10.7082H17.7092V10.7087L23.1808 16.1798Z"
      fill="#4AC688"
    />
    <path
      d="M23.1807 16.1804C23.1244 16.3348 23.0647 16.4878 23.002 16.6393C22.2133 18.5502 20.941 20.2111 19.3374 21.4689C18.7046 21.9652 18.0203 22.3989 17.2943 22.7607C14.0819 22.7704 10.867 21.5495 8.41601 19.099C3.53345 14.216 3.53345 6.29918 8.41648 1.41611L9.19545 2.19508L16.8063 9.8059L16.8068 9.80637L23.1807 16.1804Z"
      fill="#C9F4C9"
    />
    <path
      d="M23.1808 16.1798V16.1803C23.1244 16.3347 23.0647 16.4877 23.002 16.6392C22.2134 18.5501 20.941 20.211 19.3374 21.4688C18.7989 21.5684 18.2545 21.6286 17.7086 21.65C17.4085 21.6621 17.1069 21.6621 16.8068 21.6495C14.1805 21.5465 11.5838 20.5408 9.52084 18.6322C9.41111 18.5312 9.30231 18.4263 9.19548 18.3195C9.08865 18.2126 8.98375 18.1039 8.88273 17.9941C6.97421 15.9311 5.96846 13.334 5.86547 10.7082C5.85286 10.4076 5.85286 10.1065 5.865 9.80635C5.96794 7.17956 6.97369 4.58287 8.88273 2.5199C8.98375 2.41016 9.08814 2.30184 9.19548 2.19501L16.8063 9.80583H16.8068V9.8063L17.7086 10.7081H17.7091V10.7086L23.1808 16.1798Z"
      fill="#D4D65B"
    />
    <path
      d="M23.1807 16.1803C23.1244 16.3348 23.0647 16.4878 23.002 16.6393L8.46167 2.09892L8.78023 1.77985L9.19545 2.19507L16.8063 9.80589L16.8067 9.80636L23.1807 16.1803Z"
      fill="#C9F4C9"
    />
    <path
      d="M16.807 9.80624L17.7093 10.7084L17.7088 11.346V22.2462L16.8066 22.2458V21.6497V11.3465V10.7084V10.4438V10.0704L16.807 9.80624Z"
      fill="#C9F4C9"
    />
    <path
      d="M17.577 10.5763L16.939 9.93826L8.46173 18.4155L9.09975 19.0535L17.577 10.5763Z"
      fill="#C9F4C9"
    />
    <path
      d="M16.8066 9.80579L17.7093 10.7085H17.4446H17.0712H5.26927L5.2688 9.80625H5.865H16.169L16.8066 9.80579Z"
      fill="#C9F4C9"
    />
    <path
      d="M23.181 16.1798C23.1246 16.3343 23.0654 16.4872 23.0022 16.6387C22.2174 18.541 20.9533 20.1955 19.36 21.4514C18.7282 21.9491 18.0454 22.3843 17.3198 22.7475C15.8867 23.4648 14.289 23.9014 12.598 23.9849C11.888 23.745 11.1926 23.4483 10.5195 23.0948C16.992 20.1086 19.6849 12.6837 19.6849 12.6837L23.181 16.1798Z"
      fill="#32A066"
    />
    <path
      d="M23.1809 16.1798C23.1245 16.3343 23.0653 16.4872 23.0021 16.6387C22.2173 18.541 20.9532 20.1955 19.3599 21.4514C18.7281 21.9491 18.0453 22.3843 17.3197 22.7475C15.7346 22.7562 14.1481 22.4648 12.6523 21.8734C17.5893 18.4618 19.6848 12.6837 19.6848 12.6837L23.1809 16.1798Z"
      fill="#ADDBAD"
    />
    <path
      d="M23.181 16.1798C23.1246 16.3343 23.0654 16.4872 23.0022 16.6387C22.2174 18.541 20.9533 20.1955 19.36 21.4513C18.8122 21.5538 18.2581 21.616 17.703 21.6378C17.4029 21.65 17.1018 21.65 16.8012 21.6373C15.7337 21.5956 14.6712 21.4047 13.6475 21.0638C17.6408 17.8091 19.479 13.166 19.6683 12.6672L23.181 16.1798Z"
      fill="#D4D65B"
    />
    <path
      d="M16.8013 17.7402C17.132 17.2992 17.4321 16.8631 17.7031 16.4435V22.2337L16.8013 22.2332V17.7402Z"
      fill="#ADDBAD"
    />
    <path
      d="M23.181 16.1798C23.1247 16.3343 23.0654 16.4872 23.0023 16.6387L19.4839 13.1203C19.5805 12.895 19.6412 12.7386 19.6684 12.6672L23.181 16.1798Z"
      fill="#ADDBAD"
    />
  </ConstaIconsBuilder>
);

const Expand: FC<SVGProps<SVGSVGElement>> = (props) => (
  <ConstaIconsBuilder size={[24, 24]} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 1.35C15 0.604416 15.6044 0 16.35 0H22.65C23.3956 0 24 0.604416 24 1.35V7.65001C24 8.39559 23.3956 9.00001 22.65 9.00001C21.9044 9.00001 21.3 8.39559 21.3 7.65001V4.60919L15.8046 10.1046C15.2774 10.6318 14.4226 10.6318 13.8954 10.1046C13.3682 9.5774 13.3682 8.72262 13.8954 8.19542L19.3908 2.7H16.35C15.6044 2.7 15 2.09558 15 1.35Z"
      fill="#97B2C4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.1046 13.8954C10.6318 14.4226 10.6318 15.2774 10.1046 15.8046L4.60919 21.3H7.64727C8.39285 21.3 8.99727 21.9044 8.99727 22.65C8.99727 23.3956 8.39285 24 7.64727 24H1.35C0.604416 24 0 23.3956 0 22.65V16.35C0 15.6044 0.604416 15 1.35 15C2.09558 15 2.7 15.6044 2.7 16.35V19.3908L8.19542 13.8954C8.72262 13.3682 9.5774 13.3682 10.1046 13.8954Z"
      fill="#97B2C4"
    />
  </ConstaIconsBuilder>
);

const createIcon = (name: string, component: FC) => {
  return {
    [name]: createConstaIcon(component, name),
  };
};

const icons = {
  ...createIcon('ServicesOutline', ServicesOutline),
  ...createIcon('ChevronLeft', ChevronLeft),
  ...createIcon('ChevronRight', ChevronRight),
  ...createIcon('Info', Info),
  ...createIcon('Done', Done),
  ...createIcon('Close', Close),
  ...createIcon('Blocked', Blocked),
  ...createIcon('Search', Search),
  ...createIcon('Refresh', Refresh),
  ...createIcon('Comment', Comment),
  ...createIcon('Lime', Lime),
  ...createIcon('Expand', Expand),
};

export default icons;
