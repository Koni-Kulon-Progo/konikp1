import React from 'react'
import {  Row, Col} from 'antd';
import {
    HomeOutlined,
    UserOutlined ,
    TeamOutlined
  } from "@ant-design/icons";
  import Link from "next/link";

function userAdmin() {
  return (
    <>
    <Row>
        <Col span={12} className="col-userAdmin">
            <Link href="/DataPelatih">
            <Col span={24} className="col-admin">
                <h1 className='h1-adminUser'><UserOutlined className='icon' /><br /> ADMIN</h1>
            </Col>
            </Link>
           
        </Col>
        <Col span={12} className="col-userAdmin">
            <Link href="/VisiMisi">
            <Col span={24} className="col-user">
            <h1 className='h1-adminUser'><TeamOutlined className='icon' /><br /> USER</h1>
            </Col>
            </Link>
        </Col>
    </Row>
    </>
  )
}

export default userAdmin