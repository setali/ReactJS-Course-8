import { createAction } from '@reduxjs/toolkit'
import request from '../../tools/request'

export const setPosts = createAction('POSTS')
export const setPost = createAction('POST')

// export function setPosts (payload) {
//   return { type: 'POSTS', payload }
// }

// export function setPost (payload) {
//   return { type: 'POST', payload }
// }

export function getPosts () {
  return (dispatch, getState) => {
    if (getState().posts.length === 0) {
      request('/posts').then(response => dispatch(setPosts(response.data)))
    }
  }
}

export function getPost (id) {
  return dispatch =>
    request(`/posts/${id}`).then(response => dispatch(setPost(response.data)))
}
