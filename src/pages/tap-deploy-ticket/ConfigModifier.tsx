import { Form, Input, Select } from 'antd';
import React from 'react';

const ConfigModifier: React.FC = () => {
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

  return (
    <Form {...formItemLayout} style={{ width: '100%' }}>
      <Form.Item label="Root Content" name="Root Content" rules={[{ required: true, message: 'Please input!' }]}>
        <Select />
      </Form.Item>
      <Form.Item label="1st Content" name="1st Content" rules={[{ required: true, message: 'Please input!' }]}>
        <Select />
      </Form.Item>
      <Form.Item label="2nd Content" name="2nd Content" rules={[{ required: true, message: 'Please input!' }]}>
        <Select />
      </Form.Item>
      <Form.Item label="3rd Content" name="3rd Content" rules={[{ required: true, message: 'Please input!' }]}>
        <Select />
      </Form.Item>
      <Form.Item label="4th Content" name="4th Content" rules={[{ required: true, message: 'Please input!' }]}>
        <Select />
      </Form.Item>
      <Form.Item label="5th Content" name="5th Content" rules={[{ required: true, message: 'Please input!' }]}>
        <Select />
      </Form.Item>
      <Form.Item label="6th Content" name="6th Content" rules={[{ required: true, message: 'Please input!' }]}>
        <Select />
      </Form.Item>
      <Form.Item label="Xpath" name="Xpath" rules={[{ required: true, message: 'Please input!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Change Mode" name="Change Mode" rules={[{ required: true, message: 'Please input!' }]}>
        <Select />
        {/* Common by phase */}
      </Form.Item>
      <Form.Item label="Current Value" name="Current Value" rules={[{ required: true, message: 'Please input!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="New Value" name="New Value" rules={[{ required: true, message: 'Please input!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Param Type" name="Param Type" rules={[{ required: true, message: 'Please input!' }]}>
      <Select /> 
      {/* Attribure, node */}
      </Form.Item>
      <Form.Item label="Change Function" name="Change Mode" rules={[{ required: true, message: 'Please input!' }]}>
        <Select />
        {/* Add, Modify, */}
      </Form.Item>
      

    {/* <Form.Item
      label="InputNumber"
      name="InputNumber"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <InputNumber style={{ width: '100%' }} />
    </Form.Item> */}

    {/* <Form.Item
      label="TextArea"
      name="TextArea"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <Input.TextArea />
    </Form.Item> */}
  </Form>
  );
};

export default ConfigModifier;