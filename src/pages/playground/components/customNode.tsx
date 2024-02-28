import React from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Handle, Position } from "reactflow";

interface CustomNodeProps {
  data: {
    emoji: string;
    name: string;
    job: string;
  };
}

const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
  return (
    <div className=" shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex flex-col">
        <div className="p-1 flex flex-row bg-teal-400 rounded-tl rounded-tr ">
          <BiMessageRoundedDetail className="my-auto" />
          <p className=" text-center text-xs font-bold">send message</p>
        </div>
        <div className="p-1">
          <div className="text-xs font-thin">{data.name}</div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Right}
        className=" !bg-teal-500"
      />
      <Handle type="source" position={Position.Left} className=" bg-teal-500" />
    </div>
  );
};

export default CustomNode;
