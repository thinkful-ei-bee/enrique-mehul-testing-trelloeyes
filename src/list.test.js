import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';


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

  it('get back proper card when returned ', () => {
    const obj = {header: 'myHeader',
                cards: [{id: 'a', title: 'First card', content: 'lorem ipsum'},
                        {id: 'b', title: 'First card', content: 'lorem ipsum'},
                        {id: 'c', title: 'First card', content: 'lorem ipsum'}]   };
    const tree = renderer
      .create(<List header= {obj.header} cards={obj.cards} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });