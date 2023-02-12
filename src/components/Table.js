import React,{useState, useEffect} from 'react';
import { Table } from 'antd';
import Link from 'next/link'
import prisma from '../utils/prisma'


export async function getServerSideProps() {
  const atlit = await prisma.atlit.findMany({
    include: {
      cabor: true,
    }
    
  })
  return { 
    props: {
      atlit,
    }
  }
}

function Tables({ atlit }) {

  
  
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

const data = atlit ? atlit.map((item, index) => {
  return {
    key: index + 1,
    name: item.nama,
    ttl: item.ttl,
    address: item.alamat,
    hp: item.telephone,
    gender: item.gender,
    cabor: item.cabor.nama
  }
}): [];
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