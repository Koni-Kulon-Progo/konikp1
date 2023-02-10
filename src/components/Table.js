import React from 'react';
import { Table } from 'antd';


function Tables() {
  
const columns = [
  {
    title: 'No',
    width: 100,
    dataIndex: 'key',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Nama Lengkap',
    dataIndex: 'name',
    key: '1',
  },
  {
    title: 'TTL',
    dataIndex: 'ttl',
    key: '2',
  },
  {
    title: 'Alamat',
    dataIndex: 'address',
    key: '3',
  },
  {
    title: 'Telephone',
    dataIndex: 'hp',
    key: '4',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: '4',
  },
  {
    title: 'Cabor',
    dataIndex: 'cabor',
    key: '5',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>Edit</a>,
  },
];
const data = [
  {
    key: '1',
    name: 'Wagiman',
    age: 32,
    ttl: "jakarta, 3 Januari 1999",
    address: 'Kokap',
    hp : "083xxxx1",
    gender : "laki-laki",
    cabor : "Voli"
  },
  {
    key: '2',
    name: 'Yanto',
    age: 40,
    ttl: "Bandung, 6 Februari 2020",
    address: 'Pekik Jamal',
    hp : "082xxxx30",
    gender : "laki-laki",
    cabor : "bilyard"
  },
  {
    key: '3',
    name: 'Harjo',
    age: 40,
    ttl: "Wates, 17 Agustus 1945",
    address: 'Wates',
    hp : "0815xxxx60",
    gender : "Wanita",
    cabor : "Yongmodo"
  },
];
  return (
    <div className='container-table'>
      <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1300,
    }}
  />
    </div>
  )
}

export default Tables