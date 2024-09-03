import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BgLayout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div>
        <div className="bg-white flex justify-between items-center px-14 shadow-md p-6">
          <div className="text-center text-2xl font-bold">My Blog</div>
          <div className='flex items-center gap-3'>
            <ArrowForwardIcon className='w-5 h-5' />
            <Link href={`/`} className='text-lg font-semibold'>My Portfolio</Link>
          </div>
          
        </div>
        <div className="p-6 bg-gray-100">
          <div className="container mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BgLayout;