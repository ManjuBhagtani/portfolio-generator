import React from 'react';
import TemplateCol from './TemplateCol';

const Row = ({data}) => {
  return (
    <div className="row">
      {data.map(template => <TemplateCol template={template} />)}
    </div>
  )
}

export default Row;