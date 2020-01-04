import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders without any error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='app-component']");
  expect(appComponent.length).toBe(1);
});

test('renders increament button', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='counter-button']");
  expect(appComponent.length).toBe(1);
});

test('render counter display', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='counter-display']");
  expect(appComponent.length).toBe(1);
});

test('counter starts at 0', () => {

});

test('clicking counter button increaments counter display', () => {

});