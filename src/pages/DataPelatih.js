
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  DiffOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Row, Col, Divider, Table, Form, Modal, Input, Button, Select} from 'antd';
import React, { useState } from 'react';
import Link from 'next/link'
import prisma from '@/utils/prisma';
import { useRouter } from 'next/router'
import { withIronSessionSsr } from 'iron-session/next';

const { Header, Sider, Content } = Layout;

const cookieConfig =  {
  cookieName: "myapp_cookiename",
  password: "complex_password_at_least_32_characters_long",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;

    if (!user) {
      return {
        redirect: {
          destination: '/LoginPage',
          permanent: false,
        },
      }
    }
  

    const cabor = await prisma.cabor.findMany()
    const pelatih = await prisma.pelatih.findMany({
      include: {
        cabor: true,
      },
      orderBy: {
        cabor: {
          nama: "asc"
        }
      }
    })
  
    return { 
      props: {
        pelatih,
        cabor: cabor.map(c => ({
          label: c.nama,
          value: c.id
        }))
      }
    }
  },
  cookieConfig,
)

function DataPelatih({ pelatih,cabor }) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter()

  //  edit
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const refreshData = () => {
    router.replace(router.asPath)
  }

  const handleEdit = (record) => {
    form.resetFields()
    setCurrentIndex(record);
    setVisible(true);
  };

  const handleSubmit = async () => {
    const values = await form.validateFields();
    try {
      if(values.id){
        await fetch('/api/pelatih', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
        
      }else {
        await fetch('/api/pelatih', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ...values })
        })
      }
      
      form.resetFields()
      setVisible(false);
      refreshData()
    } catch (error) {
      console.error(error);
    }};

  const handleCancel = () => {
    form.resetFields()
    setCurrentIndex(null);
    setVisible(false);
  };

  const handleDelete = (record) => {
    Modal.confirm({
    title: 'Apakah anda yakin menghapus data pelatih ini?',
    onOk: async () => {
    await fetch('/api/pelatih', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id:record.id })
    })
    refreshData()
  }
  })
  };


  const columns = [
    
    {
      title: 'Nama Lengkap',
      dataIndex: 'nama',
      key: '1',
    },
    {
      title: 'TTL',
      dataIndex: 'ttl',
      key: '2',
    },
    {
      title: 'Alamat',
      dataIndex: 'alamat',
      key: '3',
    },
    {
      title: 'Telephone',
      dataIndex: 'telephone',
      key: '4',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: '5',
    },
    {
      title: 'Cabor',
      dataIndex: 'cabor',
      key: '6',
    },
    {
      title: 'Keterangan',
      dataIndex: 'keterangan',
      key: '6',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text,record,index) => <Button type='primary' onClick={() => handleEdit(record)} id="btnPelatih">Edit</Button>,
    },
    {
      title: "Action",
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text,record,index) => <Button type='primary' danger onClick={() => handleDelete(record)} id="btn_pelatih">Delete</Button>,
    }
  ];

  const [form] = Form.useForm();

  const data = pelatih ? pelatih.map((item, index) => {
    return {
      key: index,
      id: item.id, 
      nama: item.nama,
      ttl: item.ttl,
      alamat: item.alamat,
      telephone: item.telephone,
      gender: item.gender,
      cabor: item.cabor.nama,
      keterangan: item.keterangan
    }
  }): [];

  
  

  return (
    <>
    <Layout className="layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <h2 align="center">KONI KP</h2>
          </div>
          <Menu
              theme="dark"
              mode="inline"
              items={[
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: (
                    <Link href="/DataWasit">Data Wasit</Link>
                  ),
                },
                {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: (
                    <Link href="/DataPelatih">Data Pelatih</Link>
                  ),
                },
                {
                  key: '3',
                  icon: <UploadOutlined />,
                  label: (
                    <Link href="/DataAtlit">Data Atlit</Link>
                  ),
                },
                {
                  key: '4',
                  icon: <DiffOutlined />,
                  label: (
                    <Link href="/DataSarpras">Data Sarpras</Link>
                  ),
                },
                {
                  key: "5",
                  icon: <HomeOutlined />,
                  label: <Link href="/">Home</Link>,
                },
      ]}
          />
        </Sider>
        <div style={{ backgroundColor: "black"}}>
        <Row>
          <Col span={24} align="center" style={{color: "white"}}><h1>DATA PELATIH KONI KPK</h1></Col>
          <Col span={24}>
          <Button type='primary' onClick={() => setVisible(true)} id="btn_pelatihhhh">+ Data</Button>
          <Table
          columns={columns}
          dataSource={data}
          scroll={{
            x: 1700,
          }}
          responsive={true}
        />
          </Col>
          
      <Modal
        title="Edit Data Pelatih"
        open={visible}
        onOk={handleSubmit}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        <Form preserve={false} form={form} initialValues={currentIndex}>
          <Form.Item
            label="ID"
            hidden={true}
            name="id"
            rules={[{ required: false,}]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Nama Lengkap"
            name="nama"
            rules={[{ required: true, message: 'Tolong Input Nama lengkap!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="TTL"
            name="ttl"
            rules={[{ required: true, message: 'Tolong Input Tempat Tanggal Lahir!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Alamat"
            name="alamat"
            rules={[{ required: true, message: 'Tolong Input Alamat!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Telephone"
            name="telephone"
            rules={[{ required: true, message: 'Tolong Input Nomer Yang Bisa Dihubungi!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: 'Tolong Input Jenis Kelamin!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Keterangan"
            name="keterangan"
            rules={[{ required: true, message: 'Tolong Input Keterangan Contoh : Sertifikat Pelatih' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
          name="cabor_id">
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            // onChange={onChange}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={cabor}
  />

            
          </Form.Item>
        </Form>
        
      </Modal>
        </Row>
        </div> 
        </Layout>
    </>
    
  )
}

export default DataPelatih
