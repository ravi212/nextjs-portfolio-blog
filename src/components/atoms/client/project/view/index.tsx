"use client";

import React from "react";
import { motion } from "framer-motion";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import ComputerIcon from "@mui/icons-material/Computer";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { ProjectPlatform } from "@/enum/enum";

const ProjectView = ({ project }: { project: ProjectType }) => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.05, transition: { duration: 0.4 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 * index, duration: 0.4 },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="group w-[92%] flex flex-col md:flex-row gap-6 md:gap-8 items-stretch"
    >
      {/* Image Section - Left/Top */}
      <motion.div
        className="w-full md:w-2/5 relative overflow-hidden rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300"
        // initial="hidden"
        whileHover="hover"
        variants={imageVariants}
      >
        <div className="relative w-full h-72 md:h-96 bg-gradient-to-b from-primaryColor/5 to-primaryColor/10 overflow-hidden">
          <img
            alt={project?.title}
            className="object-cover w-full h-full"
            src={project?.coverImage}
          />
          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondaryColor via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
          
          {/* Corner Badge */}
          <motion.div
            className="absolute top-4 right-4 px-3 py-1.5 bg-secondaryTextColor/95 text-secondaryColor rounded-full text-xs font-semibold backdrop-blur-sm"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            Project
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section - Right/Bottom */}
      <motion.div
        className="w-full md:w-3/5 flex flex-col justify-between py-2 md:py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {/* Title & Description */}
        <div className="space-y-3 mb-4">
          <motion.h2
            custom={0}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className="text-xl md:text-2xl font-bold text-primaryColor leading-tight"
          >
            {project?.title}
          </motion.h2>

          <motion.p
            custom={1}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className="text-primaryTextColor/75 text-sm md:text-base leading-relaxed max-w-2xl"
          >
            {project?.description}
          </motion.p>
        </div>

        {/* Technologies */}
        <motion.div
          custom={2}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-wrap gap-2 mb-6"
        >
          <span className="text-sm font-semibold text-primaryColor/60 flex items-center">Tech Stack:</span>
          {project?.technologies?.map((item, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.08, y: -3 }}
              className="py-1.5 px-3 bg-primaryColor/8 text-primaryColor font-medium rounded-full text-xs border border-primaryColor/20 hover:border-secondaryTextColor hover:bg-primaryColor/15 transition-all duration-200"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          custom={3}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-wrap gap-3 items-center"
        >
          {/* Platform Links */}
          <div className="flex flex-wrap gap-2">
            {project?.platform?.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  target="_blank"
                  href={item?.link}
                  className="flex gap-2 items-center px-3 py-2 bg-primaryColor text-secondaryColor rounded-md text-sm font-medium hover:bg-primaryColor/90 hover:shadow-lg transition-all duration-200 shadow-md"
                >
                  {renderIcon(item?.title)}
                  <span className="hidden sm:inline capitalize">{item.title}</span>
                </Link>
              </motion.div>
            ))}

            {/* GitHub Link */}
            {project?.github && (
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  target="_blank"
                  href={project?.github}
                  className="flex gap-2 items-center px-3 py-2 bg-primaryColor text-secondaryColor rounded-md text-sm font-medium hover:bg-primaryColor/90 hover:shadow-lg transition-all duration-200 shadow-md"
                >
                  <GitHubIcon fontSize="small" className="w-4 h-4" />
                  <span className="hidden sm:inline">GITHUB</span>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Details Link - Prominent */}
          {/* <motion.div
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="ml-auto"
          >
            <Link
              href={`/projects/${project?._id}`}
              className="flex items-center gap-2 px-6 py-2.5 bg-secondaryTextColor text-secondaryColor rounded-xl text-sm font-bold hover:bg-secondaryTextColor/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>View Details</span>
              <ArrowOutwardIcon fontSize="small" className="w-4 h-4" />
            </Link>
          </motion.div> */}
        </motion.div>

        {/* Footer Info */}
        <motion.div
          custom={4}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          className="mt-6 pt-4 border-t border-primaryColor/10"
        >
          <p className="text-xs text-primaryTextColor/50 font-medium">
            {project?.platform?.length || 0} Platform{(project?.platform?.length || 0) > 1 ? "s" : ""} • {project?.technologies?.length || 0} Technologies
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectView;
