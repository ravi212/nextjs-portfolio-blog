import HomeSection from "@/components/molecules/client/home";
import { getAllProjects } from "@/lib/actions/project.action";

export default async function Page() {
  const projects = (await getAllProjects())?.projects;

  return (
    <section>
      <HomeSection projects={projects} />
    </section>
  );
}
