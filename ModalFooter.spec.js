/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import ModalFooter from './ModalFooter'

describe('<ModalFooter />', () => {
  let wrapper
  before(() => {
    wrapper = mount(<ModalFooter/>)
  })

  it('should render', () => {
    expect(wrapper).to.have.lengthOf(1)
  })
})
