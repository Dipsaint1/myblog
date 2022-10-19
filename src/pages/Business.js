import React from 'react';
import { BlogPosts } from '../contexts/BlogContext';
import Post from './Post';


const Business = () => {
  const { posts } = BlogPosts();

  return (
    <section id='business'>
      { posts.filter(post => post.category.name==='Business').map(post => <Post key={post._id} post={post} /> ) }
    </section>
  )
}

export default Business