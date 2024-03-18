import { Checkbox, Form, FormInstance, Input, Radio, Select } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

const { Option } = Select;

export interface FormField {
  name: string;
  label: string;
  type: 'input' | 'textarea' | 'checkbox' | 'select' | 'radio';
  labelWidth?: number; // label的显示宽度
  width?: number; // 字段的显示宽度
  style?: React.CSSProperties;
  disabled?: boolean;
  required?: boolean;
  validationRules?: any[]; // 验证规则
  dependencies?: string[]; // 依赖的其他字段
  hideWhen?: (formValues: Record<string, any>) => boolean; // 根据其他字段值来决定是否隐藏
  options?: { label: string; value: any }[];
}

interface CommonFormProps {
  fields: FormField[];
  forwardedRef?: React.Ref<FormInstance>;
}

const CommonForm: React.FC<CommonFormProps> = ({ fields, forwardedRef }) => {
  const [form] = Form.useForm();
  const formRef = useRef<FormInstance>(null);
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const handleFormChange = (changedValues: any, allValues: any) => {
    setFormValues(allValues);
  };

  useEffect(() => {
    console.log('common form useEffect...', fields);
  }, [fields]);

  return (
    <Form
      form={form}
      onValuesChange={handleFormChange}
      ref={forwardedRef || formRef}
    >
      {fields && fields.map(field => (
        <Form.Item
          key={field.name}
          name={field.name}
          label={field.label}
          labelCol={{ span: field.labelWidth || 8 }}
          wrapperCol={{ span: field.width || 16 }}
          colon={false}
          rules={field.validationRules}
          hidden={field.dependencies ? (form.getFieldValue(field.dependencies[0]) === 'yoyoyo'):  false}
          dependencies={field.dependencies}
          shouldUpdate={(prevValues: any, currentValues: any) => {
            const prevValue = field.dependencies?.reduce<Record<string, any>>(
              (acc, key) => ({ ...acc, [key]: prevValues[key] }),
              {}
            ) || {};
            const currentValue = field.dependencies?.reduce<Record<string, any>>(
              (acc, key) => ({ ...acc, [key]: currentValues[key] }),
              {}
            ) || {};
            return (
              JSON.stringify(prevValue) !== JSON.stringify(currentValue)
            );
          }}
          noStyle={field.hideWhen && field.hideWhen(formValues)}
        >
          {renderField(field)}
        </Form.Item>
      ))}
    </Form>
  );
};

const renderField = (field: FormField) => {
  switch (field.type) {
    case 'input':
      return <Input style={field.style} disabled={field.disabled} />;
    case 'textarea':
      return <Input.TextArea style={field.style} disabled={field.disabled} />;
    case 'checkbox':
      return <Checkbox style={field.style} disabled={field.disabled}>{field.label}</Checkbox>;
    case 'select':
      return (
        <Select style={field.style} disabled={field.disabled}>
          {field.options && field.options.map(option => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      );
    case 'radio':
      return (
        <Radio.Group style={field.style} disabled={field.disabled}>
          {field.options && field.options.map(option => (
            <Radio key={option.value} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </Radio.Group>
      );
    default:
      return null;
  }
};

export default React.forwardRef<FormInstance, CommonFormProps>((props, ref) => <CommonForm {...props} forwardedRef={ref} />);
