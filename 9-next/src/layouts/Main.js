import Header from 'cmp/Header'
import Footer from 'cmp/Footer'
import Sidebar from 'cmp/Sidebar'

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
