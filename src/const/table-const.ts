export const CHOOSE_TOOL_COLS = [
  { field: 'fab', checkboxSelection: true, width: 100 },
  { field: 'toolId', width: 95 },
  { field: 'toolType', width: 150 },
  { field: 'toolGroup', width: 180 },
  { field: 'tapVersion', width: 150 },
  { field: 'deployType', width: 130 },
  { field: 'tcsVersion', width: 180 },
];

export const CHOOSE_VERSION_COLS = [
  { field: 'tapVersion', checkboxSelection: true, width: 125 },
  { field: 'title', flex: 1 },
  { field: 'functions', width: 150 },
  // { field: 'action', width: 100 },
];

export const CHG_CONFIG_COLS = (isEditable: boolean) => [
  {
    field: 'name',
    headerCheckboxSelection: isEditable,
    checkboxSelection: isEditable,
  },
  { field: 'feature', width: 95 },
  { field: 'level', width: 90 },
  { field: 'currentValue', width: 135 },
  {
    field: 'newValue',
    width: 130,
    cellStyle: {
      color: '#108ee9',
      fontWeight: 'bold',
    },
  },
  { field: 'updatedXpath', flex: 1 },
  { field: 'xpath', width: 150, hide: true },
  { field: 'description', width: 150, hide: true },
];
