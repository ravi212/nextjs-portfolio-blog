import Link from 'next/link';
import Footer from '../../client/layout/Footer';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

const BgLayout = ({ children, slug }) => {
  return (
    <div className='min-h-screen mx-auto w-full md:w-[80%] lg:w-[70%] xl:w-[60%]'>
      <div className='w-full'>
        <div className=" flex justify-between items-center p-6">
          <Link href={'/blog'} className="text-center text-2xl font-semibold cursor-pointer hover:text-red-500">Ravi R.</Link>
          <div className='flex items-center gap-2 hover:text-red-500'>
            <RecentActorsIcon className='w-8 h-8' />
            <Link href={`/`} target='_blank' className='text-lg font-medium '>Portfolio</Link>
          </div>
          
        </div>
        <div className="flex flex-row md:p-0 p-4 gap-6">
          <div className="w-[100%] container ">{children}</div>
          {/* <aside className="md:flex w-[30%] hidden">
            <p>aside section</p>
          </aside> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BgLayout;