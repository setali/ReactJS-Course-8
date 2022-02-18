import React, { Component } from 'react'

export default class App extends Component {
  data = [
    { id: 1, name: 'Amir', address: { city: 'Karaj', street: 'Golestan' } },
    { id: 2, name: 'Sanaz', address: { city: 'Bojnord', street: 'Shariati' } },
    { id: 3, name: 'Roshanak', address: { city: 'Tehran', street: 'Kashani' } },
    { id: 4, name: 'Milad', address: { city: 'Tehran', street: 'Sattarkhan' } },
    { id: 5, name: 'Mehrdad', address: { city: 'Karaj', street: 'Mesbah' } }
  ]

  columns = [
    { key: 'id', title: 'ID' },
    {
      key: 'name',
      title: 'Name',
      render: (field, record) => (
        <a
          target='_blank'
          href={`https://www.google.com/search?q=${record.address.city}`}
        >
          {field}
        </a>
      )
    },
    {
      key: 'address',
      title: 'Address',
      render: field => `${field.city} - ${field.street}`
    }
  ]

  render () {
    return (
      <div>
        <Table data={this.data} columns={this.columns} rowKey='id' />
      </div>
    )
  }
}

class Table extends Component {
  render () {
    const { data, columns } = this.props

    console.log(data, columns)

    return (
      <div>
        <table border='1'>
          <thead>
            <tr>
              {columns.map(column => (
                <th key={column.key}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(record => (
              <tr key={record[this.props.rowKey]}>
                {columns.map(column => (
                  <td key={column.key}>
                    {column.render
                      ? column.render(record[column.key], record)
                      : record[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
