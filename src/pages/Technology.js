import React from 'react';
import { BlogPosts } from '../contexts/BlogContext';
import Post from './Post';


const Technology = () => {
  const { posts } = BlogPosts();

  return (
    <section id='Technology'>
      { posts.filter(post => post.category.name==='Technology').map(post => <Post key={post._id} post={post} /> ) }
    </section>
  )
}

export default Technology;