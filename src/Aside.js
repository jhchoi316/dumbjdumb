import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
        
        <div className="aside tab"></div>

        <div className="layer_list">
            
        <br></br>
        <br></br>
        <div className="tab_title">Layer</div>
        <br></br>

            {/* Convolutional Layers 토글 */}
            <details open>
                <summary className="layer_name">
                    Convolutional Layers
                </summary>
                <div className="dndnode Convolutional" onDragStart={(event) => onDragStart(event, 'Conv2d')} draggable>
                    Conv2d
                </div>
            </details>
            
            {/* Pooling Layers 토글 */}
            <details open>
                <summary className="layer_name">
                    Pooling Layers
                </summary>
                <div className="dndnode Pooling" onDragStart={(event) => onDragStart(event, 'MaxPool2d')} draggable>
                    MaxPool2d
                </div>
            <div className="dndnode Pooling" onDragStart={(event) => onDragStart(event, 'AvgPool2d')} draggable>
                    AvgPool2d
            </div>
            </details>

            {/* Activations 토글 */}
            <details open>
                <summary className="layer_name">
                    Activations
                </summary>
                <div className="dndnode Activiation" onDragStart={(event) => onDragStart(event, 'ReLU')} draggable>
                    ReLU
                </div>
            </details>
      
      {/* Normalization Layers 토글 */}
        <details open>
            <summary className="layer_name">
                Normalization Layers
            </summary>
            <div className="dndnode Normalization" onDragStart={(event) => onDragStart(event, 'BatchNorm2d')} draggable>
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
