import { FileDoneOutlined } from '@ant-design/icons';
import { Button, theme } from 'antd';
import React, { useState } from 'react';
import ToolInfoOneLine from './components/ToolInfoOneLine';
import ConfigInformation from './step2/ConfigInformation';

const TapUpgradeMain: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    color: token.colorTextTertiary,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    padding: 10,
  };

  const minBtnStyle = {
    width: '100px',
    margin: '0 8px'
  };

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <ToolInfoOneLine />
      <div className='column-container' style={{height: 'calc(100vh - 10px)'}}>
        <ConfigInformation />
        <Button type="primary" icon={<FileDoneOutlined />} size='small'>Preview Change</Button>
      </div>
    </div>
    </>
  );
}

export default TapUpgradeMain;
