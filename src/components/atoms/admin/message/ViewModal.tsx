import React from "react";

const ViewModal = ({ data }: { data: MessageType | null }) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <label className="text-lg font-medium text-gray-800" htmlFor="">
          Name
        </label>
        <h2 className="text-base font-normal text-gray-800">{data?.name}</h2>
      </div>
      <div>
        <label className="text-lg font-medium text-gray-800" htmlFor="">
          Email
        </label>
        <h2 className="text-base font-normal text-gray-800">{data?.email}</h2>
      </div>
      <div>
        <label className="text-lg font-medium text-gray-800" htmlFor="">
          Message
        </label>
        <p className="text-base font-normal text-gray-800">{data?.message}</p>
      </div>
    </div>
  );
};

export default ViewModal;
