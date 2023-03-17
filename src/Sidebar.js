import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
        <div className="description">Layer</div>
        
        {/* Convolutional Layers 토글 */}
        <details open>
            <summary className="layerType">
                Convolutional Layers
            </summary>
            <div className="dndnode Conv" onDragStart={(event) => onDragStart(event, 'Conv2d')} draggable>
                Conv2d
            </div>
        </details>
        
        {/* Pooling Layers 토글 */}
        <details open>
             <summary className="layerType">
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
            <summary className="layerType">
                Activations
            </summary>
            <div className="dndnode ReLU" onDragStart={(event) => onDragStart(event, 'ReLU')} draggable>
                ReLU
            </div>
        </details>
      
      {/* Normalization Layers 토글 */}
        <details open>
            <summary className="layerType">
                Normalization Layers
            </summary>
            <div className="dndnode Batch" onDragStart={(event) => onDragStart(event, 'BatchNorm2d')} draggable>
                BatchNorm2d
            </div>
        </details>
      
    </aside>
  );
};
