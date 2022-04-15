import { EyeOutlined } from '@ant-design/icons'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPosts } from '../../redux/actions/post'
import Table from '../utils/Table'

class List extends Component {
  componentDidMount () {
    this.props.getItems()
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
        <Table data={this.props.posts} columns={this.columns} />
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
    // setItems: data => dispatch(setPosts(data)),
    getItems: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
