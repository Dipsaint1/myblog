import React from 'react';
import './styles/posts.scss';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BlogPosts } from '../contexts/BlogContext';
import { date } from '../utilities/Utilities';
import { Link } from 'react-router-dom';

const Featured = () => {
  const { posts, handleCategory } = BlogPosts();

  return (
    <main className='featured-container'>
      <h2 className="featured-post-header">Featured Posts</h2>
      {
        posts.filter(post => post.featured === true).slice(0, 1).map(post => {
          return(
            <figure key={post.slug}>

              <div className="featured-image-wrapper">
                <img className='feature-img' src={post.image} alt="feature-img" />
              </div>
            
              <figcaption className='post-details'>
                <span> By <span style={{color: '#592EA9'}} className='author'>{post.author.name}</span> </span>      
                
                <span className='bar'>|</span>
                <span className='date'>{date(post.publishedAt)}</span>
              </figcaption>
              
              <h2 className="title"> {post.title}</h2>

              <p className="description">{post.description}</p>
            
              <button className='read-more-btn'><Link onClick={handleCategory} name={post.category.name.toLowerCase()} className='read-more-btn-link' to={`/blog/${post.category.name.toLowerCase()}/${post.slug}`}>Read more <FontAwesomeIcon style={{ margin: 'auto 0'}} icon={faAngleRight} /></Link> </button>

            </figure>
          )
        })
      }
    </main> 
  )
}

export default Featured