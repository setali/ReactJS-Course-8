import { Layout, Menu } from 'antd'
import { SettingOutlined, UserOutlined, FormOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu
const { Sider } = Layout

export default function Sidebar () {
  return (
    <Sider>
      <Menu
        style={{ width: 256, minHeight: '86vh' }}
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['persons', 'posts']}
        mode='inline'
      >
        <Menu.Item key='dashboard'>
          <Link to='/'>داشبورد</Link>
        </Menu.Item>

        <SubMenu key='persons' icon={<UserOutlined />} title='مدیریت کاربران'>
          <Menu.Item key='person'>
            <Link to='/person'>لیست کاربران</Link>
          </Menu.Item>
          <Menu.Item key='person/new'>
            <Link to='/person/new'>افزودن کاربر</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key='posts' icon={<FormOutlined />} title='مدیریت مقالات'>
          <Menu.Item key='post'>
            <Link to='/post'>لیست مقالات</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key='sub4' icon={<SettingOutlined />} title='تنظیمات'>
          <Menu.Item key='9'>Option 9</Menu.Item>
          <Menu.Item key='10'>Option 10</Menu.Item>
          <Menu.Item key='11'>Option 11</Menu.Item>
          <Menu.Item key='12'>Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}
