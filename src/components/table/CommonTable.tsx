import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import React from 'react';

type AgGridTableProps = {
  columnDefs: any[];
  rowData: any[];
  tableStyle: any;
  context?: any;
  rowSelection?: 'single' | 'multiple' ;
  rowMultiSelectWithClick?: boolean;
};

const CommonTable: React.FC<AgGridTableProps> = React.memo(
  ({ columnDefs, rowData, tableStyle, ...restProps }) => {
    return (
      <>
        <div
          className={'ag-theme-quartz'}
          style={{
            width: tableStyle.width ?? '100%',
            height: tableStyle.height ?? '100%',
          }}
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            headerHeight={30}
            context={restProps.context}
            rowSelection={restProps.rowSelection ?? undefined }
            rowMultiSelectWithClick={restProps.rowMultiSelectWithClick ?? true}
          />
        </div>
      </>
    );
  }
);

export default CommonTable;
