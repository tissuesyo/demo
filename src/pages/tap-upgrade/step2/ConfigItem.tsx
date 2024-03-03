import { ConfigItemProps } from '@tmc/model/change-initial/ConfigItemProps';
import { Input } from 'antd';
import React from 'react';

const ConfigItem: React.FC<ConfigItemProps> = ({
  configName,
  description,
  level,
  xpath,
  ...restProps
}) => (
  <div className="flex items-center" style={{ width: '100%' }}>
    <div className="column-container" style={{ width: '70%' }}>
      <div>
        <span style={{ fontWeight: 'bold' }}>{configName}</span>
      </div>
      <div className="flex items-center mg-top-xs remark-word">
        <span className="mg-right-xs">Description:</span>
        <span>{description}</span>
      </div>
      <div className="flex items-center mg-top-xs remark-word">
        <span className="mg-right-xs">Level:</span>
        <span>{level}</span>
      </div>
      <div className="flex items-center mg-top-xs remark-word">
        <span className="mg-right-xs">Xpath:</span>
        <span>{xpath}</span>
      </div>
    </div>
    <div style={{ width: '30%' }}>
      <Input placeholder="Basic usage" />
    </div>
  </div>
);

export default ConfigItem;
