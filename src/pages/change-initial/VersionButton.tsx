import { theme } from 'antd';
import React from 'react';

const VersionButton: React.FC = () => {
  const { token } = theme.useToken();
  const buttonStyle = { 
    display: 'flex',
    width: '25%',
    height: '80px',
    border: '1px solid #f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px'
  };

  return (
    <>
      <div style={buttonStyle}>
        <img
          alt="example"
          src="../setting.svg"
          style={{width: 60}}
        />
        <h3>Edit Config</h3>
        {/* <Button type="primary">Primary Button</Button> */}
      </div>
    </>
  );
};

export default VersionButton;
