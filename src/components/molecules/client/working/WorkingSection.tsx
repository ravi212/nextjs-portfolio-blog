"use client";
import Project from "@/components/atoms/client/project";
import CustomPagination from "@/components/atoms/common/Pagination";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

interface Category {
  _id: string;
  title: string;
  slug: string;
}

const WorkingSection = ({
  projects,
  totalCount,
  categories = [],
  selectedCategory = "all",
}: {
  projects: ProjectType[];
  totalCount: number;
  categories: Category[];
  selectedCategory?: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategory);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    // Build new URL with category query param
    const params = new URLSearchParams(searchParams);
    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }
    params.set("page", "1"); // Reset to first page
    
    router.push(`?${params.toString()}`);
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.1, duration: 0.4 },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <div className="w-[90%] md:w-[100%] px-0 md:px-6 pb-10 flex flex-col gap-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex pt-6 mt-3 w-full gap-4 justify-between items-center"
      >
        <h4 className="text-xl sm:text-xl md:text-2xl font-medium text-primaryColor">
          My Projects
        </h4>
        <CustomPagination totalCount={totalCount} />
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-4 scrollbar-hide"
      >
        {/* All Tab */}
        <motion.button
          custom={0}
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          onClick={() => handleCategoryChange("all")}
          whileTap={{ scale: 0.98 }}
          className={`relative px-3 md:px-4 py-2 rounded-md text-sm font-normal whitespace-nowrap transition-all duration-300 group ${
            activeCategory === "all"
              ? "bg-secondaryTextColor text-secondaryColor shadow-lg"
              : "bg-gradient-to-r from-primaryColor/8 to-primaryColor/5 text-primaryColor hover:from-primaryColor/15 hover:to-primaryColor/10 border border-primaryColor/20 hover:border-primaryColor/40"
          }`}
        >
          {activeCategory === "all" && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-r from-secondaryTextColor to-secondaryTextColor rounded-xl"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              style={{ zIndex: -1 }}
            />
          )}
          <motion.span 
            className="relative z-10 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            All
          </motion.span>
        </motion.button>

        {/* Category Tabs */}
        {categories.map((category, index) => {
          const count = projects.filter((p) => p.category?._id === category._id).length;
          return (
            <motion.button
              key={category._id}
              custom={index + 1}
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              onClick={() => handleCategoryChange(category._id)}
              whileTap={{ scale: 0.98 }}
              className={`relative px-3 md:px-4 py-2 rounded-md text-sm font-normal whitespace-nowrap transition-all duration-300  group ${
                activeCategory === category._id
                  ? "bg-secondaryTextColor text-secondaryColor shadow-lg"
                  : "bg-gradient-to-r from-primaryColor/8 to-primaryColor/5 text-primaryColor hover:from-primaryColor/15 hover:to-primaryColor/10 border border-primaryColor/20 hover:border-primaryColor/40"
              }`}
            >
              {activeCategory === category._id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-secondaryTextColor to-secondaryTextColor rounded-xl"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  style={{ zIndex: -1 }}
                />
              )}
              <motion.span 
                className="relative z-10 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {category.title}
              </motion.span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex flex-col gap-8"
        >
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
              {projects.map((project: ProjectType, index: number) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Project project={project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center py-16 text-center"
            >
              <div>
                <h3 className="text-xl font-semibold text-primaryColor mb-2">
                  No Projects Found
                </h3>
                <p className="text-primaryTextColor/60">
                  There are no projects in this category yet.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center w-full py-2"
      >
        <CustomPagination totalCount={totalCount} />
      </motion.div>
    </div>
  );
};

export default WorkingSection;
