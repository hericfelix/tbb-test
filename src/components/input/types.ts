import { HTMLAttributes, ReactNode } from 'react';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  value?: string | number | readonly string[];
}
