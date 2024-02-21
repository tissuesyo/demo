import { ArrowUpOutlined } from '@ant-design/icons';
import { transferDsOptions } from '@tmc/utils/formatUtil';
import { Button, Descriptions, DescriptionsProps, Select } from 'antd';
import { FAB_RESP, TOOL_ID_RESP } from 'const/response-const';
import React from 'react';
import '../../../index.css';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const ToolInfoOneLine: React.FC = () => {
  const fabDs = transferDsOptions(FAB_RESP);
  const toolDs = transferDsOptions(TOOL_ID_RESP);

  const toolItems: DescriptionsProps['items'] = [
    {
      label: 'Fab Name',
      children: <Select style={{ width: 120 }} onChange={handleChange} options={fabDs} />,
    },
    {
      label: 'Tool ID',
      children: <Select style={{ width: 120 }} onChange={handleChange} options={toolDs} />,
      // children: 'OOXX12',
    },
    {
      label: 'Tool Type',
      children: 'AMAT_Producer-SE',
    },
    {
      label: 'Tool Group',
      children: 'F14A AA-BB',
    },
    {
      label: 'Current TAP Ver',
      children: <div><span style={{marginRight: '8px'}}>9.1.0_NET</span><Button type="primary" icon={<ArrowUpOutlined />} size='small'>Upgrade</Button>
      </div>,
      // children: <Tag color="#b86e6ecf">9.1.0_NET</Tag>,
    },
    {
      label: 'Deploy Type',
      children: '1VM',
    },
    {
      label: 'Current SMP Ver',
      children: '1.7',
      // children: <Tag color="#5e86a3">1.7</Tag>,
    },
    {
      label: 'Last Signed SMP Ver',
      children: '1.7',
      // children: <Tag color="#5e86a3">1.7</Tag>,
    },
    {
      label: 'Current Local Ver',
      children: '1.1',
      // children: <Tag color="#95d07b">1.1</Tag>,
    },
    {
      label: 'Last Signed Local Ver',
      children: '1.1',
      // children: <Tag color="#95d07b">1.1</Tag>,
    }
  ];

  return (
    <Descriptions
      bordered
      column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
      items={toolItems}
      // size="small"
    />
  );
};

export default ToolInfoOneLine;
