import React, {useContext} from 'react';
import BoardContext from './Board/context';
import {useDrop} from 'react-dnd';

function Last({listIndex}) {

  const {moveToLastPosition} = useContext(BoardContext);

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item,monitor){
      const draggedIndex = item.index;
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      if(draggedListIndex === targetListIndex){
        return;
      }
      moveToLastPosition(draggedListIndex,targetListIndex,draggedIndex);
      item.listIndex = targetListIndex;

    }
  })

  return (
    <div className="last" ref={dropRef}>
      Last
    </div>
  );
}

export default Last;