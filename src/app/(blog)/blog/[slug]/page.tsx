import Post from '@/components/molecules/blog/post';
import React from 'react'

const Page = ({
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) => {
  return (
    <div>
      <Post id={params.slug}/>
    </div>
  )
}

export default Page