/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import App from './App.jsx';

describe('App', () => {
  it('shows hello world', () => {
    const element = shallow(<App/>);

    expect(element.find('h1')).to.have.length(1);
  });
});
