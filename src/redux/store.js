import { createStore, combineReducers } from 'redux'
import reducer from './reducer'

const rootReducer = combineReducers({
  contacts: reducer
})


export default () => createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
