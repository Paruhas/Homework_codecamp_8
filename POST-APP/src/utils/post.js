import { useEffect } from "react";
import { useState } from "react";

import { getPosts } from "../features/posts/postSlice";
import { useDispatch, useSelector } from 'react-redux';

export function usePosts() {
    // const [posts, setPosts] = useState([]); ปิดเพราะใช้ store แทน

    const [isError,setIsError] = useState(null)
    const posts = useSelector((state) => state.posts.posts); // post มาจาก store ของ redux
    const dispatch = useDispatch();
  
    // เช็คว่า Loading อยู่ไหม
    const isLoading = useSelector((state) => state.posts.status === 'pending')

    useEffect(() => {
      dispatch(getPosts());
    }, [])
    
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

    // แบบปกติ
    async function handleDeletePost(postId){
        // console.log(postId)
        // const deleteConfrim = window.confirm('DELETE POST?');
        // if (deleteConfrim) {
        //   let response = await fetch('http://localhost:8000/posts/' + postId, {
        //     method: 'DELETE'
        //   });
        //   if (response.ok) {
        //     let newPosts = posts.filter(function(post) {
        //       return post.id !== postId;
        //     });
        //     setPosts(newPosts);
        //   }
        // }
      };

    return { posts, isError, handleDeletePost, isLoading }
}
