import React, { useEffect } from 'react';
import IBSheetTable from 'components/IBSheetTable';
import { useIbsheet } from 'hooks/useIbsheet';

import { RootState } from 'store';

// redux-toolkit
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllUsers, selectUsers } from './slice';

import { ControlPanel, ControlButton } from './styles';

const options = {
  Cfg: {
    // InfoRowConfig: {
    //   Visible: true,
    //   Layout: ['Paging', 'Count'],
    //   Space: 'Bottom',
    // },
    // SearchMode: 2,
    Alternate: 2,
    EnterMode: 5,
    // ShowFilter: 1,
    CanEdit: 1,
    CanSelect: 1,
    // PageLength: 15,
    // Export: {
    //   Url: 'https://api.ibleaders.com/ibsheet/v8/',
    // },
  },
  Def: {
    Row: {
      ShowHint: 0,
      Tip: 0,
      CanFormula: 1,
    },
  },
  //틀고정 좌측 컬럼 설정
  LeftCols: [
    { Header: 'No.', Type: 'Int', Width: 80, Align: 'Center', Name: 'SEQ' },
  ],
  //중앙(메인) 컬럼 설정
  Cols: [
    {
      Header: 'Status',
      Type: 'Text',
      Width: 80,
      Align: 'Center',
      Name: 'Status',
      //열의 입력/수정/삭제 여부에 따라 내부값을 I/U/D로 수정해 준다.
      Formula: "Row.Deleted ? 'D' : Row.Added ? 'I' : Row.Changed ? 'U' : 'R'",
      //열 값에 따라 보여지는 문자를 다르게 보여준다.
      Format: { I: 'Added', U: 'Updated', D: 'Deleted', R: '' },
    },
    {
      Header: 'Select',
      Type: 'Bool',
      Name: 'select',
      OnChange: function (evtParam: any) {
        // Add to/Remove from selected rows list
      },
    },
    {
      Header: 'Name',
      Type: 'Text',
      Name: 'name',
      Width: 200,
      Align: 'Center',
      CanEdit: 1,
    },
    {
      Header: 'User Name',
      Type: 'Text',
      Name: 'username',
      Width: 150,
      Align: 'Center',
      CanEdit: 1,
    },
    {
      Header: 'Email',
      Type: 'Text',
      Name: 'email',
      Align: 'Center',
      MinWidth: 200,
      CanEdit: 1,
    },
    {
      Header: 'Phone',
      Type: 'Text',
      Name: 'phone',
      Align: 'Center',
      MinWidth: 150,
      CanEdit: 1,
    },
    // {
    //   Header: 'Gender',
    //   Type: 'Enum',
    //   Name: 'gender',
    //   MinWidth: 100,
    //   Align: 'Center',
    //   CanEdit: 1,
    //   Enum: '|Male|Female',
    //   EnumKeys: '|Male|Female',
    // },
    // {
    //   Header: 'Birthday',
    //   Type: 'Date',
    //   Name: 'birthday',
    //   MinWidth: 200,
    //   Align: 'Center',
    //   CanEdit: 1,
    //   Format: 'yyyy/MM/dd',
    //   EditFormat: 'yyyy/MM/dd',
    //   DataFormat: 'yyyy/MM/dd',
    // },
  ],
};

const SheetSample = () => {
  const ibSheet = useIbsheet('sheet-sample');

  // const { entities, loading } = useSelector(selectUsers);
  const entities = useSelector((state: RootState) => state.users.entities);
  const loading = useSelector((state: RootState) => state.users.loading);
  const dispatch = useDispatch();

  // const onDownExcel = () => {
  //   ibSheet.ibsheet.down2Excel({
  //     fileName: 'test.xlsx',
  //   });
  // };

  // const onLoadExcel = () => {
  //   ibSheet?.ibsheet?.loadExcel({ mode: 'HeaderMatch' });
  // };

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleAddBlankRow = () => {
    const sheet = ibSheet.ibsheet;
    const tRow = sheet.getTotalRowCount();
    const newRow = {
      // first_name: '',
      // last_name: '',
      // email: '',
      // gender: '',
      // birthday: '',
      ID: tRow + 1, // TODO
    };
    let next = sheet.getFirstRow();
    if (tRow > 0) {
      next = sheet.getNextSiblingRow(sheet.getLastRow()); //a new row is created above the specified row. If there is no value, it is created in the last row
    }
    sheet.addRow({
      next,
      init: newRow,
    });
  };

  const handleDeleteRows = () => {
    const sheet = ibSheet.ibsheet;

    // Get selected rows
    const selectedRows = sheet.getSelectedRows();
    if (selectedRows.length > 0) {
      sheet.deleteRows({ rows: selectedRows });
    }
  };

  const handleSaveData = () => {
    const sheet = ibSheet.ibsheet;
    // saveMode
    // 0: All data
    // 1: All of the data Deleted, except for the
    // 2: the modified data ( Added, Changed, Deleted)) ( default)
    // 3: The modified data ( Added, Changed, Deleted) + a mobile data ( Moved)
    let saveJson = sheet.getSaveJson({ saveMode: 2, validRequired: 1 });

    // dispatch(fetchAllUsers());
  };

  return (
    <div className="card">
      <div
        className="card-header"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h5 style={{ marginBottom: 0 }}>IBSheet Example</h5>
      </div>
      <div className="card-body">
        <ControlPanel>
          <ControlButton onClick={() => {}}>Search</ControlButton>
          <ControlButton type="primary" onClick={handleAddBlankRow}>
            Add
          </ControlButton>
          <ControlButton danger onClick={handleDeleteRows}>
            Delete
          </ControlButton>
          <ControlButton onClick={handleSaveData}>Save</ControlButton>
        </ControlPanel>

        <IBSheetTable
          id="sheet-sample"
          el="sheet-sample"
          data={entities ? entities : []}
          options={options}
        />
      </div>
    </div>
  );
};

export default SheetSample;
