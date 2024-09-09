import Posts from "@/components/molecules/blog/posts";
import { getAllPosts } from "@/lib/actions/post.action";

const Page = async () => {
  
  const data = await getAllPosts();
  const posts: any = data?.posts;

  if (!posts) {
    return
  }

  return (
    <Posts posts={posts} />
  );
};

export default Page;