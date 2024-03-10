import { transferDsOptions } from '@tmc/utils/formatUtil';
import { Form, Row, Select } from 'antd';
import { FAB_RESP, TOOL_GRP_RESP, TOOL_ID_RESP, TOOL_TYPE_RESP } from 'const/response-const';
import React from 'react';

const ToolCriteria: React.FC = () => {  
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const fabDs = transferDsOptions(FAB_RESP);
  const toolDs = transferDsOptions(TOOL_ID_RESP);
  const toolTypeDs = transferDsOptions(TOOL_TYPE_RESP);
  const toolGrpDs = transferDsOptions(TOOL_GRP_RESP);

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
      layout='vertical'
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      className='flex'
    >
    <Row>
      <Form.Item name="fabName" label="Fab" rules={[{ required: true }]} className='w-60 mr-4' >
          <Select
            placeholder="Select Fab"
            onChange={onGenderChange}
            allowClear
            options={fabDs}
          >
          </Select>
      </Form.Item>

      <Form.Item name="toolType" label="Tool Type" rules={[{ required: true }]} className='w-80 mr-4'>
        <Select
          placeholder="Select Tool Type"
          onChange={onGenderChange}
          allowClear
          options={toolTypeDs}
        >
        </Select>
      </Form.Item>

      <Form.Item name="toolGroup" label="Tool Group" rules={[{ required: true }]} className='w-80 mr-4'>
        <Select
          placeholder="Select Tool Group"
          onChange={onGenderChange}
          allowClear
          style={{ minWidth: '220px' }}
          options={toolGrpDs}
        >
          
        </Select>
      </Form.Item>

      <Form.Item name="toolId" label="Tool ID" rules={[{ required: true }]} className='w-56 mr-4'>
        <Select
          placeholder="Select Tool ID"
          onChange={onGenderChange}
          allowClear
          style={{ minWidth: '200px' }}
          options={toolDs}
        >
        </Select>
      </Form.Item>
    </Row>

    <Form.Item name="description" label="Description" rules={[{ required: true }]} className='w-56 mr-4'>
      <Select
        placeholder="Select Tool ID"
        onChange={onGenderChange}
        allowClear
        style={{ minWidth: '200px' }}
        options={toolDs}
      >
      </Select>
    </Form.Item>
  </Form>
  );
};

export default ToolCriteria;
