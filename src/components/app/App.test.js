import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import AppBar from 'material-ui/AppBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('should render children', () => {
  const rendered = shallow(<App/>);
    expect(rendered.contains(<AppBar title="Sort Viz" iconClassNameRight="muidocs-icon-navigation-expand-more"/>)).toEqual(true);
})
