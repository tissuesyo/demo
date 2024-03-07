import { CopyOutlined, FileDoneOutlined, LinkOutlined, ReloadOutlined, RocketOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Input, Switch, Tabs, theme } from 'antd';
import React, { useState } from 'react';
import ToolCriteria from './ToolCriteria';

const DeployTicketMain: React.FC = () => {
  const [isCreateMode, setDisplayMode] = useState(true);
  const { token } = theme.useToken();
  const tabs = [
    {
      label: 'Change Information',
      key: 'changeList',
      children: <ToolCriteria />,
    }
  ]

  const changeDisplayMode = (isCreateMode: boolean) => {
    setDisplayMode(isCreateMode);
  };

  return (
    <>
    <div className="flex flex-col py-2 px-4">
      <div className='mb-3'>
        <div><Input placeholder="Please input title" /></div>
      </div>
      <div className="flex justify-between">
        <div className="button-group">
          <Button icon={<FileDoneOutlined />}>Submit</Button>
          {/* <Button type="primary" icon={<FileDoneOutlined />}>Submit</Button> */}
          {
            !isCreateMode && <>
            <Button icon={<RocketOutlined />}>Deploy</Button>
            <Button icon={<ReloadOutlined />}>Rollback</Button>        
            <Button icon={<CopyOutlined />}>Clone</Button>
            <Button icon={<UserAddOutlined />}>Assign</Button>
            <Button icon={<LinkOutlined />}>Copy Case URL</Button>
            </>
          }
        </div>
        <Switch checkedChildren="Create" unCheckedChildren="Edit" defaultChecked onChange={changeDisplayMode} className='float-right'/>
      </div>
      <div className="my-3">
        {/* <Collapse defaultActiveKey={['1', '2']} ghost items={collapseItems} /> */}
        {/* <ToolCriteria />
        <ChangeList /> */}
        <Tabs type="card" items={tabs}/>
      </div>
    </div>
    </>
  );
}

export default DeployTicketMain;
