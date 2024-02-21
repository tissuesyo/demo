import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Upload } from 'antd';
import React from 'react';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 18 },
};

const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const onFinish = (values: any) => {
  console.log('Received values of form: ', values);
};

const OiInfoForm: React.FC = () => (
  <Form
    name="validate_other"
    {...formItemLayout}
    onFinish={onFinish}
    initialValues={{
      'input-number': 3,
    }}
    // style={{ maxWidth: 600 }}
  >
    <Row gutter={24}>
      {/* <Col span={12}>
        <Form.Item
          name="select"
          label="Pirun Tool"
          hasFeedback
          rules={[{ required: true }]}
        >
          <Select placeholder="Please select a pirun tool">
            <Option value="TOOLA1">TOOLA1</Option>
            <Option value="TOOLB1">TOOLB1</Option>
          </Select>
        </Form.Item>
      </Col> */}
       <Col span={12}>
        <Form.Item label="TAP Version">
          <span className="ant-form-text">10 → 11</span>
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="description"
          label="Change Description"
          hasFeedback
          rules={[{ required: true }]}
        >
          <Input placeholder="Please fill in this change reason..." />
        </Form.Item>
      </Col>
    </Row>

    <Row gutter={24}>
      <Col span={12}>
        <Form.Item label="OI Change Level">
          <span className="ant-form-text">SMP, LOCAL</span>
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="upload"
          label="SMOC File"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
      </Col>
    </Row>
  </Form>
);

export default OiInfoForm;
