import React from 'react';
import All from './All';
import Featured from './Featured';
import './styles/posts.scss';

const HomepagePosts = () => {
  return (
    <section id='posts'>
      <div className="posts-wrapper">
        <Featured />
        <All />
      </div>
    </section>
  )
}

export default HomepagePosts