import React, { useState, useCallback } from 'react';
import { Form, message } from 'antd';
import useFetch from 'use-http';
import {
  GridRowClickEvent,
  GridItemChangeEvent,
} from '@progress/kendo-react-grid';
import TitleBox from 'components/Programs/TitleBox';
import MainButtonSet, {
  initialButtonActions,
} from 'components/Programs/MainButtonSet';
import SubButtonSet from 'components/Programs/SubButtonSet';
import ServiceSearch from './Search';
import Grid from './Grid';
import { TITLE_TYPE_MAIN, TITLE_TYPE_SUB } from 'constants/common';
import { SampleServiceVoList } from './types';
import sampleServiceVoList from './sampleServiceVoList';

function SampleService() {
  const { post } = useFetch('http://10.1.121.16:8080');
  const [form] = Form.useForm();
  const [gridData, setGridData] = useState<SampleServiceVoList[]>([]);
  const [gridEditID, setGridEditID] = useState<string | null>(null);

  const isAuth = [true, false, false, true, true, false, false]; // [serarch, new, delete, cancel, save, excl, print];

  const buttonActions = {
    ...initialButtonActions,
    onSearch: async () => {
      /*
      const searchValues = await form.validateFields().then(values => values);
      console.log(searchValues);
      const responseData = await post(
        '/service/multiSampleServiceService.retrieveSampleServiceList.do',
        { sampleServiceVo: { ...searchValues } },
      );
      console.log(responseData);
      if (responseData.responseHeadVo.serviceResultCode === 'F') {
        message.error(responseData.responseHeadVo.responseMessageContents);
        return;
      }
      setGridData(responseData.sampleServiceVoList);
      */
      setGridData(sampleServiceVoList);
    },
  };

  const handleRowClick = useCallback(
    (e: GridRowClickEvent) => setGridEditID(() => e.dataItem.serviceId),
    [],
  );

  const handleItemChange = useCallback((e: GridItemChangeEvent) => {
    const inEditID = e.dataItem.serviceId;
    setGridData(gridData => {
      return gridData.map(item =>
        item.serviceId === inEditID
          ? { ...item, [String(e.field)]: e.value }
          : item,
      );
    });
  }, []);

  return (
    <>
      <TitleBox type={TITLE_TYPE_MAIN} title={'서비스 관리'}>
        <MainButtonSet isAuth={isAuth} buttonActions={buttonActions} />
      </TitleBox>
      <ServiceSearch form={form} />
      <TitleBox type={TITLE_TYPE_SUB} title={'서비스 내역'}>
        <SubButtonSet />
      </TitleBox>
      <Grid
        gridData={gridData}
        gridEditID={gridEditID}
        onRowClick={handleRowClick}
        onItemChange={handleItemChange}
      />
      <pre>{JSON.stringify(gridData, null, 2)}</pre>
    </>
  );
}

export default SampleService;
