import React from 'react';
import ReactDOM from 'react-dom';
import ErrorPage from '../../components/ErrorPage';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorPage onStartOver={jest.fn} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('ErrorPage renders with errors', () => {
  const errors = ['API timeout'];
  const component = renderer.create(
    <ErrorPage onStartOver={jest.fn} errors={errors} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
