import React from 'react';
import loader from '@ibsheet/loader';

// TODO: type
const IBSheetTable = ({ id, el, data, options }: any) => {
  
  React.useEffect(() => {
    loader.createSheet({
      id,
      el,
      options,
      data,
    });

    return () => loader.removeSheet(id);
  }, [id, el, data, options]);

  return (
    <div style={{ height: '500px' }}>
      <div id={el} style={{ height: '100%' }} />
    </div>
  );
};

export default IBSheetTable;
