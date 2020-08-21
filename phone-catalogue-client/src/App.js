import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Catalog from './components/Catalog';



// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
  <BrowserRouter>

      <Provider store={store} >
        <Switch>
          <Route exact patch='/phones' component={Catalog}></Route>
        </Switch>      
      </Provider>
    
  </BrowserRouter>
  );
}

export default App;
