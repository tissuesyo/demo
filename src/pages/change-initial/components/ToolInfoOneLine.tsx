import { Descriptions, DescriptionsProps, Tag } from 'antd';
import React from 'react';
import '../../../index.css';

const ToolInfoOneLine: React.FC = () => {
  const toolItems: DescriptionsProps['items'] = [
    {
      label: 'Fab Name',
      children: 'FAB14A',
    },
    {
      label: 'Tool ID',
      children: 'OOXX12',
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
      children: <Tag color="#b86e6ecf">9.1.0_NET</Tag>,
    },
    {
      label: 'Deploy Type',
      children: '1VM',
    },
    {
      label: 'Current SMP Ver',
      children: <Tag color="#5e86a3">1.7</Tag>,
    },
    {
      label: 'Last Signed SMP Ver',
      children: <Tag color="#5e86a3">1.7</Tag>,
    },
    {
      label: 'Current Local Ver',
      children: <Tag color="#95d07b">1.1</Tag>,
    },
    {
      label: 'Last Signed Local Ver',
      children: <Tag color="#95d07b">1.1</Tag>,
    }
  ];

  return (
    <Descriptions
      bordered
      column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
      items={toolItems}
      size="small"
    />
  );
};

export default ToolInfoOneLine;
