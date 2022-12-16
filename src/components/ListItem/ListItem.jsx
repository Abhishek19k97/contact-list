import { Col, Row, Avatar, message, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { ListItemWrapper } from './ListItem.styles';
import { useNavigate } from "react-router-dom";


const ListItem = ({ contactData, refreshContacts }) => {
    const [currContact, setCurrContact] = useState("")
    const navigate = useNavigate()


    const editContact = (contactId) => {
        // const id = JSON.stringify(contactId).split('-')[]
        navigate(`/edit-contact/${contactId}`)
    }

    const deleteContact = (contactId) => {
        setCurrContact(contactId)
    }

    const confirm = (e) => {
        console.log(e.target.id);
        localStorage.setItem("contactList", JSON.stringify(JSON.parse(localStorage.getItem("contactList")).filter(item => item.id!==currContact) ) )
        message.success('Contact Successfully deleted');
        refreshContacts()
    };

    const cancel = (e) => {
        console.log(e);
        // message.error('Click on No');
    };

    return (
        <ListItemWrapper>
            <Row gutter={[0, 10]}>

                <Col span={24}>
                    <div className='account-info-wrapper'>
                        {contactData &&
                            <Row justify='space-around' >

                                <Col xs={12} sm={8} md={4} lg={4} xl={4}>
                                    <div className='account-info-container'>
                                        <Avatar size="large" icon={<img
                                            src={
                                                contactData.image
                                            }
                                            alt=""
                                        />} />
                                    </div>
                                </Col>

                                <Col xs={12} sm={8} md={4} lg={4} xl={4}>
                                    <div className='account-info-container'>
                                        <span className='account-info-footer'>Name</span>
                                        <span style={{ fontWeight: 600 }} className='account-info-header'>{contactData.name}</span>
                                    </div>
                                </Col>

                                <Col xs={12} sm={8} md={4} lg={4} xl={4}>
                                    <div className='account-info-container'>
                                        <span className='account-info-footer'>Phone</span>
                                        <span className='account-info-header'>{contactData.phone}</span>
                                    </div>
                                </Col>

                                <Col xs={12} sm={8} md={4} lg={4} xl={4}>
                                    <div className='account-info-container'>
                                        <span className='account-info-footer'>Phone Type</span>
                                        <span className='account-info-header'>{contactData.type}</span>
                                    </div>
                                </Col>

                                <Col xs={12} sm={8} md={4} lg={4} xl={4}>
                                    <div className='account-info-container'>
                                        <span className='account-info-footer'>Whatsapp</span>
                                        <span className='account-info-header'>{contactData.whatsapp}</span>
                                    </div>
                                </Col>

                                <Col xs={12} sm={8} md={4} lg={4} xl={4} style={{ display: "flex", alignItem: "center", justifyContent: "center" }}>
                                    <div className='account-info-container'>
                                        <EditOutlined onClick={()=>editContact(contactData.id)} style={{ fontSize: '20px', cursor: "pointer" }} />
                                    </div>
                                    <div className='account-info-container'>
                                        <Popconfirm
                                            id="hello"
                                            title="Are you sure to delete this contact?"
                                            onConfirm={confirm}
                                            onCancel={cancel}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <DeleteOutlined onClick={()=>deleteContact(contactData.id)} style={{ fontSize: '20px', cursor: "pointer" }} />
                                        </Popconfirm>

                                    </div>
                                </Col>
                            </Row>
                        }
                    </div>
                </Col>
            </Row>
        </ListItemWrapper>
    )
}

export default ListItem