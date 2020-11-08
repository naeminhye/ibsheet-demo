import React from 'react';
import { Form, Input } from 'antd';
import SearchBox from 'components/Programs/SearchBox';
import { FormInstance } from 'antd/lib/form';

type UserSearch = {
  form: FormInstance;
};

const initialValues = {
  serviceId: 'registSampleService',
  serviceNm: '',
};

function UserSearch({ form }: UserSearch) {
  return (
    <SearchBox>
      <Form layout={'inline'} form={form} initialValues={initialValues}>
        <Form.Item label="서비스ID" name="serviceId">
          <Input placeholder="서비스ID를 입력하세요" value="" />
        </Form.Item>
        <Form.Item label="서비스명" name="serviceNm">
          <Input placeholder="서비스명을 입력하세요" />
        </Form.Item>
      </Form>
    </SearchBox>
  );
}

export default React.memo(UserSearch);
