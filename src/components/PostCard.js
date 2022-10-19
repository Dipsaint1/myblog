import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPosts } from '../contexts/BlogContext';
import { date } from '../utilities/Utilities';

const PostCard = ({ post }) => {

  const { handleCategory } = BlogPosts();

  return (
    <div className='post'>
      <div className="post-details">
        <span className='author'>By <span style={{color: '#592EA9'}}>{post.author.name}</span></span>
        <span className='bar'>|</span>
        <span className='date'>{date(post.publishedAt)}</span>
      </div>
      <h3 className='post-title'> <Link name={post.category.name.toLowerCase()}  onClick={handleCategory} className='post-link' to={`blog/${post.category.name.toLowerCase()}/${post.slug}`}>{post.title}</Link> </h3>
    </div>
  )
}

export default PostCard;