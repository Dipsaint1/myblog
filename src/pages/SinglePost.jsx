import React, { useEffect, useState } from 'react';
import './styles/single-post.scss';
import { useParams } from 'react-router-dom';
import client from '../client';
import { date } from '../utilities/Utilities'
import BlockContent from '@sanity/block-content-to-react';

const SinglePost = () => {
  const [loading, setLoading] = useState(true);
  const [ post, setPost ] = useState();
  const [ error, setError ] = useState(false); 
  const { slug } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await client.fetch(`*[slug.current == "${slug}"]{
          title, 
          title,
          body,
          'category': categories[0]->{
            name,
            'image': image.asset -> url
          },
          description, 
          publishedAt,
          'mainImage': mainImage.asset -> url,
          'author': author[0] -> {
            name,
            'image': image.asset -> url
          }
        }`);

        setPost(data[0]);
        setLoading(false);
      } 
      
      catch (err) {
        console.error(err.statusCode);
        setError(true);
        setLoading(false);
      }
    }

    getPost();
  
  }, [slug]);

  return (
    <>
      {
        loading
          ? 
          <div>Loading</div> 
              :
            error 
              ?
            <div>Error</div>
              : 
            <section id='single-post'>
              <h2 className="title">{post.title}</h2>


              <div className="author-information">
                <div className="author-image-wrapper">
                  <img className='author-image' src={post.author.image} alt="" />
                </div>
                <div className="author-profile">
                  <p className="author-name">{post.author.name}</p>
                  <p className="date">Posted on {date(post.publishedAt)}</p>
                </div>
              </div>

              

              <div className="category-wrapper">
                <img className='category-image' src={post.category.image} alt="" />
                <p className="category">{post.category.name}</p>
              </div>

              <div className="main-image-wrapper">
                <img src={post.mainImage} alt={post.title} className="main-image" />
              </div>

              <main className="body-content">
                { 
                  <BlockContent
                    blocks={post.body}
                    projectId='7fxi5gqe'
                    dataset= "production"
                  />
                }
              </main>
            </section> 
      }
    </>
  )
}

export default SinglePost;