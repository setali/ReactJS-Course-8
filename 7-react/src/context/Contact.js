import { useContext } from 'react'
import ThemeContext from './ThemeContext'

export default function Contact () {
  const theme = useContext(ThemeContext)

  return (
    <div className='box' style={theme}>
      <h2>Contact Us</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
        corrupti? Dolorem mollitia eligendi accusantium accusamus illum
        reiciendis blanditiis ipsa sit laudantium earum corrupti ipsam, est
        iusto! Repudiandae consectetur molestiae quis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, porro
        molestiae quam distinctio nobis repellendus deserunt eum modi. Tenetur
        provident nam illum repudiandae sed id sit. Ut neque incidunt illo?
      </p>
    </div>
  )
}
