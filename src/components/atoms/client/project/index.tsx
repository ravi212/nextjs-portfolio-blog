import Image from 'next/image'
import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import ComputerIcon from '@mui/icons-material/Computer';
import LanguageIcon from '@mui/icons-material/Language';
import Link from 'next/link';
import { ProjectPlatform } from '@/enum/enum';
import { Tooltip } from 'antd';

const Project = ({project}: {project: ProjectType}) => {


  const renderIcon = (title) => {
    switch(title) {
      case ProjectPlatform.WEB :
        return <LanguageIcon />
      case ProjectPlatform.DESKTOP :
        return <ComputerIcon />
      case ProjectPlatform.ANDROID :
        return <AndroidIcon />
      case ProjectPlatform.IOS :
        return <AppleIcon />
    }
  }

  return (
    <div className='bg-white rounded-lg mr-6'>
    <div  className="relative w-full min-h-[350px] overflow-hidden rounded-t-lg transition-all duration-150 ease-in-out shadow-xl ">
    {/* overlay with opacity */}
    <div className="w-full h-full absolute bg-opacity-50 z-10 inset-0 bg-gradient-to-t from-black "></div>
    <Image
      alt="blog-img"
      fill
      className="absolute inset-0 object-cover"
      src={project?.coverImage}
      priority={true}
    />

    <div className='absolute bottom-2 left-4 z-20 flex flex-wrap gap-2 py-3'>
      {
        project?.technologies?.map((item, index) => (
          <span key={index} className='py-1 px-2 bg-gray-100 text-[#0e1f39] font-medium rounded-md text-xs'>
            {item}
          </span>
        ))
      }
      </div>
    </div>

    <div className='py-6 px-4 flex  flex-col justify-between shadow-xl rounded-lg  gap-4'>
      <div>
      <h1 className='text-[#0e1f39] text-lg font-semibold'>{project?.title}</h1>

      <p className='text-[#0e1f39] text-base py-1 text-wrap'> {project?.description}</p>
      </div>


      <div className='flex flex-wrap flex-row gap-2'>
      {
        project?.platform?.map((item, index) => (
          <Link target='_blank' href={item?.link} key={index} className='hover:scale-125 duration-100 transition-transform shadow-xl p-2 bg-[#0e1f39] text-white rounded-full text-sm'>
            <Tooltip title={item.title} placement='bottom'>
            {
              renderIcon(item?.title)
            }
            </Tooltip>

          </Link>
        ))
      }
      </div>
    </div>
     
    </div>
  )
}

export default Project