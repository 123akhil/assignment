import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import axios from "axios";
function Giphy() {
    const[data, setData] = useState([]);
    useEffect(()=> {
        const fetchData= async () => {
            const results = await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                   api_key: "vyXwhudikPlG5bjLry0Lv9KUcvpzY5me",
                   limit: 15
                }
            });
            console.log(results);
            setData(results.data.data);
        };
  
        fetchData();
    }, []);

    const renderGifs=()=>{
        return data.map(e => {
            return (
                <gif key={e.id}>
                  <img src={e.images.fixed_height.url}/>
                </gif>
            )
        })
    }

    return (
        <GiphyContainer>
            <form>
                <input id="search" type="search" placeholder="Search GIF" />
                <button id="btnSearch">Go</button>
              </form>
           {renderGifs()}
        </GiphyContainer>
    )
}

export default Giphy

const GiphyContainer = styled.div`
   margin: 0 auto;
   width: 100%;
   height:300px;
   display:block;
   justify-content:center;
   overflow-y: auto;
   overflow-x: hidden;
   position: relative;
     
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: #663e68;
        border-radius: 20px;
    }
    &::-webkit-scrollbar-track {
        background: var(--slack-color);
        border-radius: 20px;
    }
    > form {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }

  > form > input {
    height: 12px;
    width: 80%;
    border: 1px solid gray;
    border-radius: 50px;
    padding: 20px;
    margin-left: 15px;
    outline: none;

    font-family: Georgia, "Times New Roman", Times, serif;
  }
  > form > button {
    font-size: large;
    background-color: red;
    padding: 4px;
    border-radius: 10px;
    margin: 10px;
  }
`;
const gif = styled.div`
  
`;