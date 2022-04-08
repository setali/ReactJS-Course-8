import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Header from './generic/Header'
import Footer from './generic/Footer'
import Sidebar from './generic/Sidebar'
import Dashboard from './generic/Dashboard'
import Person from './person/Router'
import Post from './post/Router'
import Page404 from './generic/Page404'

const { Content } = Layout

function App () {
  return (
    <div>
      <Layout className='app'>
        <Header />
        <Layout>
          <Sidebar />
          <Content className='content'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/person/*' element={<Person />} />
              <Route path='/post/*' element={<Post />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
