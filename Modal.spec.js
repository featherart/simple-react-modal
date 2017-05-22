/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import Modal from './Modal'

describe('<Modal />', () => {
  let wrapper
  before(() => {
    wrapper = mount(<Modal />)
  })

  it('should render', () => {
    expect(wrapper).to.have.lengthOf(1)
  })

  it('should initialize with closed state', () => {
    expect(wrapper.state().isOpen).to.equal(false)
  })

  it('should be closable', () => {
    wrapper.instance().close()
    expect(wrapper.state().isOpen).to.equal(false)
  })

  it('should have className open when open', () => {
    wrapper.instance().open()
    expect(wrapper.find('.open')).to.have.lengthOf(1)
  })

  it('should be able to open', () => {
    wrapper.instance().open()
    expect(wrapper.state().isOpen).to.equal(true)
  })
})
