import { FEATURE_OPTIONS_RESP } from '@tmc/const';
import { Checkbox, CheckboxProps, Input, Select, SelectProps } from 'antd';
import React, { useState } from 'react';
import '../../../index.css';
import ConfigList from './ConfigList';

const options: SelectProps['options'] = FEATURE_OPTIONS_RESP;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const ConfigInformation: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <>
      <div className="flex items-center">
        <Select
          mode="tags"
          style={{ width: '30%', maxWidth: '200px' }}
          placeholder="Filter Feature"
          onChange={handleChange}
          options={options}
          allowClear
          maxTagCount={3}
        />
        <Input
          placeholder="Filter matched config name,description, xpath"
          style={{ width: '40%', maxWidth: '600px', marginLeft: '10px' }}
        />
        <Checkbox onChange={onChange} style={{ marginLeft: '10px' }}>
          Filter Changed Configs
        </Checkbox>
      </div>
      <div style={{ marginTop: '10px' }}>
        <ConfigList />
      </div>
    </>
  );
};

export default ConfigInformation;
