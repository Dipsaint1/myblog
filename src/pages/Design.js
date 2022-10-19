import React from 'react';
import { BlogPosts } from '../contexts/BlogContext';
import Post from './Post';


const Design = () => {
  const { posts } = BlogPosts();

  return (
    <section id='design'>
      { posts.filter(post => post.category.name==='Design').map(post => <Post key={post._id} post={post} /> ) }
    </section>
  )
}

export default Design;