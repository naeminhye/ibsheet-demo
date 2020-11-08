import React from 'react';
import { Space, Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

function SubButtonSet() {
  return (
    <Space size={5} style={{ float: 'right' }}>
      <Button icon={<PlusOutlined />} type="primary" ghost>
        행추가
      </Button>
      <Button icon={<MinusOutlined />} danger>
        행삭제
      </Button>
    </Space>
  );
}

export default React.memo(SubButtonSet);
