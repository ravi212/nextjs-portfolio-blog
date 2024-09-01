"use client"
import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import Link from 'next/link';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  description: string;
}

const columns: TableColumnsType<DataType> = [
  { title: 'Title', dataIndex: 'title', key: 'title' },
  { title: 'Slug', dataIndex: 'slug', key: 'slug' },
  { title: 'Created On', dataIndex: 'createdAt', key: 'createdAt' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (row) => <div className='flex gap-4'>
        <Link href={`/admin/posts/edit?id=${row.key}`} className='border rounded-md px-3 py-1 cursor-pointer shadow-md hover:text-black'>
          edit
       </Link>
        <p className='bg-red-500 rounded-md px-3 py-1 text-white cursor-pointer shadow-md'>delete</p>
    </div>,
  },
];

const data: DataType[] = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
  },
];

const Posts: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
  />
);

export default Posts;