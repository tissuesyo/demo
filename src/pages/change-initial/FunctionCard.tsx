import { CloudUploadOutlined, EditOutlined } from '@ant-design/icons';
import { Card, theme } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';

const FunctionCard: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <>
    <div style={{display: 'flex'}}>
      <Card
    style={{ width: 350, height: 215}}
    cover={
      <img
        alt="example"
        src="../setting.svg"
        style={{width: 100}}
      />
    }
    actions={[
      <EditOutlined key="edit" />,
      <CloudUploadOutlined />,
      // <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      // avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Revise Config"
      // description="This is the description"
    />
  </Card>
  </div>
    </>
  );
};

export default FunctionCard;
