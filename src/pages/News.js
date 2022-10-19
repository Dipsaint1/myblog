import React from 'react';
import { BlogPosts } from '../contexts/BlogContext';
import Post from './Post';


const News = () => {
  const { posts } = BlogPosts();
  return (
    <section className='news' id='news'>
      { posts.filter(post => post.category.name === 'News').map(post => <Post key={post._id} post={post} /> ) }
    </section>
  )
}

export default News