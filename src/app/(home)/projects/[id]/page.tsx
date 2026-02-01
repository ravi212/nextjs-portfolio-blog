import ProjectDetailView from "@/components/molecules/client/project/ProjectDetailView";
import { getAllCategories } from "@/lib/actions/category.action";
import { getAllProjects, getProjectById } from "@/lib/actions/project.action";

export const generateMetadata = async () => {
  return {
    title: `Projects`,
    openGraph: {
      title: "Projects",
      description:
        "Explore more about my recent work, skills and find out how can help you, feel free to contact for support!",
    },
  };
};

export default async function Page({
  params,
}: {
  params?: { id: string };
}) {
  const projectId = params?.id;
  
  // Fetch current project
  const projectResult = await getProjectById(projectId);
  
  // Fetch all projects
  const allProjectsResult = await getAllProjects(1, 100);
  
  // Fetch all categories
  const categoriesResult = await getAllCategories(false);

  if (!projectResult?.success) {
    return <div>Project not found</div>;
  }

  const currentProject = projectResult.project;
  const allProjects = allProjectsResult?.projects || [];
  const categories = categoriesResult?.categories || [];

  return (
    <div className="w-[90%] mx-auto py-12 md:py-16">
      <ProjectDetailView
        currentProject={currentProject}
        allProjects={allProjects}
        categories={categories}
      />
    </div>
  );
}
