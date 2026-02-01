import HomeSection from "@/components/molecules/client/home";
import { getRecentProjects } from "@/lib/actions/project.action";

export default async function Page() {
  const projects = (await getRecentProjects())?.projects;
  return (
    <section>
      <HomeSection projects={projects} />
    </section>
  );
}
