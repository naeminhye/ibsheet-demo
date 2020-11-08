import React from 'react';
import {
  Grid,
  GridColumn,
  GridRowClickEvent,
  GridItemChangeEvent,
} from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';
import { CenterHeaderText, CenterCellText } from 'components/Grid/CellStyles';
import { SampleServiceVoList } from './types';

type Gird = {
  gridData: SampleServiceVoList[];
  gridEditID: string | null;
  onRowClick: (e: GridRowClickEvent) => void;
  onItemChange: (e: GridItemChangeEvent) => void;
};

function Gird({ gridData, gridEditID, onRowClick, onItemChange }: Gird) {
  return (
    <div style={{ display: 'flex', flex: 1 }}>
      <Grid
        data={gridData.map(item => ({
          ...item,
          inEdit: item.serviceId === gridEditID,
        }))}
        editField="inEdit"
        onRowClick={onRowClick}
        onItemChange={onItemChange}
        style={{ height: '100%', width: '100%' }}
      >
        <GridColumn
          field="serviceId"
          title="서비스ID"
          width="300px"
          headerCell={CenterHeaderText}
          editable={false}
        />
        <GridColumn
          field="serviceNm"
          title="서비스명"
          width="250px"
          headerCell={CenterHeaderText}
        />
        <GridColumn
          field="description"
          title="서비스설명"
          width="350px"
          headerCell={CenterHeaderText}
        />
        <GridColumn
          field="featureCd"
          title="기능코드"
          width="90px"
          headerCell={CenterHeaderText}
        />
        <GridColumn
          field="businessTypecd"
          title="업무분류코드"
          width="110px"
          headerCell={CenterHeaderText}
        />
        <GridColumn
          field="transactionLogUseyn"
          title="거래로그<br />사용여부"
          width="140px"
          headerCell={CenterHeaderText}
        />
        <GridColumn
          field="authorityUseyn"
          title="권한사용여부"
          width="110px"
          headerCell={CenterHeaderText}
        />
        <GridColumn
          field="createdAt"
          title="등록일시"
          width="110px"
          headerCell={CenterHeaderText}
        />
        <GridColumn
          field="createdBy"
          title="등록자"
          width="80px"
          headerCell={CenterHeaderText}
        />
      </Grid>
    </div>
  );
}

export default Gird;
