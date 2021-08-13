import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
function Giphy({setGIFData}) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "vyXwhudikPlG5bjLry0Lv9KUcvpzY5me",
          limit: 15,
        },
      });
      console.log(results); //remove
      setData(results.data.data);
    };

    fetchData();
  }, []);

  const renderGifs = () => {
    return data.map((e) => {
      return (
        <gif key={e.id}>
          <img alt="" src={e.images.fixed_height.url} onClick={() => { setGIFData(e.images.fixed_height.url)}} />
        </gif>
      );
    });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "vyXwhudikPlG5bjLry0Lv9KUcvpzY5me",
        q: search,
      },
    });
    setData(results.data.data);
  };

  return (
    <GiphyContainer>
      <GiphyForm>
        <form>
          <input
            onChange={handleSearch}
            value={search}
            id="search"
            type="text"
            placeholder="Search GIF"
          />
          <button onClick={handleSubmit} type="submit" id="btnSearch">
            Go
          </button>
        </form>
      </GiphyForm>
      <GiphyGifs>{renderGifs()}</GiphyGifs>
    </GiphyContainer>
  );
}

export default Giphy;

const GiphyContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 300px;
`;
const GiphyForm = styled.div`
  > form {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }

  > form > input {
    height: 15px;
    width: 85%;
    border: 1px solid gray;
    border-radius: 50px;
    padding: 10px;
    margin-left: 10px;
    outline: none;

    font-family: Georgia, "Times New Roman", Times, serif;
  }
  > form > button {
    font-size: large;
    background-color: pink;
    padding: 2px;
    border-radius: 10px;
    margin: 4px;
    :hover {
      background-color: #ec30ec;
    }
  }
`;
const GiphyGifs = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 250px;
  display: block;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ec30ec;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background: pink;
    border-radius: 20px;
  }
`;
