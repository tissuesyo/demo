import { EyeOutlined, FileAddOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import PreviewChangeXml from './PreviewChangeXml';

const ChangeList: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <Form
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      labelAlign="left"
      className='flex'
      style={{ width: '80vw' }}
    >
        <Form.Item name="changeList" label="Change List" rules={[{ required: true }]} className='w-10/12 mr-4'>
        <TextArea
          placeholder="Config change..."
          autoSize={{ minRows: 8 }}
        />
      </Form.Item>
      <div className="flex-col button-group">
        <Button icon={<FileAddOutlined />} className='mb-3'>Add Change Item</Button>
        <Button icon={<EyeOutlined />}>Preview</Button>
      </div>
    </Form>
    <PreviewChangeXml />
  </div>
  );
};

export default ChangeList;
