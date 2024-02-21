import TapUpgradeMain from 'pages/tap-upgrade/TapUpgradeMain';
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
        <TapUpgradeMain />
      </div>
    </Provider>
  );
};

export default App;