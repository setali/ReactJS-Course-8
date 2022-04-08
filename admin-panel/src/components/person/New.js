import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import Form, { Text, Select, Checkbox, Submit } from '../utils/Form'
import request from '../../tools/request'
import { genders } from '../../tools/constants'
import { useState } from 'react'

export default function New () {
  const [disableButton, setDisableButton] = useState(false)

  const navigate = useNavigate()
  function handleSubmit (values) {
    setDisableButton(true)
    request('/users', {
      method: 'POST',
      data: values
    })
      .then(response => {
        message.success('کاربر با موفقیت ساخته شد.')
        navigate('/person')
      })
      .catch(() => message.error('متاسفانه مشکلی پیش آمده است'))
      .finally(() => setDisableButton(false))
  }

  return (
    <div>
      <Form onFinish={handleSubmit}>
        <Text label='نام کاربری' name='username' required />
        <Text label='نام' name='name' required />

        <Select
          name='gender'
          label='جنسیت'
          required
          options={genders}
          placeholder='جنسیت خود را انتخاب کنید'
        />

        <Checkbox name='admin' label='مدیر' />

        <Submit disabled={disableButton} />
      </Form>
    </div>
  )
}
