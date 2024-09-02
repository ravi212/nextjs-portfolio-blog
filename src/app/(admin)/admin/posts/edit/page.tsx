import PostEdit from '@/components/molecules/admin/post'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import React from 'react'

const Page = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string  | undefined };
}) => {
  return (
    <div className='px-10 '>
    <div className='py-6 gap-4 flex items-center'>
      <Link href={`/admin/posts/list`}>
        <ArrowBackIcon className='cursor-pointer' />
      </Link>
      
       <h3 className="text-xl font-medium">Edit Post</h3>
    </div>
      <PostEdit postId={searchParams?.id} />
    </div>
    
  )
}

export default Page