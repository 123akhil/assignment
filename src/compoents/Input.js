import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { Button } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import GifIcon from "@material-ui/icons/Gif";
import Modal from "./Modal/Modal";
import Giphy from "./Giphy";

function Input() {
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef(null); //picking text from the inputfield
  const [GIFData, setGIFData] = useState({});

  const sendPost = (e) => {
    e.preventDefault();
    // return (document.getElementById("log").innerHTML = inputRef.current.value);
    // if (!inputRef.current.value) return;

    // inputRef.current.value = "";
  };
  return (
    <InputContainer>
      <InputBody>
        <InputAvatar />
        <form>
          <input
            type="textarea"
            ref={inputRef}
            placeholder={`What's on your mindddd.....`}
          />
          <Button hidden type="submit" onClick={sendPost}>
            SEND
          </Button>
        </form>
      </InputBody>
      {GIFData ? <img alt="" src={GIFData} /> : <></>}
      <br></br>
      <InputIcons>
        <Video>
          <VideoIcon />
          <p> Video</p>
        </Video>
        <Images>
          <PhotoIcon />
          <p> Images </p>
        </Images>
        <Gif onClick={() => setShowModal(true)}>
          <Gifs fontSize="large" />
          <p> Gif's</p>
          {showModal && (
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              <Giphy setGIFData={setGIFData} />
            </Modal>
          )}
        </Gif>
      </InputIcons>
      {/* <div id="log"></div> */}
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
`;

const InputBody = styled.div`
  align-items: center;
  display: flex;

  > .MuiSvgIcon-root {
    /* margin-left: 150px; */
    /* margin-right: 30px; */
  }
  > form {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }

  > form > input {
    height: 12px;
    width: 90%;
    border: 1px solid gray;
    border-radius: 50px;
    padding: 18px;
    outline: none;

    font-family: Georgia, "Times New Roman", Times, serif;
  }
  > form > button {
    display: none;
  }
`;
const InputIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  border-top-width: 1px;
`;
const Video = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  padding: 4px;
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
const Images = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  padding: 4px;
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
const Gif = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  padding: 4px;
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
  color: red;
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
