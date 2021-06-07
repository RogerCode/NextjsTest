import { createStore, applyMiddleware, Store} from 'redux';
import counterReducer from './reducers/counterReducer'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './root';
import { composeWithDevTools } from 'redux-devtools-extension';

const epicMiddleware = createEpicMiddleware();
const store: Store = createStore(counterReducer,composeWithDevTools(applyMiddleware(epicMiddleware)));
epicMiddleware.run(rootEpic)
export default store;
