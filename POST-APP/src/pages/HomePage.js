/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom'

import '../App.css';
import logo from '../logo.svg';

// ปิดเพื่อสร้าง component style แยกออกมาแล้ว import ใช้หลายๆที่
// const StyledButton = styled.button`
//   border-radius: 5px;
//   background-color: khaki;
//   height: 40px;
//   width: 120px;
//   color: ${function(props) { if (props.primary) {
//     return 'crimson'
//   } return 'cornflowerblue'}};
// `;

import Button from '../component/Button';
import { useCounter } from "../contexts/counter";

import { usePosts } from '../utils/post';



function HomePage() {

    // การ link ไปหน้าต่อไป
    let history = useHistory();

    function handleAddPostClick() {
        history.push('/add-post-page')
        // console.log('test click ')        
    };
    
    function handleCounterPageClick() {
        history.push('/counter-page')
        // console.log('test click ')        
    };
  

    // // การใช้ useState
    // const [posts, setPosts] = useState([]);

    // useEffect(function() {
    //     async function getPosts() {
    //         let response = await fetch('http://localhost:8000/posts');
    //         let DATA = await response.json();
    //         // console.log(DATA);
    //         // console.log(DATA.data);
    //         setPosts(DATA.data);
    //     }
    //     getPosts();
    // }, []) 
    // console.log(posts)
    


    // // refactor ไปอยู่ใน utils.js
    // เมื่อ fetch แล้ว code Error => ใช้ try { } catch (error) และทำให้ ค่าออกมาเป็นอีกแบบ
    // const [posts, setPosts] = useState([]);
    // const [isError,setIsError] = useState(null)

    // useEffect(function() {
    //     async function getPosts() {
    //     try {
    //         let response = await fetch('http://localhost:8000/posts');
    //         let DATA = await response.json();
    //         setPosts(DATA.data);
    //         } catch(error) {
    //             console.log('Error !')
    //             setIsError(true)
    //         }
    //     }
    //     getPosts();
    // }, [])     


    // // refactor ไปอยู่ใน utils.js
    // button event add - DELETE
    // async function handleDeletePost(postId){
    //   console.log(postId)
    //   const deleteConfrim = window.confirm('DELETE POST?');
    //   if (deleteConfrim) {
    //     let response = await fetch('http://localhost:8000/posts/' + postId, {
    //       method: 'DELETE'
    //     });
    //     if (response.ok) {
    //       let newPosts = posts.filter(function(post) {
    //         return post.id !== postId;
    //       });
    //       setPosts(newPosts);
    //     }
    //   }
    // };

    const postsFn = usePosts();


    
    function handleEditPost(postId){
      console.log(postId)
      history.push('/edit-post-page/' + postId)
    };

    // เอา counter มาแสดงในหน้าแรก
    const counter = useCounter();

    return (
    <div>
      <div className='postapp-header'>
        <h1 
        css = {css`
        color:lightgreen;
        font-size: 2rem;
        `}
          >
            Post App</h1>
          {/* <StyledButton primary={false} onClick={handleAddPostClick}>Add posts</StyledButton> */}
          <div>
            <Button primary={false} onClick={handleAddPostClick}>Add posts</Button>
            <Button primary={false} onClick={handleCounterPageClick}>Counter Page</Button>
          </div>
      </div>

      <div className='post-list-container'>
        <div className='post-list'>

        {/*  */}
        {postsFn.isLoading && <h1>Loading...</h1>}

        {/* สำหรับ Error แบบ useState */}
        {postsFn.isError && <h1>Error!. Plz try again later!</h1>}

        {/* ใช้ .map ดึงข้อมูล ARR ของ OBJ เป็น ARR ของ HTML Ele มาแสดงผล */}
            {postsFn.posts.map( function(post)  {
                return (
                <div key={post.id} className='post'>
                    <h3 onClick={function() {
                      // return history.push('/post-page')}
                      return history.push('/post-page/' + post.id)}
                    }
                      >Title: {post.title}</h3>
                    <p>{post.content}</p>
                    <div className='post-footer'>
                        <span>Author: John</span>
                        <div className='post-footer-button'>
                            {/* <StyledButton primary={true}>Edit</StyledButton>
                            <StyledButton primary={true} onClick={function(){handleDeletePost(post.id)}}>Deleted</StyledButton> */}
                            <Button primary={true} onClick={function(){handleEditPost(post.id)}}>Edit</Button>
                            <Button primary={true} onClick={function(){postsFn.handleDeletePost(post.id)}}>Deleted</Button>
                        </div>
                    </div>
                </div>
              )
            })}
        
        

        {/* ตอนใส่ข้อมูลปกติ */}
          {/* <div className='post'>
            <h3>Title: Post</h3>
            <p>Post Content</p>
            <div className='post-footer'>
              <span>Author: John</span>
              <div className='post-footer-button'>
                <StyledButton primary={true}>Edit</StyledButton>
                <StyledButton>Deleted</StyledButton>
              </div>
            </div>
          </div> */}

        </div>
      </div>


      <div className='postapp-footer'
        css = {css`
        align-items: center;
        display: flex;
        justify-content: center;
        padding: 15px;
        background-color: lightsalmon;
      `}>
          <h1
          css = {css`
            font-size: 2rem;
            color:lightgreen;
          `}>
            Counter: {counter.state.counter}
          </h1>
      </div>



    </div>
  )


}

export default HomePage