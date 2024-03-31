import { CommonTable } from '@tmc/components/table';
import type { TableProps } from 'antd';
import { Button, Space, Tag } from 'antd';
import React from 'react';
import { CHG_JOB_STATUS_RESP } from '../../const/response-const';
import { JOB_STATUS_COLUMNS } from './const/table-const';
import { getJobStatusColDef } from './const/ticket-const';
import { ChgJobStatus } from './model/ChgJobStatus';

const columns: TableProps<ChgJobStatus>['columns'] = [
  ...getJobStatusColDef({
    statusRender: (_: any, { status }: ChgJobStatus) => {
      const colorMap: { [key: string]: string } = {
        Fail: 'volcano',
        Success: 'green',
        Ongoing: 'geekblue',
        Pending: 'gray',
      };
      const color = colorMap[status] ?? 'geekblue';
      return (
        <Tag color={color} key={status} bordered={false}>
          {status}
        </Tag>
      );
    },
    actionRender: (_: any, { status }: ChgJobStatus) => {
      return status === 'Fail' ? (
          <Space size="middle">
            <Button>Re-trigger</Button>
          </Space>
        ) : <></>;
  }})
];

const rowData: ChgJobStatus[] = CHG_JOB_STATUS_RESP;

const JobStatus: React.FC = () => 
<CommonTable
  rowData={rowData}
  columnDefs={JOB_STATUS_COLUMNS}
  tableStyle={{ width: '100%', height: 'calc(100vh - 250px)' }}
  rowSelection="single"
></CommonTable>;

export default JobStatus;
