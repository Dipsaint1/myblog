import React from 'react';
import { BlogPosts } from '../contexts/BlogContext';
import Post from './Post';


const Health = () => {
  const { posts } = BlogPosts();

  return (
    <section id='health'>
      { posts.filter(post => post.category.name==='Health').map(post => <Post key={post._id} post={post} /> ) }
    </section>
  )
}

export default Health;