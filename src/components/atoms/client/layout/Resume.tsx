"use client";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export const Resume = () => {
  return (
    <button
      onClick={() => window.open("resume/Ravi_Raina_Resume.pdf", "_blank")}
      className="
        flex items-center gap-1.5
        px-2 py-1
        text-xs md:text-sm
        text-primaryColor
        border border-gray-400/60
        rounded
        transition
        hover:text-secondaryTextColor
        hover:border-secondaryTextColor
        hover:shadow-sm
        min-w-0 whitespace-nowrap
      "
    >
      <CloudDownloadIcon fontSize="small" />
      <span className="inline">Resume</span>
    </button>
  );
};
