import { TOOL_TYPE_CONFIG_RESP } from '@tmc/const';
import { ConfigItemProps } from '@tmc/model/change-initial/ConfigItemProps';
import { Collapse, List, Space } from 'antd';
import React from 'react';
import ConfigItem from './ConfigItem';

const ConfigList: React.FC = () => (
  <Space direction="vertical" size={16}>
    <Collapse
      style={{ width: 'calc(100vw - 500px)' }}
      size="large"
      defaultActiveKey={['1']}
      // expandIcon={({ isActive }) => (
      //   <CaretRightOutlined rotate={isActive ? 90 : 0} />
      // )}
      items={[
        {
          key: '1',
          label: 'APC',
          children: (
            <List
              bordered
              dataSource={TOOL_TYPE_CONFIG_RESP as ConfigItemProps[]}
              renderItem={(item) => (
                <List.Item>
                  <ConfigItem {...item} />
                </List.Item>
              )}
            />
          ),
        },
      ]}
    />
  </Space>
);

export default ConfigList;
