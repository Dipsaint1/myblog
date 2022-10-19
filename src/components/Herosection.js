import React from 'react';
import img from './Assets/man.svg';
import './styles/herosection.scss';
import { Link } from 'react-router-dom';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Herosection = () => {
  return (
    <section id='herosection'>
      <p className="category">Posted on startup</p>
      <h2 className="title">Step-by-step guide to choosing great font pairs</h2>
      <p className="author">By James West  |  May 23, 2022 </p>
      <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      <button><Link to=''>Read more</Link></button>
      <img className='herosection-img' src={img} alt="herosection-ima" />
    </section>
  )
}

export default Herosection