import { SyncOutlined } from '@ant-design/icons';
import { DiffEditor } from '@monaco-editor/react';
import { CONFIG_XML_DIFF_RESP } from 'const/response-const';
import React from 'react';

const PreviewChangeXml: React.FC = () => {
  const handleEditorDidMount = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <div className='flex'>
        <h3 className='mr-3'>Preview Change</h3> <SyncOutlined />
      </div>      
      <DiffEditor
      height="30vh"
      language="xml"
      original={CONFIG_XML_DIFF_RESP.oldXml}
      modified={CONFIG_XML_DIFF_RESP.newXml}
      onMount={handleEditorDidMount}
      />
  </>
  );
};

export default PreviewChangeXml;
