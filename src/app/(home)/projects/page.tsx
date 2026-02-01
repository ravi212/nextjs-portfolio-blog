import WorkingSection from "@/components/molecules/client/working/WorkingSection";
import { getAllCategories } from "@/lib/actions/category.action";
import { getAllProjects } from "@/lib/actions/project.action";

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
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined | any };
}) {
  const page = parseInt(searchParams?.page || "1");
  const limit = parseInt(searchParams?.pageSize || "10");
  const category = searchParams?.category || "all";
  
  const result = await getAllProjects(page, limit, category);
  const categoriesResult = await getAllCategories(false);
  
  if (!result?.success) {
    return;
  } else {
    return (
      <WorkingSection 
        projects={result?.projects} 
        totalCount={result?.pagination?.total}
        categories={categoriesResult?.categories || []}
        selectedCategory={category}
      />
    );
  }

}
