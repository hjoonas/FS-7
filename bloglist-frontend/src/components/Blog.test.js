import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'

describe.only('<Blog />', () => {
  let blogComponent

  beforeEach(() => {
    const blog = {
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: '',
      likes: 3
    }
    blogComponent = shallow(
      <Blog blog={blog} />
    )
  })

  it('at start the details are not displayed', () => {
    const contentDiv = blogComponent.find('.content')
    expect(contentDiv.getElement().props.style.display).toEqual('none')
  })

  it('after clicking name the details are displayed', () => {
    const nameDiv = blogComponent.find('.name')
    nameDiv.simulate('click')

    const contentDiv = blogComponent.find('.content')
    expect(contentDiv.getElement().props.style.display).toEqual('')
  })  
})