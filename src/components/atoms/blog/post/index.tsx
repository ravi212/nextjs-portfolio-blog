import { htmlToPlainText } from "@/utils/common";
import Link from "next/link";
import Image from "next/image";
import sampleBlogImage from "../../../../../public/images/blog-image.webp";
const BlogPost = ({ title, content, date, slug, imageUrl }) => {
  return (
    <Link href={`/blog/${slug}`} className="bg-white rounded-lg shadow-md mb-6 flex flex-col cursor-pointer">
      <div className="relative w-[100%] h-[200px] overflow-hidden rounded-t-lg">
        <Image alt="blog-img" className="object-contain w-[100%]" src={sampleBlogImage} />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-2">
              <p className="text-gray-500 hover:underline">{title}</p>
          </h2>
          <p className="text-gray-600 text-sm mb-4">{date}</p>
        </div>
        <p className="text-gray-800">
          {htmlToPlainText(content).substring(0, 300)}...
        </p>{" "}
        {/* Show a preview */}
      </div>
    </Link>
  );
};

export default BlogPost;
