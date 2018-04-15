import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import renderer from 'react-test-renderer';

beforeAll(() => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };

  global.localStorage = localStorageMock;
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

jest.mock('../components/Spinner', () => () => 'SpinnerComponent');
jest.mock('../components/ErrorPage', () => () => 'ErrorPageComponent');
jest.mock('../components/Logo', () => () => 'LogoComponent');
jest.mock('../components/StatusPage', () => () =>  'StatusPageComponent');

test('App renders - basic', () => {
  const component = renderer.create(
    <App />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
