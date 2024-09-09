import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from '../../client/layout/Footer';

const BgLayout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div>
        <div className="bg-white flex justify-between items-center px-8 shadow-md p-6">
          <div className="text-center text-2xl font-semibold">Ravi R.</div>
          <div className='flex items-center gap-3 hover:text-red-500'>
            <ArrowForwardIcon className='w-5 h-5' />
            <Link href={`/`} target='_blank' className='text-lg font-medium '>My Portfolio</Link>
          </div>
          
        </div>
        <div className="md:p-6 p-0 py-6 px-3 flex flex-row bg-gray-100 gap-6">
          <div className="w-[100%] container ">{children}</div>
          <aside className="md:flex w-[30%] hidden">
            <p>aside section</p>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BgLayout;