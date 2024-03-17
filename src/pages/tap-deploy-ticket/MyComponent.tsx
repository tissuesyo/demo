import { Button, FormInstance } from 'antd';
import React, { useEffect, useMemo, useRef } from 'react';
import { CommonForm } from '../../components/form';

const MyComponent: React.FC = () => {
  useEffect(() => {
    // 在组件挂载时执行的方法
    console.log(' ***** My Component useEffect ******');
  }, []); // 传递空数组以确保方法只执行一次

  const fields = useMemo(() => {
    console.log(' ***** My Component useMemo ******');
    return [
      {
        name: 'A',
        type: 'select',
        label: 'Field A',
        required: true,
        colSpan: 8,
        options: [
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
        ],
      },
      {
        name: 'B',
        type: 'input',
        label: 'Field B',
        required: true,
        colSpan: 8,
        isVisible: false, // 初始情況下 Field B 是隱藏的
        dependency: ['A'], // Field B 依賴於 Field A 的值
      },
    ];
  }, []);

  const commonFormRef = useRef<FormInstance>(null);

  const handleSubmit = () => {
    if (commonFormRef.current) {
      const formValues = commonFormRef.current.getFieldsValue(); 
      console.log('Form Values:', formValues);
    }
  };

  return (
    <div>
      <h2>My Form 123</h2>
      {
        fields && (<>
        <CommonForm fields={fields} ref={commonFormRef} />
        <Button onClick={handleSubmit}>提交</Button>
        </>)
      }      
    </div>
  );
};

export default MyComponent;
