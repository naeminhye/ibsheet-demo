import React from 'react';
import { Space, Button } from 'antd';
import {
  SearchOutlined,
  PlusOutlined,
  DeleteOutlined,
  UndoOutlined,
  SaveOutlined,
  FileExcelOutlined,
  PrinterOutlined,
  CloseOutlined,
} from '@ant-design/icons';

type ButtonActions = {
  onSearch: Function;
  onNew: Function;
  onDelete: Function;
  onUndo: Function;
  onSave: Function;
  onDownloadExcel: Function;
  onPrint: Function;
  onClose: Function;
};

type MainButtonSet = {
  buttonActions?: ButtonActions;
  isAuth?: boolean[];
  isDisable?: boolean[];
};

export const initialButtonActions = {
  onSearch: () => console.log('Clicked Search Button'),
  onNew: () => console.log('Clicked New Button'),
  onDelete: () => console.log('Clicked Delete Button'),
  onUndo: () => console.log('Clicked Undo Button'),
  onSave: () => console.log('Clicked Save Button'),
  onDownloadExcel: () => console.log('Clicked DownloadExcel Button'),
  onPrint: () => console.log('Clicked Print Button'),
  onClose: () => console.log('Clicked Close Button'),
};
const initialAuth = [true, true, true, true, true, true, true];
const initialDisabled = [false, false, false, false, false, false, false];

const buttonStyle = (isAuth: boolean) => {
  return {
    display: isAuth ? 'inline' : 'none',
    marginRight: '4px',
  };
};

function MainButtonSet({
  buttonActions = initialButtonActions,
  isAuth = initialAuth,
  isDisable = initialDisabled,
}: MainButtonSet) {
  return (
    <Space size={0} style={{ float: 'right' }}>
      <Button
        icon={<SearchOutlined />}
        type="primary"
        disabled={isDisable[0]}
        style={buttonStyle(isAuth[0])}
        onClick={() => buttonActions.onSearch()}
      >
        조회
      </Button>
      <Button
        icon={<PlusOutlined />}
        type="primary"
        ghost
        disabled={isDisable[1]}
        style={buttonStyle(isAuth[1])}
        onClick={() => buttonActions.onNew()}
      >
        신규
      </Button>
      <Button
        icon={<DeleteOutlined />}
        danger
        disabled={isDisable[2]}
        style={buttonStyle(isAuth[2])}
        onClick={() => buttonActions.onDelete()}
      >
        삭제
      </Button>
      <Button
        icon={<UndoOutlined />}
        disabled={isDisable[3]}
        style={buttonStyle(isAuth[3])}
        onClick={() => buttonActions.onUndo()}
      >
        취소
      </Button>
      <Button
        icon={<SaveOutlined />}
        type="primary"
        disabled={isDisable[4]}
        style={buttonStyle(isAuth[4])}
        onClick={() => buttonActions.onSave()}
      >
        저장
      </Button>
      <Button
        icon={<FileExcelOutlined />}
        type="primary"
        disabled={isDisable[5]}
        style={buttonStyle(isAuth[5])}
        onClick={() => buttonActions.onDownloadExcel()}
      />
      <Button
        icon={<PrinterOutlined />}
        type="primary"
        disabled={isDisable[6]}
        style={buttonStyle(isAuth[6])}
        onClick={() => buttonActions.onPrint()}
      />
      <Button
        icon={<CloseOutlined />}
        onClick={() => buttonActions.onClose()}
      />
    </Space>
  );
}

export default React.memo(MainButtonSet);
