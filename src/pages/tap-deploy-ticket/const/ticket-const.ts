export const REQUIRED_FIELD_RULE = { required: true, message: 'Please input!' };
export const DEFAULT_CHG_MPDE = 'Common';
export const CHG_MODE_DS = [
  { label: DEFAULT_CHG_MPDE, value: DEFAULT_CHG_MPDE },
  { label: 'By phase', value: 'By phase' },
];

export const PARAM_TYPE_DS = [
  { label: 'Attribure', value: 'Attribure' },
  { label: 'Node', value: 'Node' },
];

export const CHG_ACTION_MODE_DS = [
  { label: 'Add', value: 'Add' },
  { label: 'Modify', value: 'Modify' },
  { label: 'Insert', value: 'Insert' },
  { label: 'Remove', value: 'Remove' },
];

export const getJobStatusColDef = ({ statusRender, actionRender }: any) => [
  {
    title: 'No',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Job Name',
    dataIndex: 'jobName',
    key: 'jobName',
  },
  {
    title: 'Start Time',
    dataIndex: 'startTime',
    key: 'startTime',
  },
  {
    title: 'End Time',
    dataIndex: 'endTime',
    key: 'endTime',
  },
  {
    title: 'Job Status',
    key: 'status',
    dataIndex: 'status',
    render: statusRender,
  },
  {
    title: 'Message',
    dataIndex: 'message',
    key: 'message',
  },
  {
    title: 'Action',
    key: 'action',
    render: actionRender,
  },
];
