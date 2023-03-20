import {
  DiffOutlined,
  DeleteOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Table, Form, Modal, Input, Button, Select,Row,Col } from "antd";
import React, { useState } from "react";
import Link from "next/link";
import prisma from "@/utils/prisma";
import { useRouter } from "next/router";
import { withIronSessionSsr } from 'iron-session/next';
import { redirect } from "next/dist/server/api-utils";

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
    const atlit = await prisma.atlit.findMany({
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
        atlit,
        cabor: cabor.map(c => ({
          label: c.nama,
          value: c.id
        }))
      }
    }
  },
  cookieConfig,
)

function DataAtlit({ atlit, cabor }) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  

  //  edit
  const [visible, setVisible] = useState(false);
  const [currentAtlit, setCurrentAtlit] = useState(null)

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleEdit = (record) => {
    form.resetFields();
    setCurrentAtlit(record)
    setVisible(true);
  };

  const handleSubmit = async () => {
    const values = await form.validateFields();
    try {
      if (values.id) {
        await fetch("/api/atlit", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
      } else {
        await fetch("/api/atlit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...values }),
        });
      }

      form.resetFields();
      setVisible(false);
      refreshData();
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      const data = await response.json();
      console.log(data.message)
      router.push("/")
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }

  const handleCancel = () => {
    form.resetFields();
    setCurrentAtlit(null)
    setVisible(false);
  };

  const handleDelete = (record) => {
    Modal.confirm({
      title: "Apakah anda yakin menghapus data atlit ini?",
      onOk: async () => {
        await fetch("/api/atlit", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: record.id}),
        });
        refreshData();
      },
    });
  };

  const columns = [
    {
      title: "Nama Lengkap",
      dataIndex: "nama",
      key: "1",
      
    },
    {
      title: "TTL",
      dataIndex: "ttl",
      key: "2",
    },
    {
      title: "Alamat",
      dataIndex: "alamat",
      key: "3",
    },
    {
      title: "Telephone",
      dataIndex: "telephone",
      key: "4",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "5",
    },
    {
      title: "Cabor",
      dataIndex: "cabor",
      key: "6",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (text, record, index) => (
        <Button type="primary" onClick={() => handleEdit(record)} id="mut">
          Edit
        </Button>
      ),
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (text, record, index) => (
        <Button type="primary" danger onClick={() => handleDelete(record)} id="mutbgt">
          <DeleteOutlined />
        </Button>
      ),
    },
  ];

  const [form] = Form.useForm();

  const data = atlit
    ? atlit.map((item, index) => {
        return {
          key: index,
          id: item.id,
          nama: item.nama,
          ttl: item.ttl,
          alamat: item.alamat,
          telephone: item.telephone,
          gender: item.gender,
          cabor: item.cabor.nama,
        };
      })
    : [];

    async function handleDownloadFile() {
      const res = await fetch('/api/atlit/download', {
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
            <h2 align="center" >KONI KP</h2>
          </div>
          <DeleteOutlined />
          <Menu
            theme="dark"
            mode="inline"
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: <Link href="/DataWasit">Data Wasit</Link>,
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: <Link href="/DataPelatih">Data Pelatih</Link>,
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: <Link href="/DataAtlit">Data Atlit</Link>,
              },
              {
                key: "4",
                icon: <DiffOutlined />,
                label: <Link href="/DataSarpras">Data Sarpras</Link>,
              },
              {
                key: "5",
                icon: <HomeOutlined />,
                label: <Link href="/">Home</Link>,
              },
              {
                key: "6",
                label: <Button onClick={logout} disabled={isLoading}>
                {isLoading ? "Logging out..." : "Logout"}
              </Button>
              }
            ]}
          />
        </Sider>
        <div style={ { backgroundColor: "black", }}>
          <Row>
            <Col span={24} align="center" style={{color: "white"}}>
              <h1>DATA ATLIT KONI KP</h1>
            </Col>
            <Col span={12}>
              <Button type='primary' onClick={() => handleDownloadFile()} id="btn_sarpras1"> Download File</Button>
            </Col>
            <Col span={12} style={{textAlign: "end"}}>
              <Button type="primary" onClick={() => setVisible(true)} id="mutbgttt">+ Data </Button>
            </Col>
            <Table
            className="black-form"
            columns={columns}
            dataSource={data}
            scroll={{
              x: 1720,
            }}
          />
          <Modal
            title="Edit Data Atlit"
            open={visible}
            onOk={handleSubmit}
            onCancel={handleCancel}
            destroyOnClose={true}
          >
            <Form
              style={{ backgroundColor: "black"}}
              preserve={false}
              form={form}
              initialValues={currentAtlit}
            >
              <Form.Item
                label="ID"
                hidden={true}
                name="id"
                rules={[{ required: false }]}
                style={{ backgroundColor: 'red' }} // tambahkan style marginBottom
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Nama Lengkap"
                name="nama"
                rules={[
                  { required: true, message: "Tolong Input Nama lengkap!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                className="form-item"
                label="TTL"
                name="ttl"
                rules={[
                  {
                    required: true,
                    message: "Tolong Input Tempat Tanggal Lahir!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Alamat"
                name="alamat"
                rules={[{ required: true, message: "Tolong Input Alamat!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Telephone"
                name="telephone"
                rules={[
                  {
                    required: true,
                    message: "Tolong Input Nomer Yang Bisa Dihubungi!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[
                  { required: true, message: "Tolong Input Jenis Kelamin!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="cabor_id">
                <Select
                  showSearch
                  placeholder="Select a person"
                  optionFilterProp="children"
                  // onChange={onChange}
                  // onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
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
  );
}

export default DataAtlit;
