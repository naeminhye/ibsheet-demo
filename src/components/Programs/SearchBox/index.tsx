import React from 'react';
import styled from 'styled-components';

type SearchBox = {
  children: JSX.Element;
};

const StyledSearchDiv = styled.div`
  border: 1px solid#99c8ff;
  background: #f0f7ff;
  border-radius: 2px;
  padding: 4px 8px;
  margin-bottom: 8px;
`;

function SearchBox({ children }: SearchBox) {
  return <StyledSearchDiv>{children}</StyledSearchDiv>;
}

export default React.memo(SearchBox);
