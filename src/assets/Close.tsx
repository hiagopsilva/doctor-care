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
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    {...rest}
  >
    <path
      d="M30 10L10 30M10 10L30 30"
      stroke="#FFFAF1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Svg;
