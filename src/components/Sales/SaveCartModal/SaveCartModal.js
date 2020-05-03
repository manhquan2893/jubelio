import React from 'react'
import { Modal, Form, Input} from 'antd'
import './style.scss'
const SaveCartModal = ({ isShowSaveCartModal, onCancel}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      wrapClassName="saveCartModal"
      visible={isShowSaveCartModal}
      okText="Save"
      cancelText="Cancel"
      onCancel={onCancel}
      closable={false}
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
          name="name"
          label="Nama"
          rules={[
            {
              required: true,
              message: 'Please input the name of collection!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="note" label="Catatan">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default SaveCartModal