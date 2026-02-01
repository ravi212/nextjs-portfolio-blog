"use client";
import ProjectEdit from "@/components/molecules/admin/project";
import Projects from "@/components/molecules/admin/projects";
import { getAllProjects } from "@/lib/actions/project.action";
import { Modal } from "antd";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [projects, setProjects] = useState<PostType[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [editId, setEditId] = useState<any>(null);
  const searchParams = useSearchParams();
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    getProjects();
  }, [searchParams]);

  const getProjects = async () => {
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("pageSize") || "10");
    const result = await getAllProjects(page, limit);

    if (result?.success) {
      setProjects(result?.projects);
      setOpenModal(false);
      setTotalCount(result?.total);
      setEditId(null);
    }
  };
  
  const handleOpenEditModal = (id: string) => {
    setEditId(id);
    setOpenModal(!openModal);
  };

  return (
    <div>
      <div className="py-6 flex justify-between items-center">
        <h3 className="text-2xl font-medium">Projects</h3>
        <span
          onClick={() => setOpenModal(!openModal)}
          className="bg-red-500 p-3 rounded-md text-white hover:text-white cursor-pointer"
        >
          Add New
        </span>
      </div>
      <Projects
        projects={projects}
        totalCount={totalCount}
        reGetProjects={getProjects}
        openEditModal={(id: string) => handleOpenEditModal(id)}
      />

      <Modal
        title={editId ? "Edit Project" : "Add Project"}
        footer={null}
        open={openModal}
        onCancel={() => setOpenModal(!openModal)}
      >
        <ProjectEdit projectId={editId} closeModal={getProjects} />
      </Modal>
    </div>
  );
};

export default Page;
