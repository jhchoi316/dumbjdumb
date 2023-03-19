import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';
import Aside from './Aside';
import './index.css';

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  
  const initialNodes = [
    {
      id: '1',
      type: 'Conv2d',
      data: { label: 'Con2vd' },
      position: { x: 200, y: 100 },
      style: {
        background: "#f2e3dc",
        fontSize: "20px",
        width: "200px",
        boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
        border: "0px",
        borderRadius: "10px"
      }
    },
    {
      id: '2',
      type: 'BatchNorm2d',
      data: { label: 'BatchNorm2d' },
      position: { x: 200, y: 200 },
      style: {
        background: "#dee8e4",
        fontSize: "20px",
        width: "200px",
        boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
        border: "0px",
        borderRadius: "10px"
      }
    },
    {
      id: '3',
      type: 'ReLU',
      data: { label: 'ReLU' },
      position: { x: 200, y: 300 },
      style: {
        background: "#d9e3e8",
        fontSize: "20px",
        width: "200px",
        boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
        border: "0px",
        borderRadius: "10px"
      }
    },
    {
      id: '4',
      type: 'Conv2d',
      data: { label: 'Con2vd' },
      position: { x: 200, y: 400 },
      style: {
        background: "#f2e3dc",
        fontSize: "20px",
        width: "200px",
        boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
        border: "0px",
        borderRadius: "10px"
      }
    },
    {
      id: '5',
      type: 'BatchNorm2d',
      data: { label: 'BatchNorm2d' },
      position: { x: 200, y: 500 },
      style: {
        background: "#dee8e4",
        fontSize: "20px",
        width: "200px",
        boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
        border: "0px",
        borderRadius: "10px"
      }
    },
    {
      id: '6',
      type: 'ReLU',
      data: { label: 'ReLU' },
      position: { x: 200, y: 600 },
      style: {
        background: "#d9e3e8",
        fontSize: "20px",
        width: "200px",
        boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
        border: "0px",
        borderRadius: "10px"
      }
    },
    {
      id: '7',
      type: 'MaxPool2d',
      data: { label: 'MaxPool2d' },
      position: { x: 200, y: 700 },
      style: {
        background: "#faf1cb",
        fontSize: "20px",
        width: "200px",
        boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
        border: "0px",
        borderRadius: "10px"
      }
    },
    {
      id: '8',
      type: 'Conv2d',
      data: { label: 'Con2vd' },
      position: { x: 600, y: 100 },
      style: {
        background: "#f2e3dc",
        fontSize: "20px",
        width: "200px",
        boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
        border: "0px",
        borderRadius: "10px"
      }
    },
    {
      id: '9',
      type: 'BatchNorm2d',
      data: { label: 'BatchNorm2d' },
      position: { x: 600, y: 200 },
      style: {
        background: "#dee8e4",
        fontSize: "20px",
        width: "200px",
        boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
        border: "0px",
        borderRadius: "10px"
      }
    },
    {
      id: '10',
      type: 'ReLU',
      data: { label: 'ReLU' },
      position: { x: 600, y: 300 },
      style: {
        background: "#d9e3e8",
        fontSize: "20px",
        width: "200px",
        boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
        border: "0px",
        borderRadius: "10px"
      }
    },
    {
      id: '11',
      type: 'Conv2d',
      data: { label: 'Con2vd' },
      position: { x: 600, y: 400 },
      style: {
        background: "#f2e3dc",
        fontSize: "20px",
        width: "200px",
        boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
        border: "0px",
        borderRadius: "10px"
      }
    },
    {
      id: '12',
      type: 'BatchNorm2d',
      data: { label: 'BatchNorm2d' },
      position: { x: 600, y: 500 },
      style: {
        background: "#dee8e4",
        fontSize: "20px",
        width: "200px",
        boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
        border: "0px",
        borderRadius: "10px"
      }
    },
    {
      id: '13',
      type: 'ReLU',
      data: { label: 'ReLU' },
      position: { x: 600, y: 600 },
      style: {
        background: "#d9e3e8",
        fontSize: "20px",
        width: "200px",
        boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
        border: "0px",
        borderRadius: "10px"
      }
    },
    {
      id: '14',
      type: 'MaxPool2d',
      data: { label: 'MaxPool2d' },
      position: { x: 600, y: 700 },
      style: {
        background: "#faf1cb",
        fontSize: "20px",
        width: "200px",
        boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
        border: "0px",
        borderRadius: "10px"
      }
    },

  ]
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');
      const backgroundColour = event.dataTransfer.getData('backgroundColour');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
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
        data: { label: `${type}` },
        style: {
          background: `${backgroundColour}`,
          fontSize: "20px",
          width: "200px",
          boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
          border: "0px",
          borderRadius: "10px"
        }
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="dndflow">
      <ReactFlowProvider>
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
          > 
            <Controls />
          </ReactFlow>
        </div>
        <Aside />
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
