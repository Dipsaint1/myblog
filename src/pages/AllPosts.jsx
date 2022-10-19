import React from 'react';
import { BlogPosts } from '../contexts/BlogContext';
import Post from './Post';

const Posts = () => {
  const { posts } = BlogPosts();

  return (
    <section className='all-post' id='all-posts'>
      { posts.map(post => <Post key={post._id} post={post} /> ) }
    </section>
  )
}

export default Posts