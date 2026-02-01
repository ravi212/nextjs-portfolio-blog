"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import ComputerIcon from "@mui/icons-material/Computer";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { ProjectPlatform } from "@/enum/enum";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Project = ({ project }: { project: ProjectType }) => {
  const [imageLoading, setImageLoading] = useState(true);
  console.log(project);
  const renderIcon = (title: string) => {
    switch (title) {
      case ProjectPlatform.WEB:
        return <LanguageIcon fontSize="small" className="w-5 h-5" />;
      case ProjectPlatform.DESKTOP:
        return <ComputerIcon fontSize="small" className="w-5 h-5" />;
      case ProjectPlatform.ANDROID:
        return <AndroidIcon fontSize="small" className="w-5 h-5" />;
      case ProjectPlatform.IOS:
        return <AppleIcon fontSize="small" className="w-5 h-5" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
    hover: { scale: 1.08, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      className="group h-full flex flex-col rounded-lg overflow-hidden bg-secondaryColor shadow-lg hover:shadow-2xl transition-all duration-300 border border-primaryColor/10"
    >
      {/* Image Container */}
      <motion.div
        className="relative w-full h-[220px] overflow-hidden bg-gradient-to-b from-primaryColor/5 to-primaryColor/10"
        // initial="hidden"
        whileHover="hover"
        variants={imageVariants}
      >
        {/* Loading Skeleton */}
        {imageLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-primaryColor/10 via-primaryColor/20 to-primaryColor/10 animate-pulse z-10" />
        )}

        <Image
          alt={project?.title || "Project image"}
          className="object-cover w-full h-full"
          src={project?.coverImage || "/images/placeholder.jpg"}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          onLoadingComplete={() => setImageLoading(false)}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondaryColor via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

        {/* Category Badge */}
        {project?.category && (
          <motion.div
            className="absolute top-3 right-3 px-3 py-1 bg-secondaryTextColor/95 text-secondaryColor rounded-full text-xs font-semibold backdrop-blur-sm"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {typeof project.category === "object" ? project.category.title : "Project"}
          </motion.div>
        )}
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="flex flex-col flex-1 py-5 px-5 justify-between gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        {/* Title & Description */}
        <div className="space-y-2">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-primaryColor text-lg font-bold line-clamp-2 leading-tight"
          >
            {project?.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primaryTextColor/70 text-sm leading-relaxed line-clamp-2"
          >
            {project?.description}
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          className="h-[1px] bg-gradient-to-r from-primaryColor/20 via-primaryColor/10 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        />

        {/* Technologies */}
        <motion.div
          className="flex flex-wrap gap-1.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {project?.technologies?.slice(0, 3).map((item, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="py-1 px-2.5 bg-primaryColor/8 text-primaryColor font-medium rounded-full text-xs border border-primaryColor/20 hover:border-secondaryTextColor/40 transition-all duration-200"
            >
              {item}
            </motion.span>
          ))}
          {project?.technologies && project.technologies.length > 3 && (
            <span className="py-1 px-2.5 text-primaryColor/60 font-medium text-xs flex items-center">
              +{project.technologies.length - 3}
            </span>
          )}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-[1px] bg-gradient-to-r from-transparent via-primaryColor/10 to-primaryColor/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        />

        {/* Action Buttons */}
        <motion.div
          className="flex items-center justify-between gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Platform & GitHub Links */}
          <div className="flex flex-wrap gap-1.5">
            {project?.platform?.map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  target="_blank"
                  href={item?.link}
                  className="flex gap-1 items-center px-2.5 py-1.5 bg-primaryColor text-secondaryColor rounded-lg text-xs font-medium hover:bg-primaryColor/90 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {renderIcon(item?.title)}
                  <span className="hidden sm:inline">{item.title}</span>
                </Link>
              </motion.div>
            ))}

            {project?.github && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  target="_blank"
                  href={project?.github}
                  className="flex gap-1 items-center px-2.5 py-1.5 bg-primaryColor text-secondaryColor rounded-lg text-xs font-medium hover:bg-primaryColor/90 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <GitHubIcon fontSize="small" className="w-3.5 h-3.5" />
                  {/* <span className="hidden xs:inline capitalize">Github</span> */}
                </Link>
              </motion.div>
            )}
          </div>

          {/* View Link */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={`/projects/${project?._id}`}
              className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-secondaryTextColor/90 to-secondaryTextColor text-secondaryColor rounded-lg text-xs font-bold hover:from-secondaryTextColor hover:to-secondaryTextColor/90 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span>View</span>
              <ArrowOutwardIcon fontSize="small" className="w-3 h-3" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
