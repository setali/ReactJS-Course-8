// import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
import reducer from '../reducers'

// const myMiddleware = ({ dispatch, getState }) => next => action =>
//   typeof action === 'function' ? action(dispatch, getState) : next(action)

// function myMiddleware (store) {
//   return function (next) {
//     return function (action) {
//       if (typeof action === 'function') {
//         action(store.dispatch, store.getState)
//       } else {
//         next(action)
//       }
//     }
//   }
// }

// const store = createStore(reducer, applyMiddleware(thunk))
const store = configureStore({ reducer })

export default store
