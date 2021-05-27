/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';

import Button from "../component/Button";

import '../App.css';

import { useEffect , useState } from 'react';
import { useHistory , useParams } from 'react-router-dom';



function EditPage() {
    let history = useHistory(); // ใช้สำหรับกด Submit แล้วกลับไปหน้า home

    // useState เอาค่า title , description มาจากหน้า HomePage 
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // เอาค่า :id มาเป็น Params => {จาก <Route path='/edit-post-page/:postId' component={EditPage}></Route> } > ( ในที่นี้เป็น postId ) => เป็น
    let params = useParams(); 
    console.log('params: ', params)
 
    // fetch data ที่ระบุจาก useParams postId ที่ต้องการ จะได้เป็น OBJ data : { data : content , id , title} => โดยเอาค่าที่ id === params.postId
    useEffect( function() {
        async function getPostsById() {
            let response = await fetch('http://localhost:8000/posts/' + params.postId , {
                method: "GET" // default Method:'GET' จริงๆไม่ต้องใส่ก็ได้
            }
            );
            let data = await response.json(); // รับค่า string JSON { key value ... } แปลงเป็น OBJ { key:value, ...}
            console.log(data);
            // console.log(data.data)
            // setPost(data.data); // ห้าม เราไม่ได้ต้องการ แค่ ค่า data { data : OBJ 3 key/value }
            setTitle(data.data.title); // เอาค่า value data : { data : title  } เข้าไปใน => [title, setTitle] = useState('');
            setDescription(data.data.content); // เอาค่า value data : { data : content  } เข้าไปใน => [description, setDescription] = useState('');
            // console.log(data.data.title)
            // console.log(data.data.content)
        }
        
        return getPostsById() // run Fn getPostsById
    }, []);

    // ดักเมื่อมีการเปลี่ยนแปลง(พิมพ์) title (content ใน database OBJ)
    function handleTitleChange(event) {
        // console.log(event)
        setTitle(event.target.value); // เอาค่า event ของ browser เมื่อมีการเปลี่ยนแปลง(พิมพ์) ไป แทนใน title > useState setTitle (ค่าจาก OBJ SyntheticBaseEvent { target : value }) ซึ่ง value นี่เปลี่ยนเรื่อยๆเมื่อพิมพ์
    }

    // ดักเมื่อมีการเปลี่ยนแปลง(พิมพ์) description (content ใน database OBJ)
    function handleTitleDescription(event) {
        // console.log(event)
        setDescription(event.target.value); // เอาค่า event ของ browser เมื่อมีการเปลี่ยนแปลง(พิมพ์) ไป แทนใน description > useState setDescription (ค่าจาก OBJ SyntheticBaseEvent { target : value }) ซึ่ง value นี่เปลี่ยนเรื่อยๆเมื่อพิมพ์
    }
    
    // ดักเมื่อมีการกด Submit => run Fn editPost();
    function handleFormSubmit(event) {
        // console.log(event)
        event.preventDefault() // ป้องกันการ refresh เมื่อ Submit
        editPost();
        // console.log('submit')
    }

    // Fn editPost เมื่อเรากด Submit จะทำการ แก้ไข ค่า เข้าไปใน database /posts/:postId (กำหนดจาก App.js) ด้วย Method:'PUT'(method แก้ไขค่า)
    async function editPost() {
        let response = await fetch('http://localhost:8000/posts/' + params.postId , {
            method: "PUT",
            body: JSON.stringify({ title : title, content: description}), // แปลงค่าเป็น string JSON { key value ... }
            headers : {
                "content-type": "application/json" // ซองจดหมาย บอกข้อมูลว่าเป็นประเภทไหน JSON type แบบไหน
            },
        });

        if (response.ok) { // เมื่อกด Submit แล้วกลับไปหน้า home
            history.push('/home');
        }
    }

    return (
    <div>

        <div className='postapp-header'>
            <h1
            css = {css `
            color:lightgreen;
            font-size: 2rem;
            `}
            >
                Edit Post App
            </h1>
        </div>

        <form>
            <div>
                <div><label htmlFor='title'>Title</label></div>

                <div><input id='title' type='text' 
                onChange={handleTitleChange} // Fn handle ดักการพิมพ์ title (content ใน database OBJ)
                value={title}
                > 
                </input></div>
            </div>

            <div>
                <div><label htmlFor='description'>Description</label></div>

                <div><textarea id='description' 
                onChange={handleTitleDescription} // Fn handle ดักการพิมพ์ description (content ใน database OBJ)
                value={description}
                >
                </textarea></div>
            </div>

            <Button type='submit' 
                onClick={handleFormSubmit}  // Fn handle ดัก เมื่อกด Submit
                >
                    Submit Edit
            </Button>

        </form>

    </div>
    )
}

export default EditPage









