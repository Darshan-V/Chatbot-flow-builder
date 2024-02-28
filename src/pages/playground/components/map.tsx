import { useRef, useState, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Connection,
  Edge,
  OnInit,
  MiniMap,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";

import customNode from "./customNode";

const nodeTypes = {
  custom: customNode,
};

const initialNodes = [
  {
    id: "1",
    type: "custom",
    data: { name: "new message" },
    position: { x: 0, y: 50 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const Map = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback(
    (event: {
      preventDefault: () => void;
      dataTransfer: { dropEffect: string };
    }) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    },
    []
  );

  const onDrop = useCallback(
    (event: {
      preventDefault: () => void;
      dataTransfer: { getData: (arg0: string) => unknown };
      clientX: number;
      clientY: number;
    }) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      // @ts-expect-error: Casting event coordinates to position using reactFlowInstance.
      const position = reactFlowInstance.project({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: getId(),
        type: type as string, // Cast the type to string
        position,
        data: { name: "new node", label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className=" flex-grow h-full" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance as unknown as OnInit<unknown, unknown>} // Update the type of setReactFlowInstance
            onDrop={onDrop}
            onDragOver={onDragOver}
            defaultEdges={[
              {
                id: "e1-2",
                source: "1",
                target: "2",
                type: "arrow",
                animated: true,
                label: "This is an edge label",
              },
            ]}
          >
            <Controls />
            <MiniMap />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default Map;
