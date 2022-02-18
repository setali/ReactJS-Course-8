import { Component } from 'react'

const data = [
  { name: 'Amir', family: 'Gorji' },
  { name: 'Babak', family: 'Porkar' },
  { name: 'Farshid', family: 'Keshavarzian' },
  { name: 'Fateme', family: 'Babaei' },
  { name: 'Maryam', family: 'Hoseinkhani' }
]

export default class Table extends Component {
  render () {
    return (
      <div>
        <table border='1'>
          {data.map(el => (
            <tr key={`${el.name}-${el.family}`}>
              <Columns record={el} />
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

class Columns extends Component {
  render () {
    const { record } = this.props

    return (
      <>
        <td>{record.name}</td>
        <td>{record.family}</td>
      </>
    )
  }
}
