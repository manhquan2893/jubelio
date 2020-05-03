import React from 'react'
import { Form, Modal } from 'antd'
import { Input } from 'antd'
import './style.scss'
const AddCustomerModal = ({ isShowAddCustomerModal, onCreate, onClose }) => {
  const [form] = Form.useForm();
  return (
    <div className="addCustomerModal">
      <Modal
      visible={isShowAddCustomerModal}
      okText="Create"
      cancelText="Cancel"
      onCancel={onClose}
      closable={false}
      wrapClassName="addCustomerModal"
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
        }}
      >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please input the email of collection!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="telephone"
          label="Nomor Telepon"
          rules={[
            {
              required: true,
              message: 'Please input the nomor telepon of collection!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  </div>
  )
}

export default AddCustomerModal