import { CustomCellRendererProps } from 'ag-grid-react';
import { Tag } from 'antd';

export interface TagCellRendererParams extends CustomCellRendererProps {
  label?: string;
  color?: string;
  getColorCode?: Function,
  style?: any
}

export const TagCellRenderer = (props: TagCellRendererParams) => {
  let color = props.color;
  let tagStyle = props.style;
  if (props.getColorCode) {
    const colorDef = props.getColorCode(props.value);
    color = colorDef?.bgColor;
    tagStyle = {...tagStyle, color: colorDef?.fontColor ?? '#ffffff'};
  }
  
  return (
    <div className='h-full flex justify-center items-center'>
      <Tag color={color} style={tagStyle}>{props.label ?? props.value}</Tag>
    </div>
  );
};
