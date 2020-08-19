import React, { Fragment } from 'react';

import Sidebar from './layout/Sidebar';
import Main from './layout/Main';


// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Fragment>
      <Provider store={store} >

        <Sidebar />
        <Main />
      
      </Provider>
    </Fragment>
  );
}

export default App;
