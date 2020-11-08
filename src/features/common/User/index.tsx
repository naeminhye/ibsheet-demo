import React from 'react';
import TitleBox from 'components/Programs/TitleBox';
import MainButtonSet from 'components/Programs/MainButtonSet';
import SubButtonSet from 'components/Programs/SubButtonSet';
import UserSearch from './Search';
import Grid from './Grid';

function User() {
  return (
    <>
      <TitleBox type={'main'} title={'사용자관리'}>
        <MainButtonSet />
      </TitleBox>
      <UserSearch />
      <TitleBox type={'sub'} title={'데이터 그리드'}>
        <SubButtonSet />
      </TitleBox>
      <Grid />
    </>
  );
}

export default User;
