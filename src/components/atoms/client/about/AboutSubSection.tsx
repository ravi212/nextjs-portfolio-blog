import React from 'react'

const ResumeSubSection = ({selectedSection}: {selectedSection : ResumeSectionProps}) => {
  return (
    <div className="w-[100%] lg:border-t-secondaryColor">
    <h3 className='text-2xl font-semibold pb-4'>{selectedSection.title}</h3>
    <p className='text-base'>{selectedSection.description}</p>
    <div className="flex flex-col my-4 lg:my-0">
      {selectedSection.handle == "experience" && (
        <div className="grid grid-col-1 xl:grid-cols-2 gap-6 my-6">
          {selectedSection.items.map((item: ResumeItems, index: number) => (
            <div
              key={index}
              className="p-8 bg-primaryColor shadow-2xl text-secondaryColor rounded-2xl"
            >
              <div className="flex flex-row justify-between items-center">
                <p className="text-xl font-semibold">{item.role}</p>
                {/* <span onClick={() => {item.isDesc = !item?.isDesc}} className="bg-secondaryColor cursor-pointer w-10 h-10 flex items-center rounded-full justify-center">
                {
                  item.isDesc ? <ArrowUpOutlined
                  style={{ width: 18, height: 18 }}
                  className="text-primaryColor font-bold w-12 h-12"
                 />
                :<ArrowDownOutlined
                style={{ width: 18, height: 18 }}
                className="text-primaryColor font-bold w-12 h-12"
                />

                } 
                </span> */}
              </div>

              <p className="text-lg font-medium py-2">{item.title}</p>
              <p className="text-md font-medium">{item.period}</p>

              {/* <ul className="flex flex-row flex-wrap gap-2 p-6">
                {item?.description?.map((ele: string, ind: number) => (
                  <li
                    key={ind}
                    className="bg-primaryColor list-disc text-secondaryColor rounded-2xl font-semibold "
                  >
                    {ele}
                  </li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      )}
      {selectedSection.handle == "skills" && (
        <div className=" grid grid-col-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
          {selectedSection.items.map((item: any, index: number) => (
            <div
              key={index}
              className="p-2 border-b border-b-primaryColor pb-10"
            >
              <p className="text-primaryColor font-semibold text-xl pb-3">
                {item.title}
              </p>
              <ul className="flex flex-row flex-wrap gap-2">
                {item.skills.map((ele: string, ind: number) => (
                  <li
                    key={ind}
                    className="bg-primaryColor p-4 text-secondaryColor rounded-2xl font-semibold "
                  >
                    {ele}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
  )
}

export default ResumeSubSection