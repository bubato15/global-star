import * as React from 'react';
import { NavigationItemProps } from '../types';

export const NavigationItem: React.FC<NavigationItemProps> = ({ label, isActive }) => (
  <div className={`${isActive ? 'font-bold text-blue-600' : 'text-gray-500 mr-10'}`}>
    {label}
  </div>
);