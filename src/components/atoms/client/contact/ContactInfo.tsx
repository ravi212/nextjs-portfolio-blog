import React from "react";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const ContactInfo = () => {
  return (
    <div className="w-full h-full flex flex-1 flex-col  items-start lg:items-center text-primaryColor  p-4">
      {/* <h2 className="text-2xl font-bold mb-4">Contact Information</h2> */}
      <div className="space-y-6 flex flex-col gap-6">
        <div className="flex flex-row gap-4 items-center">
          <div className="flex justify-center items-center shadow-xl p-2 bg-primaryColor rounded-sm">
            <AttachEmailIcon className="text-secondaryColor" />
          </div>

          <div>
            <h3 className="text-base font-medium text-primaryColor">Email</h3>
            <p className="text-primaryColor">ravi@rainaspace.com</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center ">
          <div className="flex justify-center items-center shadow-xl p-2 bg-primaryColor rounded-sm">
            <WhatsAppIcon className=" text-secondaryColor" />
          </div>

          <div>
            <h3 className="text-base font-medium text-primaryColor">WhatsApp</h3>
            <p className="text-primaryColor">+91-9055117296</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="flex justify-center items-center shadow-xl p-2 bg-primaryColor rounded-sm">
            <LocationOnIcon className="text-secondaryColor" />
          </div>

          <div>
            <h3 className="text-base font-medium text-primaryColor">Address</h3>
            <p className="text-primaryColor">Punjab, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
