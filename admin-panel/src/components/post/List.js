import { connect } from 'react-redux'
import { EyeOutlined } from '@ant-design/icons'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import request from '../../tools/request'
import Table from '../utils/Table'
import { setPosts } from '../../redux/actions/post'

class List extends Component {
  state = { loading: true }

  componentDidMount () {
    request('/posts')
      .then(response => this.props.setItems(response.data))
      .finally(() => this.setState({ loading: false }))
  }

  columns = [
    { title: 'شناسه', key: 'id' },
    { title: 'عنوان', key: 'title' },
    {
      key: 'actions',
      render: (f, r) => (
        <Link to={`/post/${r.id}`}>
          <EyeOutlined />
        </Link>
      )
    }
  ]

  render () {
    return (
      <div>
        <Table
          data={this.props.posts}
          columns={this.columns}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setItems: data => dispatch(setPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
