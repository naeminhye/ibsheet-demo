import React from 'react';

export const CenterHeaderText = (props: any) => {
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      {props.title.split('<br />').map((str: string) => (
        <span>
          {str}
          <br />
        </span>
      ))}
    </div>
  );
};

export const CenterCellText = (props: any) => {
  return (
    <td>
      <div style={{ textAlign: 'center', wordBreak: 'break-all' }}>
        {props.dataItem[props.field]}
      </div>
    </td>
  );
};

export const RigthCellText = (props: any) => {
  return (
    <td>
      <div style={{ textAlign: 'center', wordBreak: 'break-all' }}>
        {props.dataItem[props.field]}
      </div>
    </td>
  );
};
