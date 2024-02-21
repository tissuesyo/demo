import { EditOutlined } from '@ant-design/icons';
import { Card, theme } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';


const VersionCard: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <>
    <div style={{display: 'flex'}}>
      <Card
    style={{ width: 350 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <EditOutlined key="edit" />,
    ]}
  >
    <Meta
      // avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Update Version"
      // description="This is the description"
    />
  </Card>
  </div>
    </>
  );
};

export default VersionCard;
