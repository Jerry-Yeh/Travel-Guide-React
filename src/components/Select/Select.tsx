import React, { useRef, useImperativeHandle } from 'react';

type Handler = Record<string, unknown>;

type Option = {
  label: string;
  value: string | number;
};

type Props = {
  id?: string;
  options: Option[];
  textColor?: string;
};

const Select: React.ForwardRefRenderFunction<Handler, Props> = (
  { id = `${Date.now()}`, options, textColor = 'primary' },
  ref,
) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  useImperativeHandle(ref, () => {
    return {};
  });

  return (
    <select
      ref={selectRef}
      id={id}
      className={`h-12 w-full rounded-md border-gray-200 text-${textColor} mb-1.5 px-7 cursor-pointer`}
    >
      {options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default React.forwardRef(Select);
