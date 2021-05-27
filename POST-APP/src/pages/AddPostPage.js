// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
// import styled from '@emotion/styled';

// const StyledInput = styled.input`
//     border: .1px solid gray;
//     border-radius: 6px;
//     padding: 10px;
//     width: 80vw
// `;

// const StyledText = styled.text`
//     font-size: 1.25rem;
//     font-weight: bold;
// `;

// function AddPostPage() {
//     return (
//     <div>
//         <div>
//             <div><StyledText style={{
//                         fontSize:"2rem",
//                     }} >Post App</StyledText></div>
//         </div>

//         <div>
//             <div>
//                 <div>
//                     <div><StyledText>Title</StyledText></div>
//                     {/* <input type="text" id="post-title" name="post-title" placeholder='Enter post title' /> */}
//                     <div><StyledInput placeholder='Enter post title'></StyledInput></div>
//                 </div>

//                 <div>
//                     <div><StyledText>Description</StyledText></div>
//                     {/* <input type="text" id="post-des" name="post-des" placeholder='Enter post description'/> */}
//                     <div>
//                         <textarea 
//                             css = {css`    
//                             border: .1px solid gray;
//                             border-radius: 6px;
//                             padding: 10px;
//                             width: 80vw;
//                             height: 300px;
//                             `}
//                         ></textarea>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }

// export default AddPostPage





// // ลอกอาจารย์
// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
// import styled from '@emotion/styled';
// import '../App.css';

// function AddPostPage() {
//     return (
//     <div>

//         <div className='postapp-header'>
//             <h1 css = {css`
//             color:red;
//             font-size: 50px;
//             `}>
//             Add Post Page</h1>
//         </div>

//         <div>
//             <div>
//                 <label htmlFor='title'>Title</label>
//                 <input id='title' type='text'></input>
//             </div>

//             <div>
//                 <label htmlFor='description'>Description</label>
//                 <textarea id='description' />
//             </div>

//             <button>Add</button>

//         </div>

//     </div>
//     )
// }

// export default AddPostPage





// การทำให้ Add แล้วติดต่อกับ Sever ได้ ( FRONT <<<>>> END )
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import { useState } from "react";
import { useHistory } from 'react-router-dom';

import '../App.css';

import Button from '../component/Button';

function AddPostPage() {

    let history = useHistory();

    // ทำ state ให้ title กับ description
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function handleTitleChange(event) {
        console.log(event)
        setTitle(event.target.value);
    }

    function handleTitleDescription(event) {
        console.log(event)
        setDescription(event.target.value);
    }
    
    // ใส่ parameter (event) { event.preventDefault() } เพื่อป้องกันการ refresh เมื่อ submit
    function handleFormSubmit(event) {
        console.log(event)
        event.preventDefault()
        createPost();
        console.log('submit')
    }

    async function createPost() {
        let response = await fetch('http://localhost:8000/posts/', {
            method: "POST",
            body: JSON.stringify({ title : title, content: description}),
            headers : {
                "content-type": "application/json"
            },
        });

        // ให้เช็คเงื่อนไข ถ้า respone มัน OK > ให้ history.push ไปที่หน้าแรก 
        if (response.ok) {
            history.push('/');
        }
    }

    console.log('title: ', title);
    console.log('description: ', description);

    return (
    <div>

        <div className='postapp-header'>
            <h1 css = {css`
            color:red;
            font-size: 50px;
            `}>
            Add Post Page</h1>
        </div>

        <form>
            <div>
                <label htmlFor='title'>Title</label>
                <input id='title' type='text' 
                onChange={handleTitleChange}
                value={title}
                ></input>
            </div>

            <div>
                <label htmlFor='description'>Description</label>
                <textarea id='description' 
                onChange={handleTitleDescription}
                value={description}
                />
            </div>

            {/* <button type='submit' 
            onClick={handleFormSubmit}
            >Add</button> */}
            <Button type='submit' 
            onClick={handleFormSubmit}
            >Add</Button>

        </form>
        <div>
            <Button onClick={() => history.push("/home")}>Go Home</Button>
        </div>

    </div>
    )
}

export default AddPostPage