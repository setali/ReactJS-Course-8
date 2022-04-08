import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'

export default function Page404 () {
  return (
    <div>
      <Result
        status='404'
        title='۴۰۴'
        subTitle='متاسفانه این صفحه یافت نشد.'
        extra={
          <Link to='/'>
            <Button type='primary'>بازگشت به خانه</Button>
          </Link>
        }
      />
    </div>
  )
}
