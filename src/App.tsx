import DeployTicketMain from 'pages/tap-deploy-ticket/DeployTicketMain';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/store';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App-container">
        {/* <ChangeInitial /> */}
        {/* <ChangeMain /> */}
        {/* <TapUpgradeMain /> */}
        <DeployTicketMain />
      </div>
    </Provider>
  );
};

export default App;