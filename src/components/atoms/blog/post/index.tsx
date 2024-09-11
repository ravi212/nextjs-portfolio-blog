import Link from "next/link";
import Image from "next/image";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PortraitIcon from '@mui/icons-material/Portrait';
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen';

const BlogPost = ({ title, textContent, date, slug, imageUrl, pinned, featured, hashTags, author, category }) => {
  return (
    <Link href={`/blog/${slug}`} className="bg-white rounded-lg drop-shadow-2xl mb-6 flex flex-col cursor-pointer">
      <div className="relative w-[100%] max-h-[200px] overflow-hidden rounded-t-lg">
        <Image alt="blog-img" width={900} height={900}  className="object-contain w-[100%]" src={imageUrl} />
      </div>
      <div className="p-8">
        <div className="flex justify-between md:flex-row items-start flex-col py-3">
          <h2 className="text-2xl font-bold mb-2 ">
              <p className="text-gray-700 hover:underline">{title}</p>
              <p className="text-gray-600 text-base font-medium items-center py-3"><PortraitIcon className="w-6 h-6 text-gray-400"/> <span>{author}</span></p>
          </h2>
          <div className="flex items-center gap-1 md:py-0 py-3">
            <TypeSpecimenIcon className="w-6 h-6 text-gray-400"/>
            <span className="text-gray-600 text-sm">{category}</span>
          </div>
          
        </div>
        <p className="text-gray-800">
          {textContent}...(read more)
        </p>{" "}
        <div className="flex gap-3 pt-8 justify-between">
          <div  className="flex gap-3 flex-wrap">

          {
          hashTags && hashTags?.map((item: string, index: number) => (
            <span key={`${item}-${index}`} className="px-2 py-1 rounded-lg bg-gray-400 text-white font-medium">#{item}</span>
          ))
        }
          </div>


        <div className="flex items-center gap-1 md:py-0 py-3">
        <CalendarMonthIcon className="w-6 h-6 text-gray-400"/>
        <p className="text-gray-600 text-sm ">{date}</p>

        </div>

        </div>

      </div>
    </Link>
  );
};

export default BlogPost;
