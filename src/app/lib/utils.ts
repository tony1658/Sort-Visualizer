import {
  type ClassNameValue,
  twJoin,
} from 'tailwind-merge';

export const cnJoin = (...inputs: ClassNameValue[]) => {
  return twJoin(inputs);
};

export const getRandomArrayIndex = <T>(
  array: ReadonlyArray<T>
) => {
  return (array.length * Math.random()) << 0;
};
