import React from 'react';
import ReactDOM from 'react-dom';
import NotPwned from '../../components/NotPwned';
import renderer from 'react-test-renderer';

jest.mock('../../components/RestartLink', () => () => 'RestartLink');

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotPwned onStartOver={jest.fn } />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('NotPwned renders sad text and links', () => {
  const component = renderer.create(
    <NotPwned onStartOver={jest.fn} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
