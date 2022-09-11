import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  bgColor?: string;
  textColor?: string;
  textSize?: string;
};

const Button = (props: Props) => {
  const { children, onClick, bgColor, textColor, textSize } = props;

  return (
    <button
      className={`bg-${bgColor} text-${textColor} text-${textSize} w-full h-12 rounded-md flex justify-center items-center`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
