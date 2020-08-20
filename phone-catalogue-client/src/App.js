import React, { Fragment } from 'react';

import Sidebar from './layout/Sidebar';
import Main from './layout/Main';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Catalog from './components/Catalog';


// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
  <BrowserRouter>

      <Provider store={store} >
        <Switch>
          <Route exact patch='/' component={Catalog}></Route>
        </Switch>      
      </Provider>
    
  </BrowserRouter>
  );
}

export default App;
