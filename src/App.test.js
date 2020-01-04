import React from 'react';
import App from './App';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

/**
 * 
 * @function setupComponent
 * @param {object} props 
 * @param {any} state 
 * @returns { ShallowWrapper }
 */
const setupComponent = (props = {}, state = null) => {
  return shallow(<App {...props} />);
}

/**
 * 
 * @param { ShallowWrapper } wrapper 
 * @param {String} value 
 * @returns { ShallowWrapper }
 */
const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`)
}
test('renders without any error', () => {
  const wrapper = setupComponent();
  const appComponent = findByTestAttr(wrapper, 'app-component');
  expect(appComponent.length).toBe(1);
});

test('renders increament button', () => {
  const wrapper = setupComponent();
  const appComponent = findByTestAttr(wrapper, 'counter-button');
  expect(appComponent.length).toBe(1);
});

test('render counter display', () => {
  const wrapper = setupComponent();
  const appComponent = findByTestAttr(wrapper, 'counter-display');
  expect(appComponent.length).toBe(1);
});

test('counter starts at 0', () => {

});

test('clicking counter button increaments counter display', () => {

});