import styled from 'styled-components';
import Button from 'antd/es/button';

const ControlPanel = styled.div`
    margin: 16px 0;
    display: flex;
    justify-content: flex-end;
`
const ControlButton = styled(Button)`
  margin-left: 4px;
`

export { ControlPanel, ControlButton }