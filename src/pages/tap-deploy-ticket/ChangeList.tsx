import { EyeOutlined, FileAddOutlined } from '@ant-design/icons';
import { Button, Drawer, Form, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';
import ConfigModifier from './ConfigModifier';
import PreviewChangeXml from './PreviewChangeXml';

const ChangeList: React.FC = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const openDrawer = () => {
    setIsOpenDrawer(true);
  };

  const closeDrawer = () => {
    setIsOpenDrawer(false);
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
        <Button icon={<FileAddOutlined />} className='mb-3' onClick={openDrawer}>Add Change Item</Button>
        <Button icon={<EyeOutlined />}>Preview</Button>
      </div>
    </Form>
    <PreviewChangeXml />

    <Drawer
      title="Tool.xml Configuration Editor"
      width={600}
      onClose={closeDrawer}
      open={isOpenDrawer}
      styles={{
        body: {
          paddingBottom: 20,
        },
      }}
      extra={
        <Space>
          <Button onClick={closeDrawer}>
            Add
          </Button>
        </Space>
      }
    >
      <ConfigModifier />
    </Drawer>
  </div>
  );
};

export default ChangeList;
