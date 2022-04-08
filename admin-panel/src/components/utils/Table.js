import { Table as AntTable } from 'antd'
import { useMemo } from 'react'

export default function Table ({ data, loading, columns, rowKey = 'id' }) {
  const tableColumns = useMemo(() => {
    return columns.map(column => ({ ...column, dataIndex: column.key }))
  }, [columns])

  return (
    <AntTable
      dataSource={data}
      columns={tableColumns}
      loading={loading}
      rowKey={rowKey}
    />
  )
}
