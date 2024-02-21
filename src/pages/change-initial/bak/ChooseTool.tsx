import { Form, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import CommonTable from '../../../components/table/CommonTable';
import { CHOOSE_TOOLS_RESP, CHOOSE_TOOL_COLS } from '../../../const';
import '../../../index.css';

interface ToolListState {
  fab: string;
  toolId: string;
  toolType: string;
  toolGroup: string;
  tapVersion: string;
  deployType: string;
  tcsVersion: string;
}

const ChooseTool: React.FC = () => {
  const [rowData, setRowData] = useState<ToolListState[]>([]);

  useEffect(() => {
    const toolData = Array.from({ length: 30 }, (_, index) => ({
      ...CHOOSE_TOOLS_RESP,
      toolId: `${CHOOSE_TOOLS_RESP.toolId}${(index + 1)
        .toString()
        .padStart(2, '0')}`,
    }));
    setRowData(toolData);
  }, []);

  return (
    <>
      <Form.Item name="select" label="Tool Group" rules={[{ required: true }]}>
        <Select placeholder="Please select tool group" options={[
        { value: 'N0X_NXP_MHM_LB', label: 'N0X_NXP_MHM_LB' },
        { value: 'N1X_NXP_MHM_LB', label: 'N1X_NXP_MHM_LB' },
      ]}>
        </Select>
      </Form.Item>

      <CommonTable
        rowData={rowData}
        columnDefs={CHOOSE_TOOL_COLS}
        tableStyle={{ width: '100%', height: 'calc(100vh - 250px)' }}
        rowSelection="single"
      ></CommonTable>
    </>
  );
};

export default ChooseTool;
