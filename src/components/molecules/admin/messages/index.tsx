"use client";
import { formatDate } from "@/utils/common";
import React, { useEffect, useState } from "react";
import { Modal, Popconfirm, Table } from "antd";
import type { TableColumnsType } from "antd";
import { deleteMessage, getAllMessages } from "@/lib/actions/message.action";
import ViewModal from "@/components/atoms/admin/message/ViewModal";
const Messages = ({
  messages,
  isAdmin,
}: {
  messages: MessageType[];
  isAdmin?: boolean;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [viewData, setViewData] = useState(null);

  const [messageList, setMessageList] = useState<MessageType[]>([]);

  useEffect(() => {
    setMessageList(messages);
  }, [messages]);

  const getMessages = async () => {
    const res = (await getAllMessages()).messages;
    setMessageList(res);
  };

  const handleDelete = async (id: string) => {
    const res = await deleteMessage(id);
    getMessages();
  };

  const handleView = (data: any) => {
    setViewData(data);
    setOpenModal(true);
  };

  const adminColumns: TableColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "",
      key: "name",
      render: (row) => (
        <div className="flex gap-4">
          <p>{`${row.name}`}</p>
        </div>
      ),
    },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Message", dataIndex: "message", key: "message" },
    {
      title: "Created On",
      dataIndex: "",
      key: "createdAt",
      render: (row) => (
        <div className="flex gap-4">
          <p>{formatDate(row.createdAt)}</p>
        </div>
      ),
    },
  ];

  const columns: TableColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "",
      key: "name",
      render: (row) => (
        <div className="flex gap-4">
          <p>{`${row.name}`}</p>
        </div>
      ),
    },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Message", dataIndex: "message", key: "message" },
    {
      title: "Created On",
      dataIndex: "",
      key: "createdAt",
      render: (row) => (
        <div className="flex gap-4">
          <p>{formatDate(row.createdAt)}</p>
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
            onClick={() => handleView(row)}
            className="border rounded-md px-3 py-1 cursor-pointer shadow-md hover:text-black"
          >
            view
          </button>
          <Popconfirm
            title="Delete the Message"
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
    <>
      <Table
        columns={isAdmin ? adminColumns : columns}
        dataSource={messageList}
        rowKey={(row) => row._id}
      />
      <Modal
        title={"Message"}
        footer={null}
        open={openModal}
        onCancel={() => setOpenModal(!openModal)}
      >
        <ViewModal data={viewData} />
      </Modal>
    </>
  );
};

export default Messages;
