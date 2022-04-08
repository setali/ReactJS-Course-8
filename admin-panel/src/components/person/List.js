import { connect } from 'react-redux'
import { EyeOutlined } from '@ant-design/icons'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import request from '../../tools/request'
import Table from '../utils/Table'
import { setPersons } from '../../redux/actions/person'

class List extends Component {
  state = { loading: true }

  componentDidMount () {
    request('/users')
      .then(response => this.props.setItems(response.data))
      .finally(() => this.setState({ loading: false }))
  }

  columns = [
    { title: 'شناسه', key: 'id' },
    { title: 'نام', key: 'name' },
    {
      title: 'آدرس',
      key: 'address',
      render: (field, record, index) => {
        return `${field?.city} ${field?.street} ${record.phone}`
      }
    },
    {
      key: 'actions',
      render: (f, r) => (
        <Link to={`/person/${r.id}`}>
          <EyeOutlined />
        </Link>
      )
    }
  ]

  render () {
    return (
      <div>
        <Table
          data={this.props.persons}
          columns={this.columns}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setItems: data => dispatch(setPersons(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
