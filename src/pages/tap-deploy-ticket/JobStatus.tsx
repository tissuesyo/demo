import type { TableProps } from 'antd';
import { Table, Tag } from 'antd';
import React from 'react';

interface DataType {
  index: number;
  jobName: string;
  executeTime: string;
  status: string;
  message?: string;
  action?: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'No',
    dataIndex: 'index',
    key: 'index',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Job Name',
    dataIndex: 'jobName',
    key: 'jobName',
  },
  {
    title: 'Execute Time',
    dataIndex: 'executeTime',
    key: 'executeTime',
  },
  {
    title: 'Job Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => {
      const colorMap: {[key: string]: string} = {
        Fail: 'volcano',
        Success: 'green',
        Ongoing: 'geekblue',
        Pending: 'gray'
      };
      const color = colorMap[status] ?? 'geekblue';
      return (
        <Tag color={color} key={status} bordered={false}>{status}</Tag>
      );
    },
  },
  {
    title: 'Message',
    dataIndex: 'message',
    key: 'message',
  },
  {
    title: 'Action',
    key: 'action',
    // render: (_, record) => (
    //   <Space size="middle">
    //     <a>Invite {record.name}</a>
    //     <a>Delete</a>
    //   </Space>
    // ),
  },
];

const data: DataType[] = [
  {
    index: 1,
    jobName: 'OOXX',
    executeTime: '2024/01/01 11:08:00',
    status: 'Success',
  },
  {
    index: 2,
    jobName: 'XXOO',
    executeTime: '2024/01/01 12:08:00',
    status: 'Fail',
    message: 'fail.... because ooxx...'
  },
  {
    index: 3,
    jobName: 'XXOO',
    executeTime: '2024/01/01 12:30:00',
    status: 'Pending',
  },
  {
    index: 4,
    jobName: 'AAA XXOO',
    executeTime: '2024/01/01 12:40:00',
    status: 'Ongoing',
  },
];

const JobStatus: React.FC = () => <Table columns={columns} dataSource={data} pagination={false}/>;

export default JobStatus;