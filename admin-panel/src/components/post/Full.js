import { Divider } from 'antd'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import request from '../../tools/request'
import { setPost } from '../../redux/actions/post'

export default function Full () {
  const { id } = useParams()

  const post = useSelector(state => state.post)

  const dispatch = useDispatch()

  useEffect(() => {
    request(`/posts/${id}`).then(response => dispatch(setPost(response.data)))
  }, [id])

  return (
    <div>
      <h3>نمایش مقاله</h3>
      <Divider />
      <label>عنوان</label>
      <Divider type='vertical' />
      <span>{post.title}</span>
      <Divider />
      <label>متن</label>
      <Divider type='vertical' />
      <span>{post.body}</span>
      <Divider />
      <Link to='/post'>بازگشت به لیست مقالات</Link>
    </div>
  )
}
