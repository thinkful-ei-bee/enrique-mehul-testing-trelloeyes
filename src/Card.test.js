import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';



it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Card  />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
   
  });

  it('get back proper card when returned ', () => {
    
    const tree = renderer
      .create(<Card title="3 of Spades" content="correct content" />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });