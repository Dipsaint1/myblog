import React from 'react';
import { Link } from 'react-router-dom';
import './styles/post.scss';
import { BlogPosts } from '../contexts/BlogContext';

const Post = ({ post }) => {

  const { handleCategory } = BlogPosts();

  return (
    <div id="post-wrapper">
      <div className="post-image-wrapper">
        <img className='post-image' src={post.image} alt={post.title} />
      </div>
      <div className="post-details">
        <p className="category">{post.category.name}</p>
        {/* <h2 className="title"><Link className='link' to={`/blog/${post.slug}`} >{post.title}</Link></h2> */}
        <h2 className="title"><Link onClick={handleCategory} name={post.category.name.toLowerCase()}  className='link' to={`/blog/${post.category.name.toLowerCase()}/${post.slug}`} >{post.title}</Link></h2>
        <p className="description">{post.description}</p>
      </div>
    </div>
  )
}

export default Post;
