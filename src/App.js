import React, {useEffect, useState} from 'react';
import ReactFlow, {ReactFlowProvider} from "reactflow";
import "reactflow/dist/style.css";
import Aside from "./Aside";
import "./index.css";
import Modal from "./Modal";
import Graph from "./Graph";

export const DnDFlow = () => {
  // modal 연습
  const [openModal, setOpenModal] = useState(false);
  
  const [request, setRequest] = useState({
    "in_channels":"",
    "out_channels": "",
    "kernel_size1": "",
    "kernel_size2": "",
    "stride1": "",
    "stride2": "",
    "padding1": "",
    "padding2": ""
  });
/** 클릭한 노드 정보 **/
const [selectedNode, setSelectedNode] = useState(null);

  const onSelectNode = (event, nodeInfo) => {
    setSelectedNode(nodeInfo);
    setOpenModal(true);
    setCloseModal(false);
};  
  const [closeModal, setCloseModal] = useState(false);


/** Modifier 컴포넌트 input의 onChange **/
const onChange = ({target:{name, value}}) => {
    const next = {
        ...request,
        [name]: value,
    };
    console.log(next);
    setRequest(next);
};
  return (
    <div className="dndflow">
      <ReactFlowProvider>
        {selectedNode && <Modal request={request} onChange={onChange} selectedNode={selectedNode} openModal={openModal} closeModal={onSelectNode}/>}
        <Graph onSelectNode={onSelectNode}/>
        <Aside />
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
