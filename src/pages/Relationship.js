import React from 'react';
import { BlogPosts } from '../contexts/BlogContext';
import Post from './Post';


const Relationship = () => {
  const { posts } = BlogPosts();

  return (
    <section id='relationship'>
      { posts.filter(post => post.category.name==='Relationship').map(post => <Post key={post._id} post={post} /> ) }
    </section>
  )
}

export default Relationship;