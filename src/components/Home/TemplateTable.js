import React from 'react';
import Row from './Row';

const TemplateTable = ({templates}) => {
  return (
      <div className='container-fluid mt-5'>
        {templates.map(row => <Row data={row}/>)}
      </div>
  )
}

export default TemplateTable;