import React from 'react';
import { BlogPosts } from '../contexts/BlogContext';
import Post from './Post';


const Food = () => {
  const { posts } = BlogPosts();

  return (
    <section id='food'>
      { posts.filter(post => post.category.name==='Food').map(post => <Post key={post._id} post={post} /> ) }
    </section>
  )
}

export default Food;