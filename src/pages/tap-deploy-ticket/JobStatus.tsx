import type { TableProps } from 'antd';
import { Button, Space, Table, Tag } from 'antd';
import React from 'react';
import { CHG_JOB_STATUS_RESP } from '../../const/response-const';
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

const data: ChgJobStatus[] = CHG_JOB_STATUS_RESP;

const JobStatus: React.FC = () => <Table columns={columns} dataSource={data} pagination={false} />;

export default JobStatus;
