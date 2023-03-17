import React from 'react';

export default () => {
  const onDragStart = (event, nodeType, backgroundColour) => {
    event.dataTransfer.setData('application/reactflow', nodeType, backgroundColour);
    event.dataTransfer.setData('backgroundColour', backgroundColour);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
        
        <div className="aside tab"></div>

        <div className="layer_list">
            
        <div className="tab_title">Layer</div>

            {/* Convolutional Layers 토글 */}
            <details open>
                <summary className="layer_name">
                    Convolutional Layers
                </summary>
                <div className="dndnode Convolutional" onDragStart={(event) => onDragStart(event, 'Conv2d', '#F2E3DC')} draggable>
                    Conv2d
                </div>
            </details>
            
            {/* Pooling Layers 토글 */}
            <details open>
                <summary className="layer_name">
                    Pooling Layers
                </summary>
                <div className="dndnode Pooling" onDragStart={(event) => onDragStart(event, 'MaxPool2d', '#FAF1CB')} draggable>
                    MaxPool2d
                </div>
                <div className="dndnode Pooling" onDragStart={(event) => onDragStart(event, 'AvgPool2d', '#FAF1CB')} draggable>
                    AvgPool2d
                </div>
            </details>

            {/* Activations 토글 */}
            <details open>
                <summary className="layer_name">
                    Activations
                </summary>
                <div className="dndnode Activiation" onDragStart={(event) => onDragStart(event, 'ReLU', '#D9E3E8')} draggable>
                    ReLU
                </div>
            </details>
      
      {/* Normalization Layers 토글 */}
        <details open> 
            <summary className="layer_name">
                Normalization Layers
            </summary>
            <div className="dndnode Normalization" onDragStart={(event) => onDragStart(event, 'BatchNorm2d', '#DEE8E4')} draggable>
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
