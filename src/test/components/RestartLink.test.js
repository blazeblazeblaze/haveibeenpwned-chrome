import React from 'react';
import ReactDOM from 'react-dom';
import RestartLink from '../../components/RestartLink';
import renderer from 'react-test-renderer';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RestartLink onStartOver={jest.fn} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('RestartLink renders Link component', () => {
  const component = renderer.create(
   <RestartLink onStartOver={jest.fn} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
