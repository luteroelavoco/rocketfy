import React from 'react';
import { MdAdd } from 'react-icons/md';
import Card from '../Card';
import { Container } from './styles';
import Last from "../Last";


function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <h2> {data.title} </h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) =>
          <Card
            listIndex={listIndex}
            key={card.id}
            data={card}
            index={index}
          />
        )}
       <Last listIndex={listIndex}/>
      </ul>
    </Container>
  );
}

export default List;