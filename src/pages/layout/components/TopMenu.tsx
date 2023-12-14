import React from 'react';
import { TopBarComponent } from '../../../components/TopBarComponent';

export const TopMenu: React.FC<any> = ({ setAuthenticated }) => {
  return <TopBarComponent setAuthenticated={setAuthenticated} />;
};
