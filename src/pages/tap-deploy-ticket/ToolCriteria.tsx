import { Form, Select } from 'antd';
import React from 'react';

const ToolCriteria: React.FC = () => {
  const layout = {
    // labelCol: { span: 2 },
    // wrapperCol: { span: 6 },
  };
  
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        break;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        break;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        break;
      default:
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
  };

  return (
    <Form
    {...layout}
    form={form}
    name="control-hooks"
    onFinish={onFinish}
    labelAlign="left"
    className='flex'
    // style={{ maxWidth: 600 }}
  >
      <Form.Item name="fabName" label="Fab" rules={[{ required: true }]} className='w-40 mr-4'>
        <Select
          placeholder="Select Fab"
          onChange={onGenderChange}
          allowClear
          options={[
            { value: 'F12A', label: 'F12A' },
            { value: 'F12B', label: 'F12B' },
            { value: 'F14A', label: 'F14A' }
          ]}
        >
        </Select>
    </Form.Item>

      <Form.Item name="toolType" label="Tool Type" rules={[{ required: true }]} className='w-80 mr-4'>
        <Select
          placeholder="Select Tool Type"
          onChange={onGenderChange}
          allowClear
          options={[
            { value: 'AMAT_Producer-SE', label: 'AMAT_Producer-SE' },
            { value: 'AMAT_Producer-SF', label: 'AMAT_Producer-SF' },
            { value: 'AMAT_Producer-GG', label: 'AMAT_Producer-GG' }
          ]}
        >
        </Select>
      </Form.Item>

    <Form.Item name="toolGroup" label="Tool Group" rules={[{ required: true }]} className='w-80 mr-4'>
      <Select
        placeholder="Select Tool Group"
        onChange={onGenderChange}
        allowClear
        options={[
          { value: 'F14A AA-BB', label: 'F14A AA-BB' },
          { value: 'F14A AA-CC', label: 'F14A AA-CC' },
          { value: 'F14A AA-DD', label: 'F14A AA-DD' }
        ]}
      >
      </Select>
    </Form.Item>
    <Form.Item name="toolId" label="Tool ID" rules={[{ required: true }]} className='w-56 mr-4'>
      <Select
        placeholder="Select Tool ID"
        onChange={onGenderChange}
        allowClear
        options={[
          { value: 'TOOLAA', label: 'TOOLAA' },
          { value: 'TOOLBB', label: 'TOOLBB' },
          { value: 'TOOLCC', label: 'TOOLCC' }
        ]}
      >
      </Select>
    </Form.Item>
    {/* <Form.Item {...tailLayout}>
      <Space>
        <Button>Load XML</Button>
      </Space>
    </Form.Item> */}
  </Form>
  );
};

export default ToolCriteria;
