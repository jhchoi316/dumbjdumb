import React from "react";
import "./Modal.css";

export function Modal({ request, onChange, selectedNode, closeModal}) {
  return (
    <div className="modalContainer">
        <div className="title">
          {selectedNode.type}
        </div>
        <div className="body">
          <li>in_channels : <input className="inputChannels" name="in_channels" value={request.in_channels} onChange={onChange} maxLength={3}/> </li>
          <li>out_channels : <input className="inputChannels" name="out_channels" value={request.out_channels} onChange={onChange} maxLength={3}/></li>
          <li>kernel_size : <input className="others" name="kernel_size1" value={request.kernel_size1} onChange={onChange} maxLength={3} /> x <input className="others" name="kernel_size2" value={request.kernel_size2} onChange={onChange} maxLength={3} />
          </li>
          <li>stride : <input className="others" name="stride1" value={request.stride1} onChange={onChange} maxLength={3} /> x <input className="others" name="stride2" value={request.stride2} onChange={onChange} maxLength={3} />
          </li>
          <li>padding : <input className="others"  name="padding1" value={request.padding1} onChange={onChange} maxLength={3} />  x  <input className="others"  name="padding2" value={request.padding2} onChange={onChange} maxLength={3} />
            </li>
          <br></br>
        </div>
        <div className="footer">
          <button className="default" onClick={() => closeModal(false)}>Default</button>
          <button className="save"  onClick={() => closeModal(false)}>Save</button>
        </div>
    </div>
  );
}

export default Modal;
