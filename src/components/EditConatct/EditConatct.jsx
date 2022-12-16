import React, { useState, useEffect } from 'react'
import { message, Button, Select, Form, Input, Avatar, Row, Col, Radio, Spin } from 'antd';
import { UserOutlined, UploadOutlined } from '@ant-design/icons';
import { storage } from "../../firebase";
import { EditConatctWrapper } from './EditConatct.styles';
import { v4 as uuidv4 } from 'uuid';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useParams } from 'react-router-dom';

const EditConatct = () => {
  const [imageId, setImageId] = useState(null);
  const [file, setFile] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [per, setPerc] = useState(null);
  const [isUploading, setUploading] = useState(false);
  
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const { Option } = Select;

  const params = useParams()
  const contactId = params.id


  useEffect(() => {
    const res = localStorage.getItem("contactList") && JSON.parse(localStorage.getItem("contactList")).find(item => item.id === contactId) ;
    if(res){
      setImageId(res.id)
      setImageURL(res.image)
      form.setFieldsValue(res)
    }
  }, []);

  useEffect(() => {
    const uploadFile = () => {
      const name = uuidv4();
      // const name = new Date().getTime() + file.name;
      setImageId(name)
      const storageRef = ref(storage, `images/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      setUploading(true)
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageURL(downloadURL)
            setUploading(false)
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const onFinish = (values) => {
    localStorage.getItem("contactList") && JSON.parse(localStorage.getItem("contactList")).length>0 ?
      localStorage.setItem("contactList", JSON.stringify([...JSON.parse(localStorage.getItem("contactList")).filter(item=> item.id!==contactId), { id: imageId, ...values, image: imageURL }])) : localStorage.setItem("contactList", JSON.stringify([{ id: imageId, ...values, image: imageURL }]))
    messageApi.open({
      type: 'success',
      content: 'contact saved successfully',
      className: 'custom-class',
      style: {
        marginTop: '20vh',
      },
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <EditConatctWrapper>
      {contextHolder}
      <Row justify='center' align='middle'>
        <Col span={10} >
          <div>
            <Avatar shape="square" size={256} icon={
              imageURL
              ?
               <img
                src={
                  imageURL
                }
                alt=""
              />
               : <UserOutlined />
              } />
          </div>
          <div style={{marginTop:"10px"}}>
            <Spin spinning={isUploading} tip="Uploading Image...">
            </Spin>
          </div>
        </Col>
        <Col span={14} style={{ borderLeft: "0.15em solid grey" }}>
          <Form
            name="contactListForm"
            form={form}
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            // initialValues={initialState}
            // initialValues={{
            //   // ...initialState
            //   name: initialState.name,
            //   phone: initialState.phone,
            //   type: initialState.type,
            //   whatsapp: initialState.whatsapp
            // }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >


            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              validateStatus={true}
              rules={[{
                required: true,
                message: 'Please input valid 10 digit phone number!',
                pattern: new RegExp(/^[0-9]+$/)
              }]}
            >
              <Input minLength={10} maxLength={10} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              label="Type"
              name="type"
              rules={[
                {
                  required: true,
                  message: 'Please select your phone type!',
                },
              ]}
            >
              <Select
                placeholder="phone number type"
              >
                <Option value="personal">personal</Option>
                <Option value="office">office</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Whatsapp"
              name="whatsapp"
              rules={[
                {
                  required: true,
                  message: 'Please select if this is your whatsapp number',
                },
              ]}
            >
              <Radio.Group>
                <Radio value="yes"> Yes </Radio>
                <Radio value="no"> No </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Image"
              name="image"
              validateStatus={imageURL ? "success" : "error"}
              help={imageURL ? "" : "Please upload the image to submit"}

            >
              <span > 
                <label className='upload-image-button' htmlFor="file">
                  Click to Upload: <UploadOutlined />
                </label>
                <input
                  className='upload-image-lable'
                  type="file"
                  id="file"
                  onChange={(e) =>setFile(e.target.files[0])}
                  style={{ display: "none", cursor: 'pointer' }}
                />
              </span>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button disabled={imageURL ? false : true} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </EditConatctWrapper>
  )
}

export default EditConatct

