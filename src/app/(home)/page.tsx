import HomeSection from "@/components/molecules/client/home";
import { getAllProjects } from "@/lib/actions/project.action";
import { revalidatePath } from "next/cache";

export default async function Page() {
  const projects = (await getAllProjects())?.projects;
  
  revalidatePath('/(home)', 'page');

  return (
    <section>
      <HomeSection projects={projects} />
    </section>
  );
}
