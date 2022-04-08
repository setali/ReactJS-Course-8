import { combineReducers } from 'redux'
import { persons } from './person'
import { posts, post } from './post'

const reducer = combineReducers({
  persons,
  posts,
  post
})

export default reducer

// export default function reducer (
//   state = { persons: [], post: {}, posts: [] },
//   action
// ) {
//   switch (action.type) {
//     case 'PERSONS':
//       return { ...state, persons: action.payload }

//     case 'POST':
//       return { ...state, post: action.payload }

//     case 'POSTS':
//       return { ...state, posts: action.payload }

//     default:
//       return state
//   }
// }
