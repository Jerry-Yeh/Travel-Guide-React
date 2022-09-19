import React, { useRef, useImperativeHandle } from 'react';

type Handler = {
  focus: () => void;
};

type Props = {
  id?: string;
  label?: string;
  textColor?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: () => void;
  onBlur?: () => void;
};

const Input: React.ForwardRefRenderFunction<Handler, Props> = (
  { id = `${Date.now()}`, label, textColor = 'primary', ...rest },
  ref,
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focus = () => {
    inputRef.current?.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus,
    };
  });

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        ref={inputRef}
        id={id}
        {...rest}
        className={`w-full h-12 rounded-md border-gray-200 bg-gray-50 text-${textColor} mb-1.5 px-7`}
      />
    </div>
  );
};

export default React.forwardRef(Input);
