import React, { useState } from "react";
import layer_icon from "../src/img/layer_icon.png";
import info_icon from "../src/img/info_icon.png";
import abstract_icon from "../src/img/abstract_icon.png";
import code_icon from "../src/img/code_icon.png";
import Modal from "./Modal";
import { DnDFlow } from "./App";

export default () => {
  const onDragStart = (event, nodeType, backgroundColour, param) => {
    event.dataTransfer.setData(
      "application/reactflow",
      nodeType,
      backgroundColour
    );
    event.dataTransfer.setData("backgroundColour", backgroundColour);
    event.dataTransfer.setData("param", param);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="aside tab">
        {/* 아이콘 이미지 넣기 */}
        <tc>
          <img
            className="tab_image_selected"
            src={layer_icon}
            alt="layer icon"
          />
        </tc>
        <tc>
          <img className="tab_image" src={info_icon} alt="info icon" />
        </tc>
        <tc>
          <img className="tab_image" src={abstract_icon} alt="abstract icon" />
        </tc>
        <tc>
          <img className="tab_image" src={code_icon} alt="code icon" />
        </tc>
      </div>

      <div className="layer_list">
        <div className="tab_title">Layer</div>

        {/* Convolutional Layers 토글 */}
        <details open>
          <summary className="layer_name">Convolutional Layers</summary>
          <div
            className="dndnode Convolutional"
            onDragStart={(event) =>
              onDragStart(event, "Conv2d", "#F2E3DC", "hi")
            }
            draggable
          >
            Conv2d
          </div>
        </details>

        {/* Pooling Layers 토글 */}
        <details open>
          <summary className="layer_name">Pooling Layers</summary>
          <div
            className="dndnode Pooling"
            onDragStart={(event) => onDragStart(event, "MaxPool2d", "#FAF1CB")}
            draggable
          >
            MaxPool2d
          </div>
          <div
            className="dndnode Pooling"
            onDragStart={(event) => onDragStart(event, "AvgPool2d", "#FAF1CB")}
            draggable
          >
            AvgPool2d
          </div>
          <div
            className="dndnode Pooling"
            onDragStart={(event) =>
              onDragStart(event, "AdaptiveAvgPool2d", "#FAF1CB")
            }
            draggable
          >
            AdaptiveAvgPool2d
          </div>
        </details>

        {/* Activations 토글 */}
        <details open>
          <summary className="layer_name">Activations</summary>
          <div
            className="dndnode Activiation"
            onDragStart={(event) => onDragStart(event, "ReLU", "#D9E3E8")}
            draggable
          >
            ReLU
          </div>
          <div
            className="dndnode Activiation"
            onDragStart={(event) => onDragStart(event, "Sigmoid", "#D9E3E8")}
            draggable
          >
            Sigmoid
          </div>
          <div
            className="dndnode Activiation"
            onDragStart={(event) =>
              onDragStart(event, "ReLeakyReLU", "#D9E3E8")
            }
            draggable
          >
            LeakyReLU
          </div>
          <div
            className="dndnode Activiation"
            onDragStart={(event) => onDragStart(event, "Softmax", "#D9E3E8")}
            draggable
          >
            Softmax
          </div>
        </details>

        {/* Normalization Layers 토글 */}
        <details open>
          <summary className="layer_name">Normalization Layers</summary>
          <div
            className="dndnode Normalization"
            onDragStart={(event) =>
              onDragStart(event, "BatchNorm2d", "#DEE8E4")
            }
            draggable
          >
            BatchNorm2d
          </div>
        </details>
      </div>

      <div className="layer_info">
        <div className="layer_info_title">Layer Information</div>
      </div>
    </aside>
  );
};
