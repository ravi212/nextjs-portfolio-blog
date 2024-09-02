"use client"
import React from 'react';
import { Popconfirm, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import Link from 'next/link';
import { deletePost } from '@/lib/post.action';
import { revalidatePath } from 'next/cache';

interface DataType {
  _id: string;
  title: string;
  slug: number;
  content: string;
  createdAt: Date;
}

const Posts = ({posts, reGetPosts}: {posts: any, reGetPosts: () => void}) => {

  const handleDelete = async (id: string) => {
    await deletePost(id);
    reGetPosts();
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