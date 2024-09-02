import BlogPost from '@/components/atoms/blog/post'
import React from 'react'

const Posts = ({posts}: {posts: PostType[]}) => {

  return (
    <div>
      {posts.map(post => (
        <BlogPost
          key={post._id}
          title={post.title}
          content={post.content}
          date={new Date(post.createdAt).toLocaleDateString()}
          slug={post?.slug}
        />
      ))}
    </div>
  )
}

export default Posts