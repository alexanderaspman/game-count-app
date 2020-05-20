import React from 'react';

import Enzyme from 'enzyme'
import {Switch} from '../SwitchImgText'
import  {Counter as count}  from "../Counter";
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter:new Adapter() });

describe('Counter',()=>{
    let wrapper 
    const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);
  beforeEach(() => {

    wrapper = Enzyme.shallow(<Switch counter={count} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  describe('#firstButton', () => {
    it('Find count check if img renders', () => {

     
    let h3= wrapper.find(<h3>7</h3>)
     const status = wrapper.find(<img id="2"/>);
     expect(h3>=status).toBeTruthy()
    });
  });
})
