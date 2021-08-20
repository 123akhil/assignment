import './App.css';
import Input from './compoents/Input';
import Posts from './compoents/Posts';
import styled from "styled-components";
import { useState } from 'react';


function App() {
  const[posts, setPosts] = useState([]);//a
  return (
    <div className="App">
        <div>
          <Heading>
            <h1>Facebook Feed</h1>
          </Heading>
          <Input setPosts={setPosts} posts={posts}/>
          {posts.length ? posts.map((post, index) => <Posts gifpost={post.gifpost} message={post.message} setPosts={setPosts} posts={posts} index={index}/>) : <></>}
        </div>
    </div>
  );
}

export default App;
const Heading = styled.div`
  > h1 {
    text-align: center;
    padding-top: 0;
    align-items: center;
    font-family: Georgia, "Times New Roman", Times, serif;
    letter-spacing: 2px;
    color: #4141c0;
  }
`;