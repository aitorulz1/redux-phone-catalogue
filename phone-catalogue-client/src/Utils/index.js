
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore, applyMiddleware } from '../reducers';
import RootReducer from '../reducers/phonesReducer';
import { middleware } from '../store';


export const enzymeSetUp = () => {
  configure({ adapter: new Adapter() });
}

export const testStore = (initialState) => {
  const createStoreMiddleware = applyMiddleware(...middleware)(createStore)
  return createStoreMiddleware(RootReducer, initialState)
}