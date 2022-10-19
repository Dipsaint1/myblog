import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Footer, SharedLayout } from './components/Components';
import { About, Contact, Homepage, Form, Blog, SinglePost, 
        Relationship, Design, Travel, News, Food, Health, Sport, 
        Business, AllPosts, Technology } from './pages/Pages';
import { BlogContextProvider } from './contexts/BlogContext';

const RouterLink = () => {
  return (
    <>
      <BlogContextProvider>
        <Routes>
          <Route path='/' element={<SharedLayout/>} >
            <Route index element={<Homepage/>} />
            <Route path='about' exact element={<About/>} />
            <Route path='contact' exact element={<Contact/>} />
          </Route>

          <Route path='/blog' element={<Blog/>} >
            <Route index element={<AllPosts/>} />
            <Route path='/blog/news' exact element={<News/>} />
            <Route path='/blog/sport' exact element={<Sport/>} />
            <Route path='/blog/relationship' exact element={<Relationship/>} />
            <Route path='/blog/design' exact element={<Design/>} />
            <Route path='/blog/business' exact element={<Business/>} />
            <Route path='/blog/travel' exact element={<Travel/>} />
            <Route path='/blog/food' exact element={<Food/>} />
            <Route path='/blog/technology' exact element={<Technology/>} />
            <Route path='/blog/health' exact element={<Health/>} />
            <Route path='/blog/:category/:slug' exact element={<SinglePost/>} />
          </Route>
          <Route path='/form' exact element={<Form/>} />
        </Routes>
      </BlogContextProvider>
      <Footer />
    </>
  )
}

export default RouterLink;