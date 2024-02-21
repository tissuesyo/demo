import { Collapse, CollapseProps, theme } from 'antd';
import React, { useState } from 'react';
import ToolInfoOneLine from './components/ToolInfoOneLine';
import Step2Version from './step1/Step2Version';
import ConfigInformation from './step2/ConfigInformation';
import Step3Config from './step2/Step3Config';
import ConfigChgSummary from './step3/ConfigChgSummary';
import OiInfoForm from './step3/OiInfoForm';
import Step4Prev from './step3/Step4Prev';

const steps = [
  {
    title: 'Choose TAP Version',
    content: <Step2Version />,
  },
  {
    title: 'Revise Config',
    content: <Step3Config />,
  },
  {
    title: 'Preview',
    content: <Step4Prev />,
  },
];

const ChangeMainV2: React.FC = () => {
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

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Revised Configs',
      children: <ConfigChgSummary isEditable={true} />,
    },
    {
      key: '2',
      label: 'OI Information',
      children: <OiInfoForm />,
    },
  ];

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <ToolInfoOneLine />
      <ConfigInformation />
      {/* <FunctionCard />
      <VersionCard /> */}
    </div>
    <Collapse defaultActiveKey={['1', '3']} ghost items={items} />
    </>
  );
}

export default ChangeMainV2;
