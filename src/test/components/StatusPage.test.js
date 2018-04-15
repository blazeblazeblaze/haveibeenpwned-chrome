import React from 'react';
import ReactDOM from 'react-dom';
import StatusPage from '../../components/StatusPage';
import renderer from 'react-test-renderer';

jest.mock('../../components/ResultPage', () => () => 'ResultPage');
jest.mock('../../components/EmailForm', () => () => 'EmailForm');

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusPage onStartOver={jest.fn} onSubmit={jest.fn} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('StatusPage renders EmailForm when email is set', () => {
  const email = 'foo@example.com';

  const component = renderer.create(
    <StatusPage onStartOver={jest.fn} onSubmit={jest.fn} email={email} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('StatusPage renders ResultPage when email is not set', () => {
  const component = renderer.create(
    <StatusPage onStartOver={jest.fn} onSubmit={jest.fn} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
