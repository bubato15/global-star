import * as React from 'react';
import { StatisticProps } from '../types';

export const Statistic: React.FC<StatisticProps> = ({ value, label }) => (
  <div className="flex flex-col justify-center self-stretch my-auto">
    <div className="text-4xl font-semibold tracking-tighter leading-tight">
      {value}
    </div>
    <div className="mt-1 text-xs">{label}</div>
  </div>
);