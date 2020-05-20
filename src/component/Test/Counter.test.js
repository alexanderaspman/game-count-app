import React from 'react';

import Enzyme from 'enzyme'

import  {Counter}  from "../Counter";
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter:new Adapter() });

describe('Counter',()=>{
    let wrapper 
    const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);
  beforeEach(() => {
    wrapper = Enzyme.shallow(<Counter onClick={()=> setCount(count+1)}/>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  describe('#firstButton', () => {
    it('calls setCount with count + 1', () => {

      wrapper.find('#firstButton').props().onClick();
      expect(setState).toHaveBeenCalledWith(1)

    });
  });

  describe('#secondButton', () => {
    it('calls setCount with count - 1', () => {
      wrapper.find('#secondButton').props().onClick();
      expect(setState).toHaveBeenCalledWith(-1);
    });
  });


});