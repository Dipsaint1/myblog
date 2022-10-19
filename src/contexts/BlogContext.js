import React, { useContext, useState, createContext, useEffect } from 'react';
import client from '../client';

const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const [ posts, setPosts ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);
  const [ category, setCategory ] = useState('all');
  const [ collapseBlogView, setCollapseBlogView ] = useState(false);


  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await client.fetch(`*[_type =='posts']{
          _id,
          title, 
          description,
          'slug': slug.current, 
          'image':mainImage.asset->url, 
          featured, 
          'category': categories[0]->{
            name,
            'image': image.asset->url
          },
          publishedAt, 
          body,
          'author': author[0]->{
            _id,
            name,
            'url': image.asset->url
          },
        }`);
        
        // console.log(data);
        setPosts(data)
        setLoading(false)
      } 
      catch (error) {
        setError(true);
        setLoading(false);
      } 
    }

    getPosts();

  }, []);

  const handleCategory = (e) => {
    const value  = e.target.attributes.name.value;
    setCategory(value);
    setCollapseBlogView(false)
  }

  const value = {
    posts, category, setCategory, handleCategory, collapseBlogView, setCollapseBlogView
  }

  return(
    <BlogContext.Provider value = { value }>
      { !loading && error===false && children }
    </BlogContext.Provider>
  )
}


export const BlogPosts = () =>{
  return useContext(BlogContext);
}