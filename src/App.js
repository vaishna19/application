import { useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import './App.css';
import Modal from './modal';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};


function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userData, setUserData] = useState({});
  const [submit, setSubmit] = useState();
  const onFinish = (values) => {
    console.log(values);
    setUserData(values);
    setIsModalVisible(true);
  };
  const onSubmit = () => {
    setSubmit(true)
  }

  //   const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <div className="form">
      <h1 className="heading">Application Form</h1>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>

        {/* <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item> */}
        <form>
          <label>
            Name:
    <input type="text" name="name" />
          </label>

        </form><br></br>
        <form>
          <label>
            Mail ID:
            <input type="mail" name="mail" />
          </label>


        </form><br />
        <form>
          <label>
            Gender:
            Male:
            <input type="checkBox" id="male" />
            Female:
            <input type="checkBox" id="female" />
            Others:
            <input type="checkBox" id="Others" />
          </label>

        </form><br />
        <form>
          <label>
            Blood Group:
            <select id="blood group" name="blood group">
              <option value="O+ve">O+ve</option>
              <option value="O-ve">O-ve</option>
              <option value="A+ve">A+ve</option>
              <option value="A-ve">A-ve</option>
              <option value="B+ve">B+ve</option>
              <option value="B-ve">B-ve</option>
            </select>
          </label>

        </form><br />
        {/* <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item> */}
        {/* <Form.Item
          name={['user', 'age']}
          label="Age"
          rules={[{
            type: 'number', min: 0, max: 99,
          },]}
        > */}
        {/* <InputNumber />
        </Form.Item> */}
        <form>
          <label>
            Age:
          </label>
          <input type="number" />
        </form><br />
        <form>
          <label>
            Languages Known:
             <select id="Languages" >
              <option value="Tamil">Tamil</option>
              <option value="English">English</option>
              <option value="Telugu">Telugu</option>
              <option value="Malayalam">Malayalam</option>
            </select>
          </label>

        </form><br />
        <form>
          <label>
            Address:
          </label>
          <textArea />
        </form><br />
        <form>
          <label>
            Name of the College:
          </label>
          <input type="text" />
        </form><br />
        <form>
          <label>
            Place:
          </label>
          <input type="text" />
        </form><br />
        <form>
          <label>
            Introduction:
          </label>
          <textArea />
        </form><br />
        {/* <Form.Item name={['user', 'website']} label="Website">
          <Input />
        </Form.Item> */}
        {/* <Form.Item name={['user', 'introduction']} label="Introduction">
          <Input.TextArea />
        </Form.Item> */}
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          {/* <Button type="primary" htmlType="submit">
            Submit
        </Button> */}
          <button onClick={onSubmit} >Submit</button>
          {
            alert("Form Submitted Successfully")
          }
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;

