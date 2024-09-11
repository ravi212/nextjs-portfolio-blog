import Link from 'next/link';
import Footer from '../../client/layout/Footer';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import { getAllCategories } from '@/lib/actions/category.action';

const BgLayout = async ({ children, slug }) => {

  const res: any = await getAllCategories()
  const categories = res?.categories;

  return (
    <div className='min-h-screen mx-auto w-full '>
      <div className='w-full'>
        <div className="bg-gray-400 shadow-lg  p-6 ">
          <div className=' w-full mx-auto md:w-[90%] lg:w-[85%] xl:w-[80%] flex justify-between items-center'>
            <Link href={'/blog'} className="text-center text-2xl font-semibold cursor-pointer hover:text-red-500">Ravi R.</Link>
            <div className='flex items-center gap-2 hover:text-red-500'>
              <RecentActorsIcon className='w-8 h-8' />
              <Link href={`/`} target='_blank' className='text-lg font-medium '>Portfolio</Link>
            </div>
          </div>
   
        </div>
        <div className="flex flex-row  px-4 py-6 gap-6 w-full mx-auto md:w-[90%] lg:w-[85%] xl:w-[80%]">
          <div className="w-[100%] container ">{children}</div>
          <aside className=" w-[30%] flex flex-col gap-3 p-3">
            {
              categories?.map((cat: CategoryType, index: number) => (
                <Link key={index} href={`/blog?category=${cat.slug}`}>{cat.title}</Link>
              ))
            }
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BgLayout;