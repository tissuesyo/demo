export interface ConfigItemProps {
  configName: string;
  xpath: string;
  level: string;
  description: string | null;
  feature: string | null;
  role: string | null;
  placeholder: string | null;
  fieldType: string | null;
  validation?: string | null;
  value?: any;
  options?: string[];
}
