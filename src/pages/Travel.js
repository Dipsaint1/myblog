import React from 'react';
import { BlogPosts } from '../contexts/BlogContext';
import Post from './Post';


const Travel = () => {
  const { posts } = BlogPosts();

  return (
    <section id='travel'>
      { posts.filter(post => post.category.name==='Travel').map(post => <Post key={post._id} post={post} /> ) }
    </section>
  )
}

export default Travel;