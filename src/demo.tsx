import { CollapseProps } from 'antd';
import React from 'react';
import './index.css';
import ToolInfo from './pages/change-initial/components/ToolInfo';
// import ConfigInformation from './pages/change-initial/step3/ConfigInformation';
import ChangeInitial from './pages/change-initial/ChangeInitial';
import Step2Version from './pages/change-initial/step1/Step2Version';

const App: React.FC = () => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Tool Information',
      children: <ToolInfo />,
    },
    {
      key: '2',
      label: 'Version Information',
      children: <Step2Version />,
    },
    // {
    //   key: '3',
    //   label: 'Config Information',
    //   children: <ConfigInformation />,
    // },
  ];

  return (
    <div>
      <ChangeInitial />
      {/* <Collapse defaultActiveKey={['1', '2', '3', '4']} ghost items={items} />
      <PreviewChange /> */}
    </div>
  );
};

export default App;
