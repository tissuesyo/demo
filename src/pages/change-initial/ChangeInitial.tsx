import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button, Steps, message, theme } from 'antd';
import React, { useState } from 'react';
import FunctionCard from './FunctionCard';
import Step2Version from './step1/Step2Version';
import Step3Config from './step2/Step3Config';
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

const ChangeInitial: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

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
      <FunctionCard></FunctionCard>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current > 0 && (
          <Button style={minBtnStyle} onClick={() => prev()}>
            <ArrowLeftOutlined />
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" style={minBtnStyle} onClick={() => next()}>
            Next
            <ArrowRightOutlined />
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            style={minBtnStyle}
            onClick={() => message.success('Processing complete!')}
          >
            Done
          </Button>
        )}
      </div>
    </>
  );
};

export default ChangeInitial;
