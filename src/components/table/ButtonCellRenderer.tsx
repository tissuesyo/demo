import { CustomCellRendererProps } from 'ag-grid-react';
import { Button } from 'antd';

export interface ButtonCellRendererParams extends CustomCellRendererProps {
  onClick: any;
  label: string;
  icon: any;
  style?: any;
}

export const ButtonCellRenderer = (props: ButtonCellRendererParams) => {
  const invokeParentMethod = () => {
    props.onClick(props.data);
  };

  return (
    <Button style={props.style} onClick={invokeParentMethod}>
      {props.label}
    </Button>
  );
};
