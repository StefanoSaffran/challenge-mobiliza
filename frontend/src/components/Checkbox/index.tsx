import React, { InputHTMLAttributes, ChangeEvent } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  id: string;
  checked?: boolean;
  type: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
};

const Checkbox = ({
  type = 'checkbox',
  name,
  id,
  checked = false,
  onChange,
}: CheckboxProps) => {
  console.log('Checkbox: ', name, checked);

  return (
    <input
      type={type}
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
    />
  );
};
export default Checkbox;
