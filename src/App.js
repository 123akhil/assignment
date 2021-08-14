import './App.css';
import Input from './compoents/Input';
import Posts from './compoents/Posts';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
        <div>
        <Heading>
          <h1>Facebook Feed</h1>
        </Heading>
          <Input />
          <Posts />
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