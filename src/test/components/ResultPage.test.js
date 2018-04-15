import React from 'react';
import ReactDOM from 'react-dom';
import ResultPage from '../../components/ResultPage';
import renderer from 'react-test-renderer';

jest.mock('../../components/Pwned', () => () => 'PwnedComponent');
jest.mock('../../components/NotPwned', () => () => 'NotPwnedComponent');

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultPage onStartOver={jest.fn } isPwned={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('ResultPage renders Pwn when isPwned is true', () => {
  const component = renderer.create(
    <ResultPage onStartOver={jest.fn} isPwned={true} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('ResultPage renders NonPwn when isPwned is false', () => {
  const component = renderer.create(
    <ResultPage onStartOver={jest.fn} isPwned={false} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
