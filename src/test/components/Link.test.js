import React from 'react';
import ReactDOM from 'react-dom';
import Link from '../../components/Link';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Link />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Link renders with no attrs', () => {
  const component = renderer.create(
    <Link />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Link renders with classes and href', () => {
  const component = renderer.create(
    <Link className='custom-class' href='http://google.com' onClick={jest.fn} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('Link renders with its children', () => {
  const component = renderer.create(
    <Link>
      <span>hello world</span>
    </Link>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
