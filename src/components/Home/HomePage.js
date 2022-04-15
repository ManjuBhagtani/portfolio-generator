import React from 'react';
import UIConstants from '../Constants/UIConstants';
import TemplateTable from './TemplateTable';

const HomePage = () => {
  return (
    <TemplateTable
        templates={UIConstants.Templates}
    />          
  )
}

export default HomePage;