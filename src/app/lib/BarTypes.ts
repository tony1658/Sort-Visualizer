export const backgroundClassName = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  red: 'bg-red-500',
  orange: 'bg-orange-500',
} as const;
type BackgroundClassName = typeof backgroundClassName;
export type BackgroundColorOption =
  keyof typeof backgroundClassName;
export type BackgroundColorClassName =
  BackgroundClassName[BackgroundColorOption];

export const heightClassNames = [
  'h-4',
  'h-5',
  'h-6',
  'h-7',
  'h-8',
  'h-9',
  'h-10',
  'h-11',
  'h-12',
  'h-14',
  'h-16',
  'h-20',
  'h-24',
  'h-28',
  'h-32',
  'h-36',
  'h-40',
  'h-44',
  'h-48',
  'h-52',
  'h-56',
  'h-60',
  'h-64',
  'h-72',
  'h-80',
  'h-96',
] as const;
type HeightClassNames = typeof heightClassNames;
export type HeightOption = HeightClassNames[number];
