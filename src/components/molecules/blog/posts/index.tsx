import BlogPost from '@/components/atoms/blog/post'
import React from 'react'


const posts = [
    { id: '1', title: 'First Blog Post', content: 'This is the content of the first blog post. It’s a detailed description of the blog topic.', date: 'August 30, 2024' },
    { id: '2', title: 'Second Blog Post', content: 'This is the content of the second blog post. Here, we discuss another topic in detail.', date: 'August 31, 2024' },
  ];

const Posts = () => {
  return (
    <div>
      {posts.map(post => (
        <BlogPost
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          date={post.date}
        />
      ))}
    </div>
  )
}

export default Posts