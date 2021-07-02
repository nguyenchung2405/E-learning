import { combineReducers, createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { khoaHocReducer } from './Reducer/khoaHocReducer'
import { nguoiDungReducer } from './Reducer/nguoiDungReducer';

const rootReducers = combineReducers({
    khoaHocReducer: khoaHocReducer,
    nguoiDungReducer: nguoiDungReducer
})

export const store = createStore(rootReducers, applyMiddleware(reduxThunk));