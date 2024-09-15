'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const Bar = dynamic(() => import('./Bar'), { ssr: false });
import type { BackgroundColorOption } from '../lib/BarTypes';
import { heightClassNames } from '../lib/BarTypes';
import { getRandomArrayIndex } from '../lib/utils';
import Row from './Row';

type BarConfiguration = {
  id: string;
  heightIndex: number;
  colorOption: BackgroundColorOption;
};
const getRandomBarChartConfiguration = (
  amount: number
): BarConfiguration[] => {
  return Array.from({ length: amount }, () => ({
    id: nanoid(),
    heightIndex: getRandomArrayIndex(heightClassNames),
    colorOption: 'blue',
  }));
};

const vanillaSort = (barChart: BarConfiguration[]) => {
  const tempBarChart = [...barChart];
  tempBarChart.sort(
    (a: BarConfiguration, b: BarConfiguration): number =>
      a.heightIndex - b.heightIndex
  );
  return tempBarChart;
};

export default function SortingVisualizer() {
  const [barAmount] = useState(26);
  const [barChart] = useState(
    getRandomBarChartConfiguration(barAmount)
  );
  const [sortedBarChart] = useState(vanillaSort(barChart));

  return (
    <div className="flex h-screen items-center justify-center">
      <Row>
        {barChart.map((bar) => {
          return (
            <Bar
              key={bar.id}
              heightClassName={
                heightClassNames[bar.heightIndex]
              }
              backgroundColorOption={bar.colorOption}
            />
          );
        })}
      </Row>
      <Row>
        {sortedBarChart.map((bar) => {
          return (
            <Bar
              key={bar.id}
              heightClassName={
                heightClassNames[bar.heightIndex]
              }
              backgroundColorOption={bar.colorOption}
            />
          );
        })}
      </Row>
    </div>
  );
}
