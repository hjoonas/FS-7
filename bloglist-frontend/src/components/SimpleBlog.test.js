import React from 'react'
import { shallow } from 'enzyme'
import SipleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
  const blog = {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    likes: 3
  }

  it('renders title, author and likes', () => {
    const blogComponent = shallow(<SipleBlog blog={blog} />)

    expect(blogComponent.text()).toContain(blog.title)
    expect(blogComponent.text()).toContain(blog.author)
    expect(blogComponent.text()).toContain(String(blog.likes))
  })

  it('calls onClick handler', () => {
    const onClick = jest.fn()
    const blogComponent = shallow(<SipleBlog blog={blog} onClick={onClick} />)

    const button = blogComponent.find('button')
    button.simulate('click')
    button.simulate('click')

    expect(onClick.mock.calls.length).toBe(2)
  })  
})