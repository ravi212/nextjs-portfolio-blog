
import { formatDate } from '@/utils/common'
import React, { lazy } from 'react'
const BlogPost = lazy(() => import('@/components/atoms/blog/post'))

const Posts = ({posts}: {posts: PostType[]}) => {

  return (
    <div>
      {posts.map(post => (
        <BlogPost
          key={post._id}
          title={post.title}
          content={post.content}
          date={formatDate(new Date(post.createdAt))}
          slug={post?.slug}
          imageUrl={post?.imageUrl}
        />
      ))}
    </div>
  )
}

export default Posts