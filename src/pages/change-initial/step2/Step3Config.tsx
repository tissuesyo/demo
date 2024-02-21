import { Collapse, CollapseProps } from 'antd';
import React from 'react';
import '../../../index.css';
import ToolInfo from '../components/ToolInfo';
import ConfigChgSummary from '../step3/ConfigChgSummary';
import ConfigInformation from './ConfigInformation';

const Step3Config: React.FC = () => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Tool Information',
      children: <ToolInfo />,
    },
    {
      key: '2',
      label: 'Revised Configs',
      children: <ConfigChgSummary isEditable={true} />,
    },
    {
      key: '3',
      label: 'Config Information',
      children: <ConfigInformation />,
    },
  ];

  return (
    <div>
      <Collapse defaultActiveKey={['1', '3']} ghost items={items} />
    </div>
  );
};

export default Step3Config;
