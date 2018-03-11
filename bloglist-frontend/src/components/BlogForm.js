import React from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ title, author, url, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2>Luo uusi blogi</h2>

      <form onSubmit={handleSubmit}>
        <div>
          title
          <input
            value={title}
            name='title'
            onChange={handleChange}
          />
        </div>
        <div>
          author
          <input
            value={author}
            name='author'
            onChange={handleChange}
          />
        </div>
        <div>
          url
          <input
            value={url}
            name='url'
            onChange={handleChange}
          />
        </div>        

        <button type="submit">Luo</button>
      </form>
    </div>
  )
}

BlogForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  author: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}


export default BlogForm