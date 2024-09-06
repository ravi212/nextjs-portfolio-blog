import { getPostBySlug } from '@/lib/post.action';
import Head from 'next/head';

const Post = async ({slug}: {slug: string}) => {
  
  const data = await getPostBySlug(slug);
  const post: PostType | any = data?.post;

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content.substring(0, 150)} />
      </Head>
      <div className="p-6 mb-6">
        <h1 className="text-3xl font-semibold mb-4">{post.title}</h1>
        <p className="text-gray-600 text-sm mb-4">{new Date(post.createdAt).toLocaleDateString()}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-gray-800"></div>
      </div>
    </>
  );
};

export default Post;