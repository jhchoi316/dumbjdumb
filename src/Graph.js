import React, {useCallback, useRef, useState} from 'react';
import ReactFlow, {
    addEdge,
    useNodesState,
    useEdgesState,
    Controls,
  } from "reactflow";

function Graph({onSelectNode}) {
    const initialNodes = [
        {
          id: "1",
          type: "Conv2d",
          data: { label: "Conv2d" },
          position: { x: 200, y: 100 },
          style: {
            background: "#f2e3dc",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
          },
        },
        {
          id: "2",
          type: "BatchNorm2d",
          data: { label: "BatchNorm2d" },
          position: { x: 200, y: 200 },
          style: {
            background: "#dee8e4",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
          },
        },
        {
          id: "3",
          type: "ReLU",
          data: { label: "ReLU" },
          position: { x: 200, y: 300 },
          style: {
            background: "#d9e3e8",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
          },
        },
        {
          id: "4",
          type: "Conv2d",
          data: { label: "Conv2d" },
          position: { x: 200, y: 400 },
          style: {
            background: "#f2e3dc",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
          },
        },
        {
          id: "5",
          type: "BatchNorm2d",
          data: { label: "BatchNorm2d" },
          position: { x: 200, y: 500 },
          style: {
            background: "#dee8e4",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
          },
        },
        {
          id: "6",
          type: "ReLU",
          data: { label: "ReLU" },
          position: { x: 200, y: 600 },
          style: {
            background: "#d9e3e8",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
          },
        },
        {
          id: "7",
          type: "MaxPool2d",
          data: { label: "MaxPool2d" },
          position: { x: 200, y: 700 },
          style: {
            background: "#faf1cb",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
          },
        },
        {
          id: "8",
          type: "Conv2d",
          data: { label: "Conv2d" },
          position: { x: 600, y: 100 },
          style: {
            background: "#f2e3dc",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
          },
        },
        {
          id: "9",
          type: "BatchNorm2d",
          data: { label: "BatchNorm2d" },
          position: { x: 600, y: 200 },
          style: {
            background: "#dee8e4",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
          },
        },
        {
          id: "10",
          type: "ReLU",
          data: { label: "ReLU" },
          position: { x: 600, y: 300 },
          style: {
            background: "#d9e3e8",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
          },
        },
        {
          id: "11",
          type: "Conv2d",
          data: { label: "Conv2d" },
          position: { x: 600, y: 400 },
          style: {
            background: "#f2e3dc",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
          },
        },
        {
          id: "12",
          type: "BatchNorm2d",
          data: { label: "BatchNorm2d" },
          position: { x: 600, y: 500 },
          style: {
            background: "#dee8e4",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
          },
        },
        {
          id: "13",
          type: "ReLU",
          data: { label: "ReLU" },
          position: { x: 600, y: 600 },
          style: {
            background: "#d9e3e8",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
          },
        },
        {
          id: "14",
          type: "MaxPool2d",
          data: { label: "MaxPool2d" },
          position: { x: 600, y: 700 },
          style: {
            background: "#faf1cb",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
          },
        },
      ];
      const initialEdges = [
        { id: "1-2", source: "1", target: "2" },
        { id: "2-3", source: "2", target: "3" },
        { id: "3-4", source: "3", target: "4" },
        { id: "4-5", source: "4", target: "5" },
        { id: "5-6", source: "5", target: "6" },
        { id: "6-7", source: "6", target: "7" },
        { id: "7-8", source: "7", target: "8" },
        { id: "8-9", source: "8", target: "9" },
        { id: "9-10", source: "9", target: "10" },
        { id: "10-11", source: "10", target: "11" },
        { id: "11-12", source: "11", target: "12" },
        { id: "12-13", source: "12", target: "13" },
        { id: "13-14", source: "13", target: "14" },
      ];
    let id = 15;
    const getId = () => `${id++}`

    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        []
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();
            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData("application/reactflow");
            const backgroundColour = event.dataTransfer.getData("backgroundColour");

            // check if the dropped element is valid
            if (typeof type === "undefined" || !type) {
                return;
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });

            const newNode = {
                id: getId(),
                type,
                position,
                data: {label: `${type}`},
                style: {
                    background: `${backgroundColour}`,
                    fontSize: "20px",
                    width: "200px",
                    boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
                    border: "0px",
                    borderRadius: "10px",
                },
            };

            setNodes((nds) => nds.concat(newNode));

            // axios post 호출
        },
        [reactFlowInstance]
    );


    return (
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={setReactFlowInstance}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onNodeClick={onSelectNode}
            >
                <Controls/>
            </ReactFlow>
        </div>
    );
}

export default Graph;
