import { Divider } from 'antd'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import request from '../../tools/request'

export default function Full () {
  const { id } = useParams()

  const [person, setPerson] = useState({})

  useEffect(() => {
    request(`/users/${id}`).then(response => setPerson(response.data))
  }, [id])

  return (
    <div>
      <h3>نمایش کاربر</h3>
      <Divider />
      <label>نام</label>
      <Divider type='vertical' />
      <span>{person.name}</span>
      <Divider />
      <label>ایمیل</label>
      <Divider type='vertical' />
      <span>{person.email}</span>
      <Divider />
      <Link to='/person'>بازگشت به لیست کاربران</Link>
    </div>
  )
}
