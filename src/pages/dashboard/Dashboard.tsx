import React from 'react';
import { collapsed } from '../layout/services/LayoutPageService';

export const Dashboard: React.FC = () => {
  return <>Dashboard{collapsed.value}</>;
};
