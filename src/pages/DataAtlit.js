import {
  DiffOutlined,
  DeleteOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Table, Form, Modal, Input, Button, Select } from "antd";
import React, { useState } from "react";
import Link from "next/link";
import prisma from "@/utils/prisma";
import { useRouter } from "next/router";

const { Header, Sider, Content } = Layout;

export async function getServerSideProps() {
  const cabor = await prisma.cabor.findMany();
  const atlit = await prisma.atlit.findMany({
    include: {
      cabor: true,
    },
    orderBy: {
      cabor: {
        nama: "asc"
      },
    }
  });

  return {
    props: {
      atlit,
      cabor: cabor.map((c) => ({
        label: c.nama,
        value: c.id,
      })),
    },
  };
}

function DataAtlit({ atlit, cabor }) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

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
            ]}
          />
        </Sider>
        <div style={ { backgroundColor: "black", }}>
        <h1 align="center" style={{color: "white",margin: "0 0 50px 0"}}>DATA ATLIT KONI KP</h1>
          <div style={{display: 'flex', justifyContent: 'space-between',marginBottom: "20px"}}>
            <Button type='primary' onClick={() => handleDownloadFile()} id="btn_sarpras1"> Download File</Button>
            <Button type="primary" onClick={() => setVisible(true)} id="mutbgttt">
            + Data
            </Button>
          </div>
          <Table
            style={{ backgroundColor: 'white' }}
            columns={columns}
            dataSource={data}
            scroll={{
              x: 1700,
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
              preserve={false}
              form={form}
              initialValues={currentAtlit}
            >
              <Form.Item
                label="ID"
                hidden={true}
                name="id"
                rules={[{ required: false }]}
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
        </div>
        
      </Layout>
    </>
  );
}

export default DataAtlit;
