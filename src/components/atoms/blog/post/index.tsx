import { htmlToPlainText } from '@/utils/common';
import Link from 'next/link';

const BlogPost = ({ title, content, date, slug }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-2">
        <Link href={`/blog/${slug}`}>
          <p className="text-blue-600 hover:underline">{title}</p>
        </Link>
      </h2>
      <p className="text-gray-600 text-sm mb-4">{date}</p>
      <p className="text-gray-800">{htmlToPlainText(content).substring(0, 300)}...</p> {/* Show a preview */}
    </div>
  );
};

export default BlogPost;