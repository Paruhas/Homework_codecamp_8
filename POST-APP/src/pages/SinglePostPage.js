/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { usePosts } from "../utils/post";

function SinglePostPage() {
    const [post, setPost] = useState({})

    // // import usePosts() มาจาก util เพื่อให้แสดง Post title ในหน้า SinglePostPage
    const postsFn = usePosts();
    
    let params = useParams()
    console.log('params: ', params)

    useEffect( function() {
        async function getPostsById() {
            let response = await fetch('http://localhost:8000/posts/' + params.postId , {
                method: "GET"
            }
            );
            let data = await response.json(); // แกะซองจดหมาย ที่ได้รับมากจาก sever ที่กำลังแปลงกลับเป็น json
            console.log(data);
            setPost(data.data);
        }

        return getPostsById()
    }, []); // อยากได้ค่าเป็น ARR => ทำครั้งเดียว

    return (
    <div>

        <div className='postapp-header'>
        <h1 
        css = {css`
        color:lightgreen;
        font-size: 2rem;
        `}
          >Single Post Page</h1>
        </div>

        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>

        {/* map ข้อมูล POST TITLE ทั้งหมด มาแสดงในหน้านี้ */}
        <hr />
        <div>
            <h1>Post Title</h1>
            {postsFn.posts.map((post, index) => {
                return (
                <h2 key={index}>
                    {post.title}
                </h2>
                )
            })}
        </div>

    </div>
    )
}

export default SinglePostPage;