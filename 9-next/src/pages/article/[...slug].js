import Main from 'layouts/Main'

export default function Article ({ parameters }) {
  return (
    <Main>
      <div>Catch all routes => {parameters.join(' / ')}</div>
    </Main>
  )
}

export async function getServerSideProps ({ params: { slug } }) {
  console.log(slug)

  return {
    props: {
      parameters: slug
    }
  }
}
