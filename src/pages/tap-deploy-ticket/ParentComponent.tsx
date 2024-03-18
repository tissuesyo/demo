import { FormInstance } from 'antd/lib/form';
import React, { useEffect, useRef, useState } from 'react';
import CommonForm, { FormField } from '../../components/form/CommonForm';

const ParentComponent: React.FC = () => {
  const commonFormRef = useRef<FormInstance>(null);
  const [formValues, setFormValues] = useState<Record<string, any>>({});

  useEffect(() => {
    // 这里可以根据表单值的变化来处理其他字段的状态
    handleFieldInteractions();
  }, [formValues]);

  // 父组件提供的表单字段定义
  const fields: FormField[] = [
    { name: 'name', label: 'Name', type: 'input', labelWidth: 100, width: 200, required: true, validationRules: [{ required: true, message: 'Please input your name' }] },
    { name: 'age', label: 'Age', type: 'input', labelWidth: 100, width: 200, validationRules: [{ required: true, message: 'Please input your age' }], dependencies: ['name'] },
    { name: 'description', label: 'Description', type: 'textarea', labelWidth: 100, width: 400 },
    { name: 'agree', label: 'Agree', type: 'checkbox', labelWidth: 100 },
    { name: 'country', label: 'Country', type: 'select', labelWidth: 100, width: 200, options: [{ label: 'USA', value: 'usa' }, { label: 'Canada', value: 'canada' }] },
    { name: 'gender', label: 'Gender', type: 'radio', labelWidth: 100, options: [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }] }
  ];

  // 处理表单字段间的相互作用
  const handleFieldInteractions = () => {
    // 根据 'agree' 字段的值动态显示/隐藏 'country' 字段
    if (formValues.agree === true) {
      setFieldsVisibility(['country'], true);
    } else {
      setFieldsVisibility(['country'], false);
    }

    // 根据 'gender' 字段的值动态设置 'name' 字段的必填状态
    if (formValues.gender === 'male') {
      setFieldRequired('name', true);
    } else {
      setFieldRequired('name', false);
    }
  };

  // 设置字段的显示/隐藏状态
  const setFieldsVisibility = (fieldNames: string[], visible: boolean) => {
    const updatedFields = [...fields];
    fieldNames.forEach(fieldName => {
      const fieldIndex = updatedFields.findIndex(field => field.name === fieldName);
      if (fieldIndex !== -1) {
        updatedFields[fieldIndex] = { ...updatedFields[fieldIndex], hideWhen: visible ? ()=> false : () => true };
      }
    });
    setFields(updatedFields);
  };

  // 设置字段的必填/非必填状态
  const setFieldRequired = (fieldName: string, required: boolean) => {
    const updatedFields = [...fields];
    const fieldIndex = updatedFields.findIndex(field => field.name === fieldName);
    if (fieldIndex !== -1) {
      updatedFields[fieldIndex] = { ...updatedFields[fieldIndex], required, validationRules: required ? [{ required: true, message: `Please input your ${fieldName}` }] : undefined };
    }
    setFields(updatedFields);
  };

  // 更新表单字段状态
  const setFields = (updatedFields: FormField[]) => {
    commonFormRef.current?.setFields(updatedFields.map(field => ({ name: field.name, value: formValues[field.name] })));
  };

  const handleSubmit = () => {
    if (commonFormRef.current) {
      const formValues = commonFormRef.current.getFieldsValue(); // 调用 commonForm 组件的方法获取表单值
      console.log('Form Values:', formValues);
    }
  };

  return (
    <div>
      {/* 将 commonFormRef 和 fields 通过 props 传递给 CommonForm 组件 */}
      <CommonForm ref={commonFormRef} fields={fields} />
      <button onClick={handleSubmit}>提交</button>
    </div>
  );
};

export default ParentComponent;
