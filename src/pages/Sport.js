import React from 'react';
import { BlogPosts } from '../contexts/BlogContext';
import Post from './Post';


const Sport = () => {
  const { posts } = BlogPosts();

  return (
    <section id='sport'>
      { posts.filter(post => post.category.name==='Sport').map(post => <Post key={post._id} post={post} /> ) }
    </section>
  )
}

export default Sport;