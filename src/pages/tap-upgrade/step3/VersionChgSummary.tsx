import { Descriptions, DescriptionsProps, Tag } from 'antd';
import React from 'react';
import '../../../index.css';
// import { ArrowRightOutlined } from '@ant-design/icons';

const VersionChgSummary: React.FC = () => {
  const tagVersionTag = '';
  const mediumFontStyle = {
    fontWeight: '800',
    fontSize: 'medium',
    marginRight: '5px',
  };
  const toolItems: DescriptionsProps['items'] = [
    {
      label: 'Fab Name',
      children: 'FAB14A',
    },
    {
      label: 'Tool ID',
      children: 'OOXX12',
    },
    // {
    //   label: 'Tool Type',
    //   children: 'AMAT_Producer-SE',
    // },
    // {
    //   label: 'Tool Group',
    //   children: 'F14A AA-BB',
    // },
    {
      label: 'TAP Version',
      children: (
        <>
          <Tag color="processing" bordered={false}>
            9.1.0_NET
          </Tag>
          <span style={mediumFontStyle}> → </span>
          <Tag color="#108ee9">9.1.1_NET</Tag>
        </>
      ),
    },
    {
      label: 'SMP Version',
      children: (
        <>
          <Tag color="processing" bordered={false}>
            1.7
          </Tag>
          <span style={mediumFontStyle}> → </span>
          <Tag color="#108ee9">1.8</Tag>
        </>
      ),
    },
    {
      label: 'Local Version',
      children: (
        <>
          <Tag color="processing" bordered={false}>
            1.0
          </Tag>
          <span style={mediumFontStyle}> → </span>
          <Tag color="#108ee9">1.1</Tag>
        </>
      ),
    },
  ];

  return (
    <>
      {/* <ArrowRightOutlined /> */}
      <Descriptions
        bordered
        column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
        items={toolItems}
        size="small"
      />
    </>
  );
};

export default VersionChgSummary;
