import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from '../../components/Spinner';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Spinner />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Spinner uses default spinner file path', () => {
  const component = renderer.create(
   <Spinner />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Spinner uses custom spinner file path', () => {
  const component = renderer.create(
   <Spinner src='some-path.png' />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
