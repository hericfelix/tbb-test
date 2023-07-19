import React from 'react';

import { InputContainer } from './styles';
import { InputProps } from './types';

export function Input({ icon, style, ...rest }: InputProps) {
  rest.value;
  return (
    <InputContainer style={style}>
      <input {...rest} />
      {icon}
    </InputContainer>
  );
}
