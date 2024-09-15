import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Row({ children }: Props) {
  return (
    <div className="flex h-96 w-1/4 flex-row items-end justify-center gap-1">
      {children}
    </div>
  );
}
