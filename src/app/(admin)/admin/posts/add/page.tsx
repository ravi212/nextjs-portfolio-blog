import PostEdit from '@/components/molecules/admin/post'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='px-10 '>
    <div className='py-6 flex gap-4 items-center'>
     <Link href={`/admin/posts/list`}>
        <ArrowBackIcon className='cursor-pointer' />
      </Link>
       <h3 className="text-xl font-medium">Add Post</h3>
    </div>
      <PostEdit />
    </div>
    
  )
}

export default Page