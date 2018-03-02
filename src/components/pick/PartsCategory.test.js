import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PartsCategory from './PartsCategory';
import Category from '../../objects/Category';
import Part from '../../objects/Part';
import Timeline from '../common/Timeline';

function setup(saving) {
  let props = {
	  category: new Category("Category"),
	  first: true,
	  last: true,
	  active: true,
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<PartsCategory {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('PartsCategory via React Test Utils', () => {
  it('renders form and h1', () => {
    const { output } = setup();
    expect(output.type).toEqual(Timeline);
    let form = output.props.children;
    expect(form.type).toBe('form');
  });
});


/*
import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe ('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      actions: { saveCourse: () => { return Promise.resolve(); }},
      course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };

    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');

  });
});
 */
