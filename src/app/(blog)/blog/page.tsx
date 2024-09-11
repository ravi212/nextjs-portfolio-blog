import Posts from "@/components/molecules/blog/posts";
import { getAllPosts } from "@/lib/actions/post.action";

const Page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {

  const category = searchParams?.category

  const data = await getAllPosts(category);
  const posts: any = data?.posts;

  if (!posts) {
    return
  }

  return (
    <Posts posts={posts} />
  );
};

export default Page;