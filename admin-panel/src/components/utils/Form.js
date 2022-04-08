import {
  Form,
  Input,
  Select as AntSelect,
  Checkbox as AntCheckbox,
  Button
} from 'antd'

const { Option } = AntSelect

export function Text ({ label, name, required }) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required, message: `${label} اجباری است` }]}
    >
      <Input />
    </Form.Item>
  )
}

export function Select ({ name, label, placeholder, required, options }) {
  return (
    <Form.Item name={name} label={label} rules={[{ required }]}>
      <AntSelect placeholder={placeholder} allowClear>
        {options.map(item => (
          <Option key={item.value} value={item.value}>
            {item.label}
          </Option>
        ))}
      </AntSelect>
    </Form.Item>
  )
}

export function Checkbox ({ label, name }) {
  return (
    <Form.Item name={name} valuePropName='checked'>
      <AntCheckbox>{label}</AntCheckbox>
    </Form.Item>
  )
}

export function Submit ({ label = 'ذخیره', type = 'primary', disabled }) {
  return (
    <Form.Item>
      <Button type={type} htmlType='submit' disabled={disabled}>
        {label}
      </Button>
    </Form.Item>
  )
}

export default Form
