import { DeleteOutlined } from '@ant-design/icons';
import { CommonTable } from '@tmc/components/table';
import { Button } from 'antd';
import React, { useState } from 'react';
import { CHANGED_CONFIGS_RESP, CHG_CONFIG_COLS } from '../../../const';
import '../../../index.css';

interface ConfigChgSummaryProps {
  isEditable: boolean;
}

const ConfigChgSummary: React.FC<ConfigChgSummaryProps> = ({ isEditable }) => {
  const [value, setValue] = useState(1);
  const [rowData, setRowData] = useState(CHANGED_CONFIGS_RESP);
  const [colDefs, setColDefs] = useState(CHG_CONFIG_COLS(isEditable));

  return (
    <>
      {isEditable && (
        <div style={{ marginBottom: '5px' }}>
          <Button size="small">
            <DeleteOutlined />
            Delete
          </Button>
        </div>
      )}
      <CommonTable
        columnDefs={colDefs}
        rowData={rowData}
        tableStyle={{ height: '170px' }}
        rowSelection={'multiple'}
      />
    </>
  );
};

export default ConfigChgSummary;
