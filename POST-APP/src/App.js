// import logo from './logo.svg';
// import './App.css';


// // import GreetingMsg from './GreetingMsg.js';
// // import Product from './ProductItem';

// // function App() {
// //   return (
// //     <div  className='App'>
// //       <h1>React Codecmap #8</h1>
// //       { GreetingMsg() }
// //       { Product( {
// //         title: 'XiaoMi Air Purifie', 
// //         description: 'Lorem ipsum dolor sit amet.', 
// //         price: 500 
// //         } ) }
// //       { Product( {
// //         title: '', 
// //         description: '', 
// //         price: 0 
// //         } ) }
// //     </div>
// //   );
// // }



// // import Counter from './counter'

// // function App() {
// //   return (
// //     <div className="App">
// //       { Counter() }
// //     </div>
// //   );
// // }

// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
// import styled from '@emotion/styled';

// const StyledButton = styled.button`
//   border-radius: 5px;
//   background-color: khaki;
//   height: 40px;
//   width: 120px;
//   color: ${function(props) { if (props.primary) {
//     return 'crimson'
//   } return 'cornflowerblue'}};
// `;

// function App() {
//   return (
//     <div>
//       <div className='postapp-header'>
//         <h1 
//         // style={{ // แบบ inline ปกติ
//         //   color:"red",
//         //   fontSize: "2rem",}}
//         // style={{ // แบบ inline @emotion
//         css = {css`
//         color:lightgreen;
//         font-size: 2rem;
//         `}
//           >
//             Post App</h1>
//           <StyledButton primary={false}>Add posts</StyledButton>
//           {/* <button className='add-post-button'>
//             Add Post
//           </button> */}
//       </div>

//       <div className='post-list-container'>
//         <div className='post-list'>
//           <div className='post'>
//             <h3>Title: Post</h3>
//             <p>Post Content</p>
//             <div className='post-footer'>
//               <span>Author: John</span>
//               <div className='post-footer-button'>
//                 {/* <button className='post-footer-edit-button'>Edit</button>
//                 <button className='post-footer-delete-button'>Deleted</button> */}
//                 <StyledButton primary={true}>Edit</StyledButton>
//                 <StyledButton>Deleted</StyledButton>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//     </div>
//   )
// }





// React Router DOM
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage'
import AddPostPage from './pages/AddPostPage'
import SinglePostPage from './pages/SinglePostPage'
import StartPage from './pages/StartPage'
import CounterPage from './pages/CounterPage'
import EditPage from './pages/EditPage'
import { CounterProvider } from './contexts/counter';
import Counter from './component/Counter'
import DesignSystemPage from './pages/DesignSystemPage';

function App() {
  return (
    <div>
      <CounterProvider>
        <BrowserRouter>
          <Switch>
            <Route path='/design-system' component={DesignSystemPage}></Route>
            <Route path='/add-post-page' component={AddPostPage}></Route>
            {/* <Route path='/post-page' component={SinglePostPage}></Route> */}
            <Route path='/post-page/:postId' component={SinglePostPage}></Route>
            <Route path='/home' component={HomePage}></Route>
            <Route path='/counter-page' component={CounterPage}></Route>
            {/* <Route path='/edit-post-page' component={EditPage}></Route> */}
            <Route path='/edit-post-page/:postId' component={EditPage}></Route>
            <Route path='/' component={StartPage}></Route>
          </Switch>
        </BrowserRouter>
      </CounterProvider>
    </div>
  );
}





export default App;
