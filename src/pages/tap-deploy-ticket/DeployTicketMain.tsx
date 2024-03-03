import { CopyOutlined, FileDoneOutlined, LinkOutlined, ReloadOutlined, RocketOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Collapse, CollapseProps, theme } from 'antd';
import React from 'react';
import ChangeList from './ChangeList';
import ToolCriteria from './ToolCriteria';

const DeployTicketMain: React.FC = () => {
  const { token } = theme.useToken();
  const collapseItems: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Tool Information',
      children: <ToolCriteria />,
    },
    {
      key: '2',
      label: 'Change Summary',
      children: <ChangeList />,
    }
    
  ];

  return (
    <>
    <div className="flex flex-col py-2 px-4">
      <div>
        <div>Title</div>
      </div>
      <div className="button-group">
        <Button icon={<FileDoneOutlined />}>Submit</Button>
        {/* <Button type="primary" icon={<FileDoneOutlined />}>Submit</Button> */}
        <Button icon={<RocketOutlined />}>Deploy</Button>
        <Button icon={<ReloadOutlined />}>Rollback</Button>        
        <Button icon={<CopyOutlined />}>Clone</Button>
        <Button icon={<UserAddOutlined />}>Assign</Button>
        <Button icon={<LinkOutlined />}>Copy Case URL</Button>
      </div>
      <div className="my-3">
        <Collapse defaultActiveKey={['1', '2']} ghost items={collapseItems} />
      </div>
    </div>
    </>
  );
}

export default DeployTicketMain;
