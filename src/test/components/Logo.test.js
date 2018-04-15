import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../../components/Logo';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Logo onStartOver={jest.fn} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Logo renders correctly', () => {
  const component = renderer.create(
   <Logo onStartOver={jest.fn} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
