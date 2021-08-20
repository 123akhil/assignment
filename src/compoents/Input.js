import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import GifIcon from "@material-ui/icons/Gif";
import Modal from "./Modal/Modal";
import Giphy from "./Giphy";

function Input({ posts, setPosts }) {
  const [showModal, setShowModal] = useState(false);
  const [GIFData, setGIFData] = useState({});
  const [message, setMessage] = useState("");

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const sendPost = (e) => {
    e.preventDefault();
    if (message) {
      setPosts([
        {
          gifpost: GIFData,
          message: message,
        },
        ...posts,
      ]);
      setGIFData({});
      setMessage("");
    }
  };
  return (
    <InputContainer>
      <InputBody>
        <InputAvatar />
        <input
          onChange={handleMessage}
          value={message}
          type="text"
          placeholder={`What's on your mindddd.....`}
        />
        <Button onClick={sendPost}>POST</Button>
      </InputBody>
      {GIFData ? <img alt="" src={GIFData} /> : <></>}
      <hr></hr>
      <InputIcons>
        <Icons>
          <VideoIcon />
          <p> Video</p>
        </Icons>
        <Icons>
          <PhotoIcon />
          <p> Images </p>
        </Icons>
        <Icons onClick={() => setShowModal(true)}>
          <Gifs fontSize="large" />
          <p> Gif's</p>
          {showModal && (
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              <Giphy setGIFData={setGIFData} />
            </Modal>
          )}
        </Icons>
      </InputIcons>
    </InputContainer>
  );
}

export default Input;

const InputContainer = styled.div`
  max-width: 50%;
  align-items: center;
  text-align: center;
  padding: 10px;
  margin-left: 25%;
  margin-right: 25%;
  background-color: white;
  padding-left: 13px;
  border-radius: 10px;
  box-shadow: 2px 2px #cec5c5;
  > hr {
    border-top: 1px solid gray;
  }
`;

const InputBody = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5px;
  > .MuiSvgIcon-root {
  }
  > input {
    height: 12px;
    width: 70%;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 16px;
    outline: none;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
  > button {
    background-color: #2626e6;
    color: white;
    margin-left: 10px;
    :hover {
      background-color: #4141c0;
    }
  }
`;
const InputIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  border-top-width: 1px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  padding: 4px;
  cursor: pointer;
  > p {
    align-items: flex-start;
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-weight: bold;
  }
  :hover {
    background-color: rgb(235, 227, 227);
  }
`;
const InputAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;
const VideoIcon = styled(VideocamIcon)`
  cursor: pointer;
  color: #ff0000;
  margin-right: 4px;
`;
const PhotoIcon = styled(PhotoCameraIcon)`
  cursor: pointer;
  color: #b5d310;
  margin-right: 4px;
`;
const Gifs = styled(GifIcon)`
  cursor: pointer;
  color: #d68996;
`;
