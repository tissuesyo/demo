import { Collapse, CollapseProps } from 'antd';
import React from 'react';
import '../../../index.css';
import ConfigChgSummary from './ConfigChgSummary';
import OiInfoForm from './OiInfoForm';
import VersionChgSummary from './VersionChgSummary';

const Step4Prev: React.FC = () => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Version Change',
      children: <VersionChgSummary />,
    },
    {
      key: '2',
      label: 'Config Change',
      children: <ConfigChgSummary isEditable={false}/>,
    },
    {
      key: '3',
      label: 'OI Information',
      children: <OiInfoForm />,
    },
  ];

  return (
    <div>
      <Collapse defaultActiveKey={['1', '2', '3']} ghost items={items} />
    </div>
  );
};

export default Step4Prev;
