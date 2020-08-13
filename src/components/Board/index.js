import React, { useState } from 'react';
import { Container } from './styles';
import produce from 'immer';
import List from '../List';
import BoardContext from './context';
import { loadLists } from "../../services/api";

const data = loadLists();
function Board() {

  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {


    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];

      if (dragged == null)
        return;

      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);

    }))
  }

  function moveToLastPosition(fromList, toList, from) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];
      if (dragged == null)
        return;

      draft[fromList].cards.splice(from, 1);

      draft[toList].cards.push(dragged);
    }))
  }

  return (
    <BoardContext.Provider value={{ lists, move, moveToLastPosition }} >
      <Container>
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
      </Container>
    </BoardContext.Provider>

  );
}

export default Board;