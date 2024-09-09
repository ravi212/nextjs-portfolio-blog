"use client"
import React from 'react';
import { Checkbox, Popconfirm, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import Link from 'next/link';
import { deletePost, toggleFeatured, togglePinned } from '@/lib/actions/post.action';
import { formatDate } from '@/utils/common';

interface DataType {
  _id: string;
  title: string;
  slug: number;
  content: string;
  featured: boolean;
  pinned: boolean;
  createdAt: any;
}

const Posts = ({posts, reGetPosts}: {posts: any, reGetPosts: () => void}) => {

  const handleDelete = async (id: string) => {
    await deletePost(id);
    reGetPosts();
  }

  const handlePinned = async (id: string) => {
    await togglePinned(id)
    reGetPosts();
  }

  const handleFeatured = async (id: string) => {
    await toggleFeatured(id)
    reGetPosts();
  }

  const columns: TableColumnsType<DataType> = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Slug', dataIndex: 'slug', key: 'slug' },
    { title: 'Created On', dataIndex: 'createdAt', key: 'createdAt',
      render: (createdAt) => <div className='flex gap-4'>
      <p>{formatDate(createdAt) }</p> 
    </div>,
     },
    {
      title: 'Pinned',
      dataIndex: '',
      key: 'pinned',
      render: (row) => <div className='flex  gap-4'>
        <Checkbox checked={row.pinned} onChange={() => handlePinned(row._id)}>
        </Checkbox> 
      </div>,
    },
    {
      title: 'Featured',
      dataIndex: '',
      key: 'featured',
      render: (row) => <div className='flex gap-4'>
        <Checkbox checked={row.featured} onChange={() => handleFeatured(row._id)}>
        </Checkbox>
          
      </div>,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'action',
      render: (row) => <div className='flex gap-4'>
          <Link href={`/admin/posts/edit?id=${row._id}`} className='border rounded-md px-3 py-1 cursor-pointer shadow-md hover:text-black'>
            edit
         </Link>
         <Popconfirm
          title="Delete the post"
          description="Are you sure to delete this post?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => handleDelete(row._id)}
        >
          <p className='bg-red-500 rounded-md px-3 py-1 text-white cursor-pointer shadow-md'>delete</p>
        </Popconfirm>
          
      </div>,
    },
  ];


  return <Table
    columns={columns}
    dataSource={posts}
    rowKey={(row) => row._id}
  />

};

export default Posts;