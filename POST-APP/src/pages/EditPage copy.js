// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
// import styled from '@emotion/styled';

// import Button from "../component/Button";

// import '../App.css';

// import { useEffect , useState } from 'react'
// import { useHistory , useParams } from 'react-router-dom'

// function EditPage() {
//     const [title , setTitle] = useState('')
//     const [content , setContent] = useState('')

//     let params = useParams()

//     let history = useHistory()

//     useEffect( function() {
//     async function getPostsById() {
//         let isResponse = await fetch('http://localhost:8000/posts/' + params.postId) 
//         let DATA = await isResponse.json()
//         setTitle(DATA.data.title)
//         setContent(DATA.data.content)
//     }
//     return getPostsById()
//     }, [])
    
//     function handleTitle   (event) {
//         setTitle(event.target.value)
//     }
//     function handleContent  (event) {
//         setContent(event.target.value)
//     }
//     function handleSubmit  (event) {
//         event.preventDefault()
//         editPost();
//     }

//     async function editPost() {
//         let isResponse = await fetch('http://localhost:8000/posts/' + params.postId , {
//             method: 'PUT',
//             body: JSON.stringify({ title: title, content: content}),
//             headers: {
//                 "content-type": "application/json" 
//             },
//         }) 

//         if (isResponse.ok) {
//             history.push('/home')
//         }
//     }

//     return (
//     <div>
//         <div className='postapp-header'>
//             <h1
//             css = {css `
//             color:lightgreen;
//             font-size: 2rem;
//             `}
//             >
//                 Edit Post App
//             </h1>
//         </div>

//         <form>
//         <label>Title</label>
//         <input
//         id='title'
//         type='text'
//         onChange={handleTitle}
//         value={title}
//         ></input>
//         <label>Content</label>
//         <input
//         id='content'
//         type='text'
//         onChange={handleContent}
//         value={content}
//         ></input>
//         <Button
//         type='submit'
//         onClick={handleSubmit}
//         >Submit Edit</Button>
//         </form>
//     </div>
//     )
// }

// export default EditPage