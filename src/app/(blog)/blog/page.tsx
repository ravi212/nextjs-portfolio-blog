import Posts from "@/components/molecules/blog/posts";
import { getAllPosts } from "@/lib/post.action";

const Page = async () => {

  const data = await getAllPosts();
  const posts: any = data?.posts;

  console.log(posts)

  if (!posts) {
    return
  }

  return (
    <Posts posts={posts} />
  );
};

export default Page;