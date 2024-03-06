import { Form, Input, Select } from 'antd';
import React from 'react';
import { CHG_ACTION_MODE_DS, CHG_MODE_DS, DEFAULT_CHG_MPDE, PARAM_TYPE_DS, REQUIRED_FIELD_RULE } from './const/ticket-const';

const ConfigModifier: React.FC = () => {
  const fieldRules = [REQUIRED_FIELD_RULE];
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  return (
    <Form {...formItemLayout} style={{ width: '100%' }}>
      <Form.Item label="Root Content" name="Root Content" rules={fieldRules}>
        <Select />
      </Form.Item>
      <Form.Item label="1st Content" name="1st Content" rules={fieldRules}>
        <Select />
      </Form.Item>
      <Form.Item label="2nd Content" name="2nd Content" rules={fieldRules}>
        <Select />
      </Form.Item>
      <Form.Item label="3rd Content" name="3rd Content" rules={fieldRules}>
        <Select />
      </Form.Item>
      <Form.Item label="4th Content" name="4th Content" rules={fieldRules}>
        <Select />
      </Form.Item>
      <Form.Item label="5th Content" name="5th Content" rules={fieldRules}>
        <Select />
      </Form.Item>
      <Form.Item label="6th Content" name="6th Content" rules={fieldRules}>
        <Select />
      </Form.Item>
      <Form.Item label="Xpath" name="Xpath" rules={fieldRules}>
        <Input />
      </Form.Item>
      <Form.Item label="Change Mode" name="Change Mode" rules={fieldRules}>
        <Select options={CHG_MODE_DS} defaultValue={DEFAULT_CHG_MPDE}></Select>
        {/* Common by phase */}
      </Form.Item>
      <Form.Item label="Current Value" name="Current Value">
        <Input />
      </Form.Item>
      <Form.Item label="New Value" name="New Value" rules={fieldRules}>
        <Input />
      </Form.Item>
      <Form.Item label="Param Type" name="Param Type" rules={fieldRules}>
        <Select options={PARAM_TYPE_DS}></Select>
        {/* Attribure, node */}
      </Form.Item>
      <Form.Item label="Action Mode" name="Action Mode" rules={fieldRules}>
        <Select options={CHG_ACTION_MODE_DS}/>
        {/* Add, Modify, */}
      </Form.Item>
  </Form>
  );
};

export default ConfigModifier;