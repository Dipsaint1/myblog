import React from 'react';
import './styles/posts.scss';
import { Link } from 'react-router-dom';
import PostCard from './PostCard';
import { BlogPosts } from '../contexts/BlogContext';

const PagePosts = () => {
  const { posts } =BlogPosts();

  return (
    <main className='all-posts-container'>
      <div className="all-posts-header-wrapper">
        <h2 className="all-posts-header">All Posts</h2>
        <Link to='blog' className='all-posts-link'>View all</Link> 
      </div>

      {
        posts.filter(post => !post.featured).slice(0, 5).map(post => <PostCard key={post.slug} post={post}/> ) 
      }
      
    </main>
  )
}

export default PagePosts;