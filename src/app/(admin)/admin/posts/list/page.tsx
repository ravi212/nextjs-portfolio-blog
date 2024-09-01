
import dynamic from 'next/dynamic'
import Link from 'next/link'
const Posts = dynamic(() => import('@/components/molecules/admin/posts'), {ssr: false}) 
import React from 'react'

const Page = () => {

  return (
    <div>
      <div className='py-6 flex justify-between items-center'>
        <h3 className="text-2xl font-medium">Posts</h3>
        <Link href={`/admin/posts/add`} className='bg-red-500 p-3 rounded-md text-white hover:text-white cursor-pointer'>
            Add New
        </Link>
      </div>
      <Posts />
    </div>
  )
}

export default Page