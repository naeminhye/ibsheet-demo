import React from 'react';
import { Form, Input } from 'antd';
import SearchBox from 'components/Programs/SearchBox';

function UserSearch() {
  const [form] = Form.useForm();

  return (
    <SearchBox>
      <Form layout={'inline'} form={form}>
        <Form.Item label="사번" name="userid" required={true}>
          <Input placeholder="사번을 입력하세요" />
        </Form.Item>
        <Form.Item label="사용자명" name="username">
          <Input placeholder="사용자명을 입력하세요" />
        </Form.Item>
      </Form>
    </SearchBox>
  );
}

export default UserSearch;
