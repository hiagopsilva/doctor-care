import React, { FC } from 'react';

type Props = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

const Svg: FC<Props> = ({ width = 40, height = 40, className, ...rest }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M10 20H30"
      stroke="#FFFAF1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 12H30"
      stroke="#FFFAF1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 28L30 28"
      stroke="#FFFAF1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Svg;
