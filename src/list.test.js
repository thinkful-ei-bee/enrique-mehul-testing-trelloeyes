import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

it('renders without crashing', () => {

    const obj = {header: 'myHeader',
                cards: ['a','b','c']    };

    const div = document.createElement('div');
    ReactDOM.render(
      <List header= {obj.header} cards={obj.cards} />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
   
  });