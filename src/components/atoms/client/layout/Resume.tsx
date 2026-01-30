"use client"
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
export const Resume = () => {
  return (
    <button
      onClick={() => {
        window.open("resume/Ravi_Raina_Resume.pdf", "_blank");
      }}
      className="py-1 px-3 text-sm border border-gray-400 rounded-sm shadow-lg flex items-center gap-2 text-primaryColor hover:text-secondaryTextColor hover:shadow-md transition-all cursor-pointer"
    >
      <CloudDownloadIcon className="" />
      Resume
    </button>
  );
};
