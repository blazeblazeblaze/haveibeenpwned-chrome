import React from 'react';
import ReactDOM from 'react-dom';
import Pwned from '../../components/Pwned';
import renderer from 'react-test-renderer';

const email = 'foo@example.com';
jest.mock('../../components/Link', () => () => 'Link');
jest.mock('../../components/RestartLink', () => () => 'RestartLink');

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pwned onStartOver={jest.fn } email={email} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Pwned renders sad text and links', () => {
  const component = renderer.create(
    <Pwned onStartOver={jest.fn} email={email} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
