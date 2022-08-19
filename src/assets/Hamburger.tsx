import React, { FC } from 'react';

type Props = {
  width?: number | string;
  height?: number | string;
  className?: string;
  onClick?: () => void;
};

const Svg: FC<Props> = ({
  width = 40,
  height = 40,
  className,
  onClick,
  ...rest
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    {...rest}
  >
    <path
      d="M10 20H30"
      stroke="#00856F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 12H30"
      stroke="#00856F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 28L30 28"
      stroke="#00856F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Svg;
