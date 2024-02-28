import React, { DragEvent } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";

const Sidebar: React.FC = () => {
  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="w-full h-full bg-gray-400 p-4 flex flex-col">
      <div
        className="border-2 border-gray-600 p-2  h-fit rounded-md "
        onDragStart={(event) => onDragStart(event, "custom")}
        draggable
      >
        <BiMessageRoundedDetail className="mx-auto" />
        <p className=" text-center">Message</p>
      </div>
    </div>
  );
};

export default Sidebar;
