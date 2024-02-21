import { TapVersionProps } from '@tmc/model/change-initial/TapVersionProps';
import { Descriptions, DescriptionsProps } from 'antd';
import React from 'react';
import '../../../index.css';

export const VersionDetail: React.FC<TapVersionProps> = ({
  tapVersion,
  title,
  functions,
  description,
}) => {
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'TAP Version',
      children: tapVersion,
    },
    {
      key: '2',
      label: 'Function',
      children: functions,
    },
    {
      key: '3',
      label: 'Title',
      children: title,
      span: 2,
    },
    {
      key: '4',
      label: 'Description',
      children: <div dangerouslySetInnerHTML={{ __html: description }}></div>,
      span: 2,
    },
  ];

  return (
    <div>
      <Descriptions
        bordered
        size="small"
        items={items}
        column={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 }}
      />
    </div>
  );
};
