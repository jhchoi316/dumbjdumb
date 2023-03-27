import React from "react";
import { name } from "tar/lib/types";
import "./Modal.css";

// setOpenModal 함수를 사용하기 위해 PROPS로 전달
export function Modal({ closeModal, name }) {
  return (
    <div className="modalBackground">
      {/* 실제 모달창.. 3개의 내부요소로 되어있다. */}
      <div className="modalContainer">
        {/* title - 제목 (노드 제목) 나타내는 부분 */}
        <div className="title">
          <h5>Conv2d</h5>
        </div>
        {/* body - 내용 나타내는 부분 */}
        <div className="body">
          <li>in_channels : 3</li>
          <li>out_channels : 64</li>
          <li>kernel_size : 3 x 3</li>
          <li>stride : 1 x 1</li>
          <li>padding : 1 x 1</li>
          <br></br>
        </div>
        {/* footer - 버튼 들어있는 부분 */}
        {/* onClick 클릭시 closeModal 함수 값 false로 변경 */}
        <div className="footer">
          <button onClick={() => closeModal(false)}>Default</button>
          <button onClick={() => closeModal(false)}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
