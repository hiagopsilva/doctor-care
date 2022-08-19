import React, { FC } from 'react';

type Props = {
  width?: number | string;
  height?: number | string;
};

const Svg: FC<Props> = ({ width = 24, height = 24, ...rest }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
    <path
      d="M17.091 8.18182L10.091 15.1818L6.90918 12"
      stroke="#00856F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Svg;
