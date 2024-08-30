import Head from 'next/head';


const posts = [
  { id: '1', title: 'First Blog Post', content: 'This is the content of the first blog post. It’s a detailed description of the blog topic.', date: 'August 30, 2024' },
  { id: '2', title: 'Second Blog Post', content: 'This is the content of the second blog post. Here, we discuss another topic in detail.', date: 'August 31, 2024' },
];

const Post = ({id}: {id: string}) => {
  const post = posts.find(post => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content.substring(0, 150)} />
      </Head>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 text-sm mb-4">{post.date}</p>
        <p className="text-gray-800">{post.content}</p>
      </div>
    </>
  );
};

export default Post;