import { TagCellRenderer } from '../../../components/table/TagCellRenderer';
export const JOB_STATUS_COLUMNS = [
  { field: 'index', width: 85, suppressMenu: true },
  { field: 'jobName', width: 150 },
  { field: 'startTime', width: 160 },
  { field: 'endTime', width: 160 },
  {
    field: 'status',
    headerName: 'Job Status',
    width: 150,
    cellRenderer: TagCellRenderer,
    cellRendererParams: {
      getColorCode: (value: string) => {
        const colorMap: { [key: string]: { bgColor: string; fontColor?: string } } = {
          Fail: { bgColor: '#ffafa9' },
          Success: { bgColor: '#95d973' },
          Ongoing: { bgColor: '#6ab3ff' },
          Pending: { bgColor: '#b5b5b5' },
        };

        return colorMap[value];
      },
      style: { minWidth: '70px', textAlign: 'center' },
    },
  },
  { field: 'message', headerName: 'Execute Result Message', flex: 1 },
  { field: 'action', width: 150, suppressMenu: true },
];
