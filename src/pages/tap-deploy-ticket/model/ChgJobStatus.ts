export interface ChgJobStatus {
  index: number;
  jobName: string;
  startTime: string;
  endTime: string;
  status: string;
  message?: string;
  action?: string;
}
