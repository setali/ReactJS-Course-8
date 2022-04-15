import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

export default function Main ({ children }) {
  return (
    <div>
      <Header />

      <section style={{ display: 'flex' }}>
        <Sidebar />
        <article>{children}</article>
      </section>

      <Footer />
      <style>{`
        h2 {
            color: gray;
        }`}</style>
    </div>
  )
}
