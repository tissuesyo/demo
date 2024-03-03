import { DiffEditor } from '@monaco-editor/react';
import { CONFIG_XML_DIFF_RESP } from 'const/response-const';
import React from 'react';

const PreviewChangeXml: React.FC = () => {
  const handleEditorDidMount = (values: any) => {
    console.log(values);
  };

  return (
    <DiffEditor
    height="30vh"
    language="xml"
    original={CONFIG_XML_DIFF_RESP.oldXml}
    modified={CONFIG_XML_DIFF_RESP.newXml}
    onMount={handleEditorDidMount}
  />
  );
};

export default PreviewChangeXml;
