import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    DiffOutlined,
    HomeOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu, Row, Col, Divider, Table, Form, Modal, Input, Button, Select} from 'antd';
  import React, { useState } from 'react';
  import Link from 'next/link'
  import prisma from '@/utils/prisma';
  import { useRouter } from 'next/router';
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
      const sarpras = await prisma.sarpras.findMany({
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
          sarpras,
          cabor: cabor.map(c => ({
            label: c.nama,
            value: c.id
          }))
        }
      }
    },
    cookieConfig,
  )
  
  function DataSarpras({ sarpras,cabor }) {
    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter()
  
    //  edit
    const [visible, setVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
  
    const refreshData = () => {
      router.replace(router.asPath)
    }
  
    const handleEdit = (index) => {
      form.resetFields()
      setCurrentIndex(index);
      setVisible(true);
    };
  
    const handleSubmit = async () => {
      const values = await form.validateFields();
      try {
        if(values.id){
          await fetch('/api/sarpras', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          })
          
        }else{
          await fetch('/api/sarpras', {
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
  
    const handleDelete = (index) => {
      Modal.confirm({
      title: 'Apakah anda yakin menghapus data sarpras ini ?',
      onOk: async () => {
      await fetch('/api/sarpras', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: sarpras[index].id })
      })
      refreshData()
    }
    })
    };
  
  
    const columns = [
      {
        title: 'No',
        width: 100,
        dataIndex: 'key',
        key: 'name',
        fixed: 'left',
      },
      {
        title: 'Cabor',
        dataIndex: 'cabor',
        key: '1',
      },
      {
        title: 'Nama Barang',
        dataIndex: 'name',
        key: '2',
      },
      {
        title: 'Tahun Perolehan',
        dataIndex: 'tahun',
        key: '3',
      },
      {
        title: 'Keterangan',
        dataIndex: 'keterangan',
        key: '4',
      },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: (text,record,index) => <Button type='primary' onClick={() => handleEdit(index)} id="btn_sarpras">Edit</Button>,
      },
      {
        title: "Action",
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: (text,record,index) => <Button type='primary' danger onClick={() => handleDelete(index)} id="btn_sarprass">Delete</Button>,
      }
    ];
  
    const [form] = Form.useForm();
  
    const data = sarpras ? sarpras.map((item, index) => {
      return {
        key: index + 1, 
        name: item.nama,
        tahun: item.tahun,
        cabor: item.cabor.nama,
        keterangan: item.keterangan
      }
    }): [];
  
    async function handleDownloadFile() {
      const res = await fetch('/api/sarpras/download', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const blob = await res.blob();
      const file = window.URL.createObjectURL(blob);
      window.location.assign(file);
    }
    
    
  
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
            <h1 align="center" style={{color: "white",margin: "0 0 50px 0"}}>DATA SARPRAS KONI KP</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between',marginBottom: "20px" }}>
            <Button type='primary' onClick={() => handleDownloadFile()} id="btn_sarpras1"> Download File</Button>
            <Button type='primary' onClick={() => setVisible(true)} id="btn_sarpras12">+ Data</Button>
            </div>
          <Table
            columns={columns}
            dataSource={data}
            scroll={{
              x: 1700,
            }}
          />
        <Modal
          title="Edit Data Sarpras"
          open={visible}
          onOk={handleSubmit}
          onCancel={handleCancel}
          destroyOnClose={true}
        >
          <Form preserve={false} form={form} initialValues={currentIndex === null ? {} : sarpras[currentIndex]}>
            <Form.Item
              label="ID"
              hidden={true}
              name="id"
              rules={[{ required: false,}]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Nama Barang"
              name="nama"
              rules={[{ required: true, message: 'Tolong Input Nama Barang !' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Tahun"
              name="tahun"
              rules={[{ required: true, message: 'Tolong Input Tahun' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Keterangan"
              name="keterangan"
              rules={[{ required: true, message: 'Tolong Input Keterangan !' }]}
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
          </div>
                
          </Layout>
      </>
      
    )
  }
  
  export default DataSarpras
  