export const FAB_RESP = ['FAB12', 'FAB14A', 'FAB14B'];
export const TOOL_ID_RESP = ['ABCD11', 'ABCD22', 'ABCD33'];
export const TOOL_TYPE_RESP = ['AMAT_Producer-SE', 'AMAT_Producer-SF', 'AMAT_Producer-GG'];
export const TOOL_GRP_RESP = [ 'F14A AA-BB', 'F14A AA-CC', 'F14A AA-DD' ];

export const CHOOSE_TOOLS_RESP = {
  fab: 'FAB12',
  toolId: 'ABCD',
  toolType: 'Lam_2X00',
  toolGroup: 'N0X_NXP_MHM_LB',
  tapVersion: '8.0.0_NET',
  deployType: '1VM',
  tcsVersion: 'TCS R2023.11.0_VC8',
};

export const VERSION_INFO_RESP = {
  tapVersion: '11.8.0',
  title: 'For OOXX function enable',
  functions: 'Track in/out check',
  description:
    '<section><h2>機台詳細資訊</h2><ul><li><strong>發佈日期:</strong> 2024-01-28</li></ul></section> <section><h2>更新內容</h2><p>此版本包含以下重要更新：</p><ul> <li>新增功能 A</li><li>修復 Bug B</li><li>性能優化</li></ul></section><section><h2>下載連結</h2><p>您可以在以下位置下載最新版本：</p><a href="https://example.com/download">下載頁面</a></section>',
};

export const TOOL_TYPE_CONFIG_RESP = [
  {
    configName: 'LeakRate time',
    description: 'For LeakRate Time OOXX, can ooxx',
    level: 'SMP',
    xpath: '/config/oo/xx/test/LeakRate_time',
    value: 'Y',
    fieldType: 'switch',
    placeholder: null,
    validation: null,
    feature: 'APC',
    role: 'User',
  },
  {
    configName: 'MFC time',
    description: 'For MFC Time OOXX, can ooxx',
    level: 'SMP',
    xpath: '/config/oo/xx/test/MFC_time',
    value: 'Y',
    fieldType: 'number',
    placeholder: 'Please input integer...',
    validation: null,
    feature: 'APC',
    role: 'User',
  },
  {
    configName: 'Is Support APC',
    description: 'Is Support APC function, ....',
    level: 'SMP',
    xpath: '/config/oo/xx/test/MFC_time',
    value: 'Y',
    fieldType: 'switch',
    placeholder: null,
    validation: null,
    feature: 'APC',
    role: 'User',
  },
];

export const FEATURE_OPTIONS_RESP = [
  { value: 'APC', label: 'APC' },
  { value: 'EEC', label: 'EEC' },
  { value: 'XXXX', label: 'XXXX' },
  { value: 'OOO', label: 'OOO' },
  { value: 'YOYO', label: 'YOYO' },
];

export const CHANGED_CONFIGS_RESP = [
  {
    name: 'Is Support EtchAPC',
    feature: 'APC',
    level: 'SMP',
    currentValue: 'Y',
    newValue: 'N',
    updatedXpath: '/config/TCS/Tools/Tool/@isToolSupportEtchAPC~~Y(;;)',
  },
  {
    name: 'Is Enable XXOO',
    feature: 'APC',
    level: 'SMP',
    currentValue: 'Y',
    newValue: 'N',
    updatedXpath: '/config/TCS/Tools/Tool/@isXXOO~~N(;;)',
  },
  {
    name: 'Is Enable XXXX',
    feature: 'APC',
    level: 'LOCAL',
    currentValue: 'Y',
    newValue: 'N',
    updatedXpath: '/config/TCS/Tools/Tool/@isXXXX~~N(;;)',
  },
];

export const CONFIG_XML_DIFF_RESP = {
  oldXml: `
  <library>
    <book>
      <title>Introduction to XML</title>
      <author>John Doe</author>
      <publication_year>2022</publication_year>
    </book>

    <book>
      <title>HTML Basics</title>
      <author>Jane Smith</author>
      <publication_year>2021</publication_year>
    </book>

    <book>
      <title>CSS Essentials</title>
      <author>Bob Johnson</author>
      <publication_year>2023</publication_year>
    </book>
  </library>
`,
  newXml: `
  <library>
    <book>
      <title>Introduction to XML</title>
      <author>John Doe</author>
      <publication_year>2023</publication_year>
    </book>

    <book>
      <title>HTML Basics</title>
      <author>Tissue</author>
      <publication_year>2021</publication_year>
    </book>

    <book>
      <title>CSS Essentials</title>
      <author>Bob Johnson</author>
      <publication_year>2023</publication_year>
    </book>
  </library>
`,
};
