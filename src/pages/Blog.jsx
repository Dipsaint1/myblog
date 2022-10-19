import React, { useState, useEffect } from 'react';
import './styles/blog.scss';
import { Link, Outlet } from 'react-router-dom';
import { BlogPosts } from '../contexts/BlogContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


const Posts = () => {
  const [mobileView, setMobileView] = useState(false);
  const {category, handleCategory, collapseBlogView, setCollapseBlogView } = BlogPosts();

  useEffect(() => {

    resizeScreen();

    window.addEventListener('resize', resizeScreen);

    return () =>  window.removeEventListener('resize', resizeScreen) 

  }, []);

  const resizeScreen = () => {
    if(window.innerWidth <= 900) setMobileView(true);
    else setMobileView(false)
  }

  const handleView = () => {
    if(collapseBlogView) setCollapseBlogView(false);
    else setCollapseBlogView(true);
  } 


  return (
    <section id='blog'>
      <div className="blog-container">
        <div className="logo-wrapper">
          <span className="logo">CYBER9JA</span>
        </div>

        <nav className={!collapseBlogView ? 'blog-categories-container active' : 'blog-categories-container'}>
          <ul className="blog-categories-wrapper">
            <li className='blog-category'
              style={{color: category === 'all' ? 'black': 'white', backgroundColor: category === 'all' ? ' #FFD050' : 'inherit'}} >
              <Link 
                name='all'
                className='blog-category-link'
                to='/blog'
                onClick={handleCategory} 
                >All
              </Link>
            </li>
            <li className='blog-category' 
                style={{color: category === 'sport' ? 'black': 'white', backgroundColor: category === 'sport' ? ' #FFD050' : 'inherit'}}
            >
              <Link
                name='sport'
                className='blog-category-link'
                onClick={handleCategory}
                to='sport'
                >Sport
              </Link> 
            </li>
            <li className='blog-category' 
                style={{color: category === 'technology' ? 'black': 'white', backgroundColor: category === 'technology' ? ' #FFD050' : 'inherit'}}  
            >
              <Link
                name='technology'
                className='blog-category-link'
                onClick={handleCategory} 
                to='technology'
                >Technology
              </Link>
            </li>
            <li className='blog-category'
                style={{color: category === 'health' ? 'black': 'white', backgroundColor: category === 'health' ? ' #FFD050' : 'inherit'}}
            >
              <Link 
                name='health'
                className='blog-category-link'
                onClick={handleCategory}
                to='/blog/health'
                >Health
              </Link> 
            </li>
            <li className='blog-category'
                style={{color: category === 'relationship' ? 'black': 'white', backgroundColor: category === 'relationship' ? ' #FFD050' : 'inherit'}} 
            >
              <Link
                name='relationship'
                className='blog-category-link'
                onClick={handleCategory}
                to='relationship'
                >Relationship
              </Link>
            </li>
            <li className='blog-category' 
              style={{color: category === 'business' ? 'black': 'white', backgroundColor: category === 'business' ? ' #FFD050' : 'inherit'}}
              >
              <Link
                name='business'
                className='blog-category-link'
                onClick={handleCategory} 
                to='business'
                >Business
              </Link>
            </li>
            <li className='blog-category' 
              style={{color: category === 'food' ? 'black': 'white', backgroundColor: category === 'food' ? ' #FFD050' : 'inherit'}}
            >
              <Link
                name='food'
                className='blog-category-link'
                onClick={handleCategory} 
                to='food'
                >Food
              </Link>
            </li>
            <li className='blog-category'
                style={{color: category === 'travel' ? 'black': 'white', backgroundColor: category === 'travel' ? ' #FFD050' : 'inherit'}} 
            >
              <Link
                name='travel'
                className='blog-category-link'
                onClick={handleCategory} 
                to='travel'
                >Travel
              </Link>
            </li>
            <li className='blog-category' 
              style={{color: category === 'design' ? 'black': 'white', backgroundColor: category === 'design' ? ' #FFD050' : 'inherit'}} >
              <Link
                name='design'
                className='blog-category-link'
                onClick={handleCategory} 
                to='design'
                >Design
              </Link>
            </li>
            <li className='blog-category' 
                style={{color: category === 'news' ? 'black': 'white', backgroundColor: category === 'news' ? ' #FFD050' : 'inherit'}} 
            >
              <Link
                name='news'
                className='blog-category-link'
                onClick={handleCategory} 
                to='news'
                >News
              </Link>
            </li>
          </ul>
        </nav>

        { mobileView && 
          <div className="mobile-menu-wrapper">
            { <FontAwesomeIcon onClick={handleView} icon={ collapseBlogView ? faTimes : faBars } className='icon bars' /> }
          </div>
        }
      </div>
      
      <Outlet/>

    </section>
    
  )
}

export default Posts;