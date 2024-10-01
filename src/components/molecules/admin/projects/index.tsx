"use client";
import React from "react";
import { Checkbox, Popconfirm, Table } from "antd";
import type { TableColumnsType } from "antd";
import { formatDate } from "@/utils/common";
import {
  deleteProject,
  toggleFeatured,
  toggleRecent,
} from "@/lib/actions/project.action";

interface DataType {
  _id: string;
  title: string;
  slug: number;
  description: string;
  coverImage: string;
  technologies: string;
  platform: string;
  recent: boolean;
  featured: boolean;
  github: string;
  createdAt: any;
}

const Projects = ({
  projects,
  reGetProjects,
  openEditModal,
}: {
  projects: any[];
  reGetProjects: () => void;
  openEditModal: (id: string) => void;
}) => {
  const handleDelete = async (id: string) => {
    await deleteProject(id);
    reGetProjects();
  };

  const handleRecent = async (id: string) => {
    const res = await toggleRecent(id);
    reGetProjects();
  };

  const handleFeatured = async (id: string) => {
    const res = await toggleFeatured(id);
    reGetProjects();
  };

  const columns: TableColumnsType<DataType> = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Slug", dataIndex: "slug", key: "slug" },
    {
      title: "Created On",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => (
        <div className="flex gap-4">
          <p>{formatDate(createdAt)}</p>
        </div>
      ),
    },
    {
      title: "Recent?",
      dataIndex: "",
      key: "recent",
      render: (row) => (
        <div className="flex  gap-4">
          <Checkbox
            checked={row.recent}
            onChange={() => handleRecent(row._id)}
          ></Checkbox>
        </div>
      ),
    },
    {
      title: "Featured?",
      dataIndex: "",
      key: "featured",
      render: (row) => (
        <div className="flex  gap-4">
          <Checkbox
            checked={row.featured}
            onChange={() => handleFeatured(row._id)}
          ></Checkbox>
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "action",
      render: (row) => (
        <div className="flex gap-4">
          <button
            onClick={() => openEditModal(row._id)}
            className="border rounded-md px-3 py-1 cursor-pointer shadow-md hover:text-black"
          >
            edit
          </button>
          <Popconfirm
            title="Delete the Category"
            description="Are you sure to delete this Category?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDelete(row._id)}
          >
            <p className="bg-red-500 rounded-md px-3 py-1 text-white cursor-pointer shadow-md">
              delete
            </p>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={projects} rowKey={(row) => row._id} />
  );
};

export default Projects;
