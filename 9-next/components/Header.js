import 'bootstrap/dist/css/bootstrap.css'

export default function Header () {
  return (
    <header>
      <img src='/logo.png' />
      <h2>My Header</h2>
      <style jsx>
        {`
          header {
            display: flex;
          }
          img {
            background-color: green;
            padding: 0.5rem;
            margin: 0.2rem;
          }
        `}
      </style>
    </header>
  )
}
