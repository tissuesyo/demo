import { ButtonCellRenderer, CommonTable } from '@tmc/components/table';
import { CHOOSE_VERSION_COLS, VERSION_INFO_RESP } from '@tmc/const';
import { TapVersionProps } from '@tmc/model/change-initial/TapVersionProps';
import { generateVersionArray } from '@tmc/utils/formatUtil';
import { Modal, Radio, RadioChangeEvent, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import '../../../index.css';
import { VersionDetail } from './VersionDetail';

const ChooseVersion: React.FC = () => {
  const [value, setValue] = useState(1);
  const [rowData, setRowData] = useState<TapVersionProps[]>([]);

  const handleDetailBtnClick = (rowData: TapVersionProps) => {
    Modal.info({
      title: 'Version Detail Infomation',
      content: <VersionDetail {...rowData}></VersionDetail>,
      width: 800,
      onOk() {},
    });
  };

  const columnDefs = [
    ...CHOOSE_VERSION_COLS,
    {
      headerName: 'Action',
      field: 'action',
      cellRenderer: ButtonCellRenderer,
      cellRendererParams: {
        onClick: handleDetailBtnClick,
        label: 'Detail',
      },
      width: 120,
    },
  ];

  const onVersionChange = (e: RadioChangeEvent) => {
    console.log('size checked', e.target.value);
  };

  useEffect(() => {
    const versions = generateVersionArray('11.10.0', 10);
    const mockData = versions.map((ver) => ({
      ...VERSION_INFO_RESP,
      tapVersion: ver,
    }));
    setRowData(mockData);
  }, []);

  return (
    <div>
      <Radio.Group onChange={onVersionChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>Keep Current Version</Radio>
          <Radio value={2}>Choose New Version</Radio>
        </Space>
      </Radio.Group>

      {rowData && (
        <CommonTable
          columnDefs={columnDefs}
          rowData={rowData}
          tableStyle={{ height: '300px' }}
          rowSelection="single"
        />
      )}
    </div>
  );
};

export default ChooseVersion;
