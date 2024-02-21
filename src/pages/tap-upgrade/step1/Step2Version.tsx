import { Collapse, CollapseProps } from 'antd';
import React from 'react';
import '../../../index.css';
import ToolInfo from '../components/ToolInfo';
import ChooseVersion from './ChooseVersion';

const Step2Version: React.FC = () => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Tool Information',
      children: <ToolInfo />,
    },
    {
      key: '2',
      label: 'TAP Information',
      children: <ChooseVersion />,
    },
  ];

  return (
    <div>
      <Collapse defaultActiveKey={['1', '2']} ghost items={items} />
    </div>
  );
};

export default Step2Version;
