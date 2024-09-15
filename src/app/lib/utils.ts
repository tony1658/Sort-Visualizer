import {
  type ClassNameValue,
  twJoin,
} from 'tailwind-merge';

export const cnJoin = (...inputs: ClassNameValue[]) => {
  return twJoin(inputs);
};

