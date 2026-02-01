"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectView from "@/components/atoms/client/project/view";

interface Category {
  _id: string;
  title: string;
  slug: string;
}

interface ProjectDetailViewProps {
  currentProject: ProjectType;
  allProjects: ProjectType[];
  categories: Category[];
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  currentProject,
  allProjects,
  categories,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    currentProject?.category?._id || "all",
  );

  // Group projects by category
  const projectsByCategory = useMemo(() => {
    const grouped: { [key: string]: ProjectType[] } = {
      all: allProjects,
    };

    categories.forEach((cat) => {
      grouped[cat._id] = allProjects.filter(
        (proj) => proj.category?._id === cat._id,
      );
    });

    return grouped;
  }, [allProjects, categories]);

  const activeProjects = projectsByCategory[activeCategory] || [];

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
    <div className="w-full space-y-8 md:space-y-12">
      {/* Current Project */}
      <ProjectView project={currentProject} />
    </div>
  );
};

export default ProjectDetailView;
