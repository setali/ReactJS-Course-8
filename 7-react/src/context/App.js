import { Route, Routes } from 'react-router-dom'
import Page404 from './404'
import About from './About'
import Contact from './Contact'
import Dashboard from './Dashboard'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Post from './Post'
import Posts from './Posts'
import Profile from './Profile'
import Provider from './Provider'
import RequireAuth from './RequireAuth'
import Sidebar from './Sidebar'
import './style.css'

export default function App () {
  return (
    <Provider>
      <div>
        <Header />
        <section style={{ display: 'flex' }}>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/profile'
              element={<RequireAuth element={<Profile />} />}
            />
            <Route
              path='/dashboard'
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route path='/post' element={<Posts />} />
            <Route path='/post/:id' element={<Post />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </Provider>
  )
}
