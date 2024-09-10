import PostEdit from '@/components/molecules/admin/post'
import { getAllCategories } from '@/lib/actions/category.action';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import React from 'react'

const Page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string  | undefined };
}) => {

  const response: any = await getAllCategories();
  const categories = response?.categories;

  return (
    <div className='px-10 '>
    <div className='py-6 gap-4 flex items-center'>
      <Link href={`/admin/posts/list`}>
        <ArrowBackIcon className='cursor-pointer' />
      </Link>
      
       <h3 className="text-xl font-medium">Edit Post</h3>
    </div>
      <PostEdit categories={categories} postId={searchParams?.id} />
    </div>
    
  )
}

export default Page