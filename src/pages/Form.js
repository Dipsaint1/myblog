// import React, { useState } from 'react';
// import categories from '../components/categories.json';
// // import uuid from 'react-uuid';
// import './styles/form.scss';
// import { ToastContainer } from 'react-toastify';
// import { notify } from '../utilities/Utilities';
// import { doc, setDoc, Timestamp, updateDoc, serverTimestamp, arrayUnion } from 'firebase/firestore';
// // import { db } from '../firebase';


// const FormReg = () => {
//   const [data, setData] = useState({
//     category: '',
//     title: '',
//     author: '',
//     content: '',
//   });

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { category, title, author, content } = data;

//     if(category === '' || title === '' || author === '' || content === '' || category.length <= 1 || title.length <= 1 || author.length <= 1 || content.length <=1 ) return;
    
//     if(!categories.includes(category)){
//       notify('Choose a suitable category', true);
//       return;
//     };
    
//     try{
//       await updateDoc(doc(db, 'blog', 'articles'), {
//         posts: arrayUnion({
//           category: category.toLowerCase().trim(),
//           title: title,
//           author: author,
//           content: content,
//           time: new Date().getTime(),
//           id: new Date().getTime()
//         })
//       });

//       notify('Article successfully posted', false)

//     } catch (error) {
//       console.log(error)
//       notify('An error occurred while posting the article', true)
//     }
    
//   }


//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setData(prev => ({
//       ...prev, 
//       [name]: value
//     }))

//   }


//   return (
//     <section id="form-container">
//       <ToastContainer  />

//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input onChange={handleChange} name='category'  type="text" className="form-control" id="category" placeholder='Category'/>
//         </div>
//         <div className="form-group">
//           <input onChange={handleChange} name='title' type="text" className="form-control" id="title" placeholder='Title'/>
//         </div>

//         <div className="form-group">
//           <input onChange={handleChange} name='author' type="text" className="form-control" id="author" placeholder='Author' />
//         </div>

//         <div className="form-group">
//           <textarea onChange={handleChange} name='content' type="text" className="form-control" id="content" placeholder='Content'/>
//         </div>

//         <div className="form-group">
//           <input name='images' type="file" className="form-control" id="images" multiple />
//         </div>

//         <button  type="submit">Publish</button>

//       </form>
//     </section>
//   )
// }

// export default FormReg;

import React from 'react'

const Form = () => {
  return (
    <div>Form</div>
  )
}

export default Form;