export interface Option {
  value: string | number;
  label: string;
  children?: Option[];
  disableCheckbox?: boolean;
}
