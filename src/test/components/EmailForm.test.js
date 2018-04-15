import React from 'react';
import ReactDOM from 'react-dom';
import EmailForm from '../../components/EmailForm';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmailForm onSubmit={jest.fn} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('EmailForm renders the form', () => {
  const component = renderer.create(
    <EmailForm onSubmit={jest.fn} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
