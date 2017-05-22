/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import ModalHeader from './ModalHeader'

describe('<ModalHeader />', () => {
  let wrapper
  before(() => {
    wrapper = mount(<ModalHeader/>)
  })

  it('should render', () => {
    expect(wrapper).to.have.lengthOf(1)
  })
})
