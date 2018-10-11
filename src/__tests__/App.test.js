import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, configure } from 'enzyme';
import { MemoryRouter, Route } from "react-router-dom";
import App from '../App';
import Home from '../components/home';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('App', () => {
  it('should be able to run tests', () => {
      expect(1 + 2).toEqual(3);
  });
});

it("redirects / to /home", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(App).props().history.location.pathname).toBe("/home");
  //expect(wrapper.find(App)).toHaveLength(1);
});

// it("redirects / to /home", () => {
//   const wrapper = mount(
//     <MemoryRouter initialEntries={['/random']}>
//       <App/>
//     </MemoryRouter>
//   );
//   //expect(wrapper.find(App).props().location.pathname).toBe("/home");
//   expect(wrapper.find(App)).toHaveLength(1);
// });